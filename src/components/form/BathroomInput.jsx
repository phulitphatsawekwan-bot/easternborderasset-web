import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "../ui/label"
import { useBathroomOptions } from "@/Utils/bathroom"
import { useTranslation } from "react-i18next";

const BathroomInput = ({ name, register, setValue }) => {
    const { t } = useTranslation();
    const bathroom = useBathroomOptions();
    return (
        <div className="mb-2">
            <input hidden {...register(name)} />

            <Label className="capitalize">{t("bathroom")}</Label>
            <Select onValueChange={(value) => setValue(name, value)}>
                <SelectTrigger>
                    <SelectValue placeholder={t("selectbathroom")} />
                </SelectTrigger>

                <SelectContent>
                    {bathroom.map((item) => {
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
export default BathroomInput