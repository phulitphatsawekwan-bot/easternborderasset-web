import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UserIcon from "./UserIcon"
import { Button } from "../ui/button"
import { links } from "@/Utils/links";
import { Link } from "react-router";
import {
  SignedIn, SignedOut,
  SignInButton, SignOutButton,
  SignUpButton, UserButton
}
  from '@clerk/clerk-react';
import SignOutLink from "./SignOutLink";
import { useTranslation } from "react-i18next";


const DropdownListMenu = () => {
  const { t } = useTranslation();
  const menuLinks = links(t);
  return (
    <DropdownMenu>
      <SignedOut>
        <Button className="text-blue-900 border-none bg-white rounded-full w-200 hover:bg-opacity-70">
          <SignedOut>
            {/* กรณียังไม่ได้ log in */}
            <SignUpButton mode='modal'>
              <button>{t("loginandregister")}</button>
            </SignUpButton>
          </SignedOut>
        </Button>
      </SignedOut>
      <SignedIn>
        {/* กรณีที่ log in แล้ว */}
        <DropdownMenuTrigger asChild>
          <Button className="border-none bg-transparent shadow-none hover:bg-transparent">
            <UserButton />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{t("myaccount")}</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {menuLinks.map((item, index) => (
            <DropdownMenuItem key={index}>
              <Link to={item.href}>{item.label}</Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>


        </DropdownMenuContent>
      </SignedIn>
    </DropdownMenu>
  );
};
export default DropdownListMenu