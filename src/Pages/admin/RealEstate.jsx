import FormInputs from "@/components/form/FormInputs";
import TextAreaInput from "@/components/form/TextAreaInput";
import { useForm } from "react-hook-form";
import Buttons from "@/components/form/Buttons";
import CategoryInput from "@/components/form/CategoryInput";
import Mainmap from "@/components/map/Mainmap";
import TypesInput from "@/components/form/TypesInput";
import BedroomInput from "@/components/form/BedroomInput";
import BathroomInput from "@/components/form/BathroomInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { realestateSchema } from "@/Utils/schemas";
import { createRealestate } from "@/api/realestate";
import { useTranslation } from "react-i18next";

// clerk
import { useAuth } from '@clerk/clerk-react'
import FormUploadImage from "@/components/form/FormUploadImage";
import { createAlert } from "@/Utils/createAlert";
import { categoryMap, typeMap } from "@/translationsMap";

const RealEstate = () => {
  const { t } = useTranslation();
  const { getToken, userId } = useAuth();

  const { register, handleSubmit, formState, setValue, reset, control } = useForm({
    resolver: zodResolver(realestateSchema),
  });
  const { errors, isSubmitting } = formState;

  const easternSubmit = async (data) => {
    const token = await getToken();

    const payload = {
      ...data,
      category: categoryMap[data.category] || data.category,
      type: typeMap[data.type] || data.type,
    };

    createRealestate(token, payload)
      .then((res) => {
        reset();
        createAlert("success", t("createdSuccessfully"));
      })
      .catch((err) => {
        console.log(err);
        createAlert("error", t("pleaseCreateProfile"));
      });
  };

  return (
    <section className="container px-14">
      <h1 className="capitalize text-2xl font-semibold mb-4 mt-4">{t("createarealestate")}</h1>
      <div className="border p-8 rounded-md">
        <form onSubmit={handleSubmit(easternSubmit)}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">

            <FormInputs
              register={register}
              name="title"
              type="text"
              placeholder={t("inputtitle")}
              label={t("title")}
              errors={errors}
            />

            <FormInputs
              register={register}
              name="price"
              type="number"
              placeholder={t("inputprice")}
              label={t("price")}
              errors={errors}
            />

            <TextAreaInput
              register={register}
              name="description"
              type="text"
              placeholder={t("inputdescription")}
              label={t("description")}
              errors={errors}
            />
            <div>
              <CategoryInput
                name="category"
                register={register}
                setValue={setValue}
                label={t("inputcategory")}
              />

              <TypesInput
                name="type"
                register={register}
                setValue={setValue}
                label={t("type")}
              />
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="relative">
              <FormInputs
                register={register}
                name="space"
                type="number"
                placeholder={t("inputspace")}
                label={t("space")}
                errors={errors}
              />
              <span className="absolute right-10 top-10 -translate-y-1/2 text-gray-400 text-sl">{t("sqm")}</span>
            </div>

            <BedroomInput
              name="bedroom"
              register={register}
              setValue={setValue}
              label={t("bedroom")}
            />

            <BathroomInput
              name="bathroom"
              register={register}
              setValue={setValue}
              label={t("bathroom")}
            />

            <FormUploadImage setValue={setValue} />
          </div>

          <Mainmap register={register} control={control} setValue={setValue} />

          <Buttons
            text={t("createarealestate")}
            type="submit"
            isPending={isSubmitting}
          />
        </form>
      </div>
    </section>
  );
};

export default RealEstate;
