import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children, className }) => {

    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
