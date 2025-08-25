import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FormInputs = ({ register, name, type, placeholder, label, errors }) => {
  return (
    <div className="mb-2">
      {/* แสดง label ที่ส่งมาแทนที่จะใช้ name */}
      <Label htmlFor={name} className="capitalize">
        {label}
      </Label>
      <Input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={`${errors[name] && "border-red-500"}`}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};

export default FormInputs;
