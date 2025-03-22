import React from "react";

interface ButtonProps {
    styles?: string;
    text?: string;
}

const Button: React.FC<ButtonProps> = ({ styles = "", text = "Get Started" }) => (
    <button
        type="button"
        className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]`}
    >
        {text}
    </button>
);
export default Button;