import { NewButton } from "./new-button";
import { List } from "./list";
import { UserButton } from "@clerk/nextjs";

export function Sidebar() {
  return (
    <aside className="fixed z-[1] left-0 bg-blue-950 h-full w-[90px] flex p-3 flex-col gap-y-4 text-white">
        <List/>
      <NewButton/>
      <UserButton/>

    </aside>
  );
}