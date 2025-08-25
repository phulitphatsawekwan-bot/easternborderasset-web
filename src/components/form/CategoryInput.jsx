import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "../ui/label"
import { useCategories } from "@/Utils/categories"
import { useTranslation } from "react-i18next";

const CategoryInput = ({ name, register, setValue }) => {
    const { t } = useTranslation();
    const categories = useCategories();
    return (
        <div className="mb-2">
            <input hidden {...register(name)} />

            <Label className="capitalize">{t("category")}</Label>
            <Select
                onValueChange={(value) => setValue(name, value)}
                required>
                <SelectTrigger>
                    <SelectValue placeholder={t("inputcategory")} />
                </SelectTrigger>

                <SelectContent>
                    {categories.map((item) => {
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
export default CategoryInput