import { SignOutButton } from "@clerk/clerk-react"
import { useToast } from "@/hooks/use-toast"
import { useTranslation } from "react-i18next";

const SignOutLink = () => {
  const { i18n, t } = useTranslation();
    const { toast } = useToast()

    const handleLogout = () =>{
        toast({ description:'Logout Successfully!!!'})
    };


  return (
    <SignOutButton redirectUrl="/">
        <button onClick={handleLogout}>{t("logout")}</button>
    </SignOutButton>
  )
}
export default SignOutLink