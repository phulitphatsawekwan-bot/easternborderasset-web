import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "../ui/label"
import { useTypes } from "@/Utils/types"
import { useTranslation } from "react-i18next";

const TypesInput = ({ name, register, setValue }) => {
    const { t } = useTranslation();
    const types = useTypes();
    return (
        <div className="mb-2">
            <input hidden {...register(name)} />

            <Label className="capitalize">{t("type")}</Label>
            <Select
                onValueChange={(value) => setValue(name, value)}
                required>
                <SelectTrigger>
                    <SelectValue placeholder={t("selecttype")}/>
                </SelectTrigger>

                <SelectContent>
                    {types.map((item) => {
                        return <SelectItem
                            key={item.label}
                            value={item.label}>
                            <span className="flex item-center gap-4">
                                <item.icon />
                                <p className="capitalize">{item.label}</p>
                            </span>
                        </SelectItem>
                    })}

                </SelectContent>
            </Select>
        </div>
    )
}
export default TypesInput