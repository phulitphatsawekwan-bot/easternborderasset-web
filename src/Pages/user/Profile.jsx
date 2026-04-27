import Buttons from "@/components/form/Buttons";
import FormInputs from "@/components/form/FormInputs";
import { useForm } from "react-hook-form";
import { profileSchema } from "@/Utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProfile } from "@/api/profile";
import { createAlert } from "@/Utils/createAlert";
import { useTranslation } from "react-i18next";

// clerk
import { useAuth } from "@clerk/clerk-react";

const Profile = () => {
  const { t } = useTranslation();

  const { getToken, userId } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(profileSchema),
  });

  const easternSubmit = async (data) => {
    try {
      const token = await getToken();

      // ✅ กัน token หาย
      if (!token) {
        createAlert("error", "Unauthorized: No token");
        return;
      }

      // ✅ กัน userId หาย
      if (!userId) {
        createAlert("error", "User not found");
        return;
      }

      // ✅ payload ที่ส่งไป backend
      const payload = {
        ...data,
        userId,
      };

      const res = await createProfile(token, payload);

      console.log("SUCCESS:", res.data);
      createAlert("success", "Created Successfully");
    } catch (err) {
      console.log("ERROR FULL:", err.response || err);

      // ✅ เอา error จริงจาก backend
      const message =
        err.response?.data?.error ||
        err.response?.data?.message ||
        err.message;

      createAlert("error", message);
    }
  };

  return (
    <section className="container px-14 mb-14">
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

            <Buttons text={t("createprofile")} isPending={isSubmitting} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Profile;
