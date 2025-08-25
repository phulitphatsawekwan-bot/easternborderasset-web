import useRealestateStore from "@/store/realestate-store";
import { CardSignInButtons, CardSubmitButtons } from "./CardButtons";
import { useForm } from "react-hook-form";
import { useAuth, useUser } from "@clerk/clerk-react";
import { createNotify } from "@/Utils/createAlert";


const FavoriteToggleButton = ({ realestateId, isFavorite }) => {
  // Clerk
  const { getToken, isSignedIn } = useAuth();
  // const { user } = useUser()
  // Hook-Form
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;
  // Zustand
  const actionAddorRemoveFavorite = useRealestateStore(
    (state) => state.actionAddorRemoveFavorite);
  // const actionListRealestate = useRealestateStore((state) => state.actionListRealestate)

  const hdlSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    const token = await getToken()
    // console.log(token)
    const res = await actionAddorRemoveFavorite(token, {
      realestateId,
      isFavorite
    });
    if (res.success) {
      createNotify("success", res.message);
    } else {
      createNotify("error", res.message);
    }
    // actionListRealestate(user.id);
  }

  // console.log(realestateId, isFavorite);

  if(!isSignedIn){
    return <CardSignInButtons />
  }


  return (
    <form onSubmit={handleSubmit(hdlSubmit)}>
      <CardSubmitButtons
        isPending={isSubmitting}
        isFavorite={isFavorite}
      />
    </form>
  )
}
export default FavoriteToggleButton 