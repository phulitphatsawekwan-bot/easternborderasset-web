import { Type } from "lucide-react";
import { Button } from "../ui/button";
import { RotateCw } from 'lucide-react';

const Buttons = ({ text, isPending, type }) => {
    return <Button
        type={type}
        disabled={isPending}
        className="capitalize mt-2">
        {
           isPending
                    ? (
                        <>
                            <RotateCw className="animate-spin" />
                            <span>Please wait...</span>
                        </>
                    )
                    : <span>{text}</span>
        }
    </Button>;
}
export default Buttons