import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";
import { auth , currentUser } from "@clerk/nextjs/server";
import { api } from "../../../../convex/_generated/api";
const liveBlocks = new Liveblocks({
  secret: "sk_dev_kCZW6DsijBuNgxuGwVX6O53UQ0uG2TmwnpXNa4_TEcFPPNs7qSkXZqi-3Zk1VBDp",
});
const convex = new ConvexHttpClient(
  process.env.NEXT_PUBLIC_CONVEX_URL!
)
export async function POST(request: Request) {
  const authorize = auth()
  const user = await currentUser()
  if(!authorize || !user){
    return new Response("Unauthorized" , {
      status : 403
    })
  }
  console.log("User => " , user)
  console.log("Authorize => " , authorize);
  
  const {room} = await request.json()
  const board = await convex.query(api.boardss.get , {
    id : room 
  })

  if (board?.orgId !== authorize.orgId) {
    return new Response("Unauthorized", { status: 403 });
  }
  const userInfo = {
    name: user.firstName || "Teammate",
    picture: user.imageUrl,
  };
  console.log("UserInfo => " , userInfo)
const session = liveBlocks.prepareSession(user.id, { userInfo });
if (room) {
  session.allow(room, session.FULL_ACCESS);
}
const { status, body } = await session.authorize();
console.log("Body => " , body)
return new Response(body, { status });
  

 
}