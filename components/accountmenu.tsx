import { signOut } from "next-auth/react";
import React from "react";

interface AccountMenuProps {
    visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
    if (!visible) {
        return null;
    }
    return (
        <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
            <div className="flex flex-col gap-3">
                <div className="px-3 group/item flex flex-row items-center w-full">
                    <img className="w-8 rounded-md" src="/images/profile.jpg" alt="Profile Icon" />
                    <p className="text-white text-sm group-hover/item:underline ml-4">
                        Username
                    </p>
                </div>
                <hr className="bg-gray-600 border-0 h-px my-4" />
                <div 
                    onClick={() => signOut()} 
                    className="text-center text-white text-sm hover:underline cursor-pointer py-2"
                >
                    Sign out of Netflix
                </div>
            </div>
        </div>
    );
}

export default AccountMenu;
