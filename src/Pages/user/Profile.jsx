import Buttons from "@/components/form/Buttons";
import FormInputs from "@/components/form/FormInputs";
import axios from "axios";
import { useForm } from "react-hook-form";
import { profileSchema } from "@/Utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProfile } from "@/api/profile";
import { createAlert } from "@/Utils/createAlert";
import { useTranslation } from "react-i18next";

// clerk
import { useAuth } from '@clerk/clerk-react'

const Profile = () => {
  const { i18n, t } = useTranslation();
  // clerk
  const { getToken,userId } = useAuth()

  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: zodResolver(profileSchema)
  });
  const { errors, isSubmitting } = formState;

  const easternSubmit = async (data) => {
    const token = await getToken();
    createProfile(token, data)
    .then((res)=>{
      console.log(res)
      createAlert("success","Created Successfully");
    })
    .catch((err)=>{
      console.log(err)
      createAlert("error", err.message);
    })
  };
  return <section className="container px-14">
    <h1 className="capitalize text-2xl font-semibold mb-4 mt-4">
      {t("createprofile")}
    </h1>
      <div className="border p-8 rounded-md">
        <form onSubmit={handleSubmit(easternSubmit)}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInputs 
            register={register}
            name="firstname"
            type="text"
            placeholder={t("firstname")}
            label={t("firstname")}
            errors={errors}
            />
            <FormInputs 
            register={register}
            name="lastname"
            type="text"
            placeholder={t("lastname")}
            label={t("lastname")}
            errors={errors}
            />

            <Buttons 
            text={t("createprofile")}
            isPending={isSubmitting}
            />
          </div>
        </form>
      </div>
  </section>;
};

export default Profile;
