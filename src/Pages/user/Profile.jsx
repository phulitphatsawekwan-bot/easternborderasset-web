import Buttons from "@/components/form/Buttons";
import FormInputs from "@/components/form/FormInputs";
import { useForm } from "react-hook-form";
import { profileSchema } from "@/Utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProfile, getProfile } from "@/api/profile";
import { createAlert } from "@/Utils/createAlert";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

// clerk
import { useAuth } from '@clerk/clerk-react'

const Profile = () => {
  const { i18n, t } = useTranslation();
  const [profileData, setProfileData] = useState(null);
  // clerk
  const { getToken } = useAuth()

  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(profileSchema)
  });
  const { errors, isSubmitting } = formState;

  const loadProfile = async () => {
    try {
      const token = await getToken();
      if (!token) return;

      const res = await getProfile(token);
      setProfileData(res.data?.result || null);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const easternSubmit = async (data) => {
    const token = await getToken();
    createProfile(token, data)
    .then(async (res)=>{
      await loadProfile();
      createAlert("success","Created Successfully");
    })
    .catch((err)=>{
      console.log(err)
      createAlert("error", err.message);
    })
  };
  return <section className="container px-14 mb-12">
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
      {profileData && (
        <div className="border p-8 rounded-md mt-4">
          <h2 className="text-xl font-semibold mb-2">Profile Created</h2>
          <p><span className="font-semibold">First name:</span> {profileData.firstname}</p>
          <p><span className="font-semibold">Last name:</span> {profileData.lastname}</p>
          <p><span className="font-semibold">Email:</span> {profileData.email}</p>
        </div>
      )}
  </section>;
};

export default Profile;
