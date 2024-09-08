import SearchInput from "./search-input";
import { UserButton } from "@clerk/nextjs";
import { OrganizationSwitcher } from "@clerk/nextjs";
import InviteButton from "./invite-button";

const NavBar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5">
      {/* Search Input */}
      <div className="w-full hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>

      {/* Organization Switcher (Visible on smaller screens) */}
      <div className="block lg:hidden lg:flex-1">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "376px",
              },
              organizationSwitcherTrigger: {
                padding: "6px",
                width: "150px",
                borderRadius: "8px",
                border: "4px solid #E5E7EB",
                justifyContent: "space-between",
                backgroundColor: "white",
              },
            },
          }}
        />
      </div>
     

      {/* Invite Button & User Button aligned to the right */}
      <div className="flex items-center ml-auto gap-x-4 ">
        <InviteButton  />
        <UserButton />
      </div>
    </div>
  );
};

export default NavBar;
