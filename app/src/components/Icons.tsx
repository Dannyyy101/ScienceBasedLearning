import React from "react";

interface IconProps {
    className?: string;
}

export const SearchIcon: React.FC<IconProps> = ({className}) => (
    <span className={`material-symbols-outlined ${className}`}>search</span>
);

export const MenuIcon: React.FC<IconProps> = ({className}) => (
    <span className={`material-symbols-outlined ${className}`}>menu</span>
);

export const BookIcon: React.FC<IconProps> = ({className}) => (
    <span className={`material-symbols-outlined ${className}`}>menu_book</span>
);