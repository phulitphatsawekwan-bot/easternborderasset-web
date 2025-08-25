import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "../ui/label"
import { useBedroomOptions } from "@/Utils/bedroom"
import { useTranslation } from "react-i18next";

const BedroomInput = ({ name, register, setValue }) => {
    const { t } = useTranslation();
    const bedroom = useBedroomOptions();
    return (
        <div className="mb-2">
            <input hidden {...register(name)} />

            <Label className="capitalize">{t("bedroom")}</Label>
            <Select onValueChange={(value) => setValue(name, value)}>
                <SelectTrigger>
                    <SelectValue placeholder={t("selectbedroom")} />
                </SelectTrigger>

                <SelectContent>
                    {bedroom.map((item) => {
                        return <SelectItem
                            key={item.label}
                            value={item.label}>
                            <span className="flex item-center gap-4">
                                <p className="capitalize">{item.label}</p>
                            </span>
                        </SelectItem>
                    })}

                </SelectContent>
            </Select>
        </div>
    )
}
export default BedroomInput