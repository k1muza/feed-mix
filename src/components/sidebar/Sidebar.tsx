// Sidebar.tsx
import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';

type NavItem = {
    name: string;
    to: string;
    icon: string;
};

interface SidebarProps {
    navItems: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ navItems }) => {
    const navClasses = clsx(
        'flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300',
    )
    return (
        <div className="flex flex-col items-center w-16 pb-4 overflow-auto border-r border-gray-300">
            <a className="flex items-center justify-center flex-shrink-0 w-full h-16 bg-gray-300" href="#">
                <i className="fa-solid fa-snowflake"></i>
            </a>

            {navItems.map(item => (
                <NavLink
                    to={item.to}
                    title={item.name}
                    key={item.name}
                    className={({ isActive, isPending }) =>
                        clsx(navClasses, {
                            pending: isPending,
                            'bg-gray-300': isActive,
                        })
                    }
                >
                    <i className={item.icon}></i>
                </NavLink>
            ))}

            <a className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 mt-auto rounded hover:bg-gray-300" href="#">
                <i className="fa-regular fa-circle-user"></i>
            </a>
        </div>
    );
}

export default Sidebar;
