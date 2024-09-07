"use client";

import { ConvexProviderWithClerk  } from "convex/react-clerk";
import { ClerkProvider , useAuth  } from "@clerk/nextjs";
import { ConvexReactClient , Authenticated , AuthLoading} from "convex/react";
import { Loading } from "@/components/loading/page";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: React.ReactNode }) {
  return( <ClerkProvider publishableKey= {process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
  <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
    <Authenticated>
    {children}
    </Authenticated>
   <AuthLoading>
   <Loading/>
   </AuthLoading>
  </ConvexProviderWithClerk>
</ClerkProvider>)
}