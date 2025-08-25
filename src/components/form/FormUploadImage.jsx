import { resizeFile } from "@/Utils/resizeimage";
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { uploadImage } from "@/api/uploadfile";
import { useAuth } from "@clerk/clerk-react";
import { useState } from "react";
import { RotateCw } from "lucide-react";
import { useTranslation } from "react-i18next";


const FormUploadImage = ({ setValue }) => {
    const { t } = useTranslation();
    const [isloading, setIsLoading] = useState(false);
    const { getToken } = useAuth();
    // JS
    const hdlOnChange = async (e) => {
        setIsLoading(true)
        const token = await getToken();
        const file = e.target.files[0];
        if (!file) return;
        try {
            const resizedImage = await resizeFile(file);
            const res = await uploadImage(token, resizedImage);
            // console.log('Hello', res.data.result);
            setValue("image", res.data.result);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };
    return (
        <div>
            <Label>{t("uploadimg")}</Label>
            <div className="flex items-center gap-2">
                <Input type="file" onChange={hdlOnChange} />
                {isloading && <RotateCw className="animate-spin" />}
            </div>
        </div>
    )
}
export default FormUploadImage