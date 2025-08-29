import HomeIcon from '../icons/HomeIcon'
import SearchIcon from '../icons/SearchIcon'
import PlusIcon from '../icons/PlusIcon'
import BellIcon from '../icons/BellIcon'
import ProfileIcon from '../icons/ProfileIcon'
import SettingIcon from '../icons/SettingIcon'
import { useState } from 'react'
import NewPostCard from '@/features/post/components/NewPostForm'

export default function Navbar() {
    const [active, setActive] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { id: "home", icon: HomeIcon, onClick: () => console.log("Go Home") },
        { id: "search", icon: SearchIcon, onClick: () => console.log("Search something") },
        { id: "plus", icon: PlusIcon, onClick: () => setIsOpen(true) },
        { id: "bell", icon: BellIcon, onClick: () => console.log("Show notifications") },
        { id: "profile", icon: ProfileIcon, onClick: () => console.log("Go Profile") },
    ];

    return (
        <>
            {/* Sidebar desktop */}
            <div className="hidden mobile:flex flex-col fixed h-screen">
                <div className="flex justify-center items-center p-4">
                    <img src="src/assets/logo.png" alt="logo" className="w-24 h-16" />
                </div>

                <div className="flex flex-col items-center w-20 justify-center flex-1 gap-8">
                    {navItems.map(({ id, icon: Icon, onClick }) => (
                        <div
                            key={id}
                            onClick={() => { setActive(id); onClick?.(); }}
                            className={`group flex w-16 h-11 items-center justify-center rounded-lg cursor-pointer 
                                ${id === "plus"
                                    ? "bg-[rgba(0,0,0,0.07)]"
                                    : "hover:bg-[rgba(0,0,0,0.035)]"
                                }`}
                        >
                            <Icon active={active === id} />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center w-20 mb-8 cursor-pointer">
                    <SettingIcon />
                </div>
            </div>

            {/* Navbar mobile */}
            <div className="mobile:hidden top-0 left-0 right-0 flex items-center z-10 h-16 relative">
                <div className="absolute left-1/2 transform items-center -translate-x-1/2">
                    <img src="src/assets/logo.png" alt="logo" className="w-24 h-16" />
                </div>

                <div className="flex items-center w-10 cursor-pointer ml-auto">
                    <div className="[transform:rotateY(180deg)]">
                        <SettingIcon />
                    </div>
                </div>
            </div>

            <div className="mobile:hidden fixed bottom-0 left-0 right-0 bg-white/70 backdrop-blur-lg border-t flex justify-around items-center h-16 z-10">
                {navItems.map(({ id, icon: Icon, onClick }) => (
                    <div
                        key={id}
                        onClick={() => {setActive(id); onClick?.();}}
                        className={`group flex flex-1 mx-1 p-3 items-center justify-center rounded-lg cursor-pointer 
                                ${id === "plus"
                                ? "bg-[rgba(0,0,0,0.07)]"
                                : "hover:bg-[rgba(0,0,0,0.035)]"
                            }`}
                    >
                        <Icon active={active === id} />
                    </div>
                ))}
            </div>

            <NewPostCard isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}
