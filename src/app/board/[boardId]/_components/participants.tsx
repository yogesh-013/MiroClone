
"use client";

import { useOthers , useSelf } from "../../../../../liveblocks.config";
import { UserAvatar } from "./userAvatar";
import { connectionIdToColor } from "@/lib/utils";

const MAX_SHOWN_OTHER_USERS = 2;

export const Participants = () => {
  const otherUsers = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = otherUsers.length > MAX_SHOWN_OTHER_USERS;

console.log("<<<Other Users >>>> " , otherUsers);
console.log("<<<Current Users >>>> " , currentUser);


  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      <div className="flex gap-x-2">
        {otherUsers
          .slice(0, MAX_SHOWN_OTHER_USERS)
          .map(({ connectionId, info }) => (
            <UserAvatar
              key={connectionId}
              src={info?.avatar}
              name={info?.name}
              fallback={info?.name?.[0] || "T"}
              borderColor={connectionIdToColor(connectionId)}
            />
          ))}
        {currentUser && (
          <UserAvatar
            src={currentUser.info?.avatar}
            name={`${currentUser.info?.name} (You)`}
            fallback={currentUser.info?.name?.[0]}
            borderColor={connectionIdToColor(currentUser.connectionId)}
          />
        )}
        {hasMoreUsers && (
          <UserAvatar
            name={`${otherUsers.length - MAX_SHOWN_OTHER_USERS} more`}
            fallback={`+${otherUsers.length - MAX_SHOWN_OTHER_USERS}`}
          />
        )}
      </div>
    </div>
  );
};

