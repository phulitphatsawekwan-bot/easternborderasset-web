import Swal from "sweetalert2";

export const createAlert = (icon, text) => {
    return Swal.fire({
        icon: icon || "info",
        text: text || "Something Wrong!!!",
        timer: 3000,
    }); 
};

export const createNotify = (icon, text) => {
    return Swal.fire({
        position: "top-end",
        icon: icon,
        text: text,
        showConfirmButton: false,
        timer: 1000,
    }); 
};