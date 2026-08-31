'use client';

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {useRouter} from "next/navigation";
import {LogOut} from "lucide-react";
import NavItems from "@/components/NavItems";

const UserDropdown = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        router.push("/sign-in");
    }

    const user = {name: 'John', email: 'contact@imgogo.com'};

    return (
        <DropdownMenu>
            {/* Removed asChild and the inner Button component. Styling is now applied directly to the Trigger. */}
            <DropdownMenuTrigger className="flex items-center gap-3 p-2 rounded-md text-gray-400 hover:text-yellow-500 hover:bg-white/5 focus:outline-none transition-colors">
                <Avatar className="h-8 w-8">
                    <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbp7wG_cAoHBpl3H-GzKNYPlkiOm4d6JXi1Ajp2XpTFQ&s=10"/>
                    <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                        {user.name[0]}
                    </AvatarFallback>
                </Avatar>
                <div className="hidden md:flex flex-col items-start">
        <span className='text-base font-medium text-inherit'>
            {user.name}
        </span>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 text-gray-400">
                {/* Wrap the label in a DropdownMenuGroup to satisfy the context requirement */}
                <DropdownMenuGroup>
                    <DropdownMenuLabel>
                        <div className="flex relative items-center gap-3 px-2 py-2">
                            <Avatar className="h-10 w-10 shrink-0">
                                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbp7wG_cAoHBpl3H-GzKNYPlkiOm4d6JXi1Ajp2XpTFQ&s=10"/>
                                <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                                    {user.name[0]}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col overflow-hidden">
                    <span className='text-base font-medium text-gray-400 truncate'>
                        {user.name}
                    </span>
                                <span className="text-sm text-gray-500 truncate">
                        {user.email}
                    </span>
                            </div>
                        </div>
                    </DropdownMenuLabel>
                </DropdownMenuGroup>

                <DropdownMenuSeparator className="bg-gray-600"/>

                <DropdownMenuItem
                    onClick={handleSignOut}
                    className="flex items-center text-gray-100 text-md font-medium hover:text-yellow-500 focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer">
                    <LogOut className="h-4 w-4 mr-2 hidden sm:block"/>
                    Logout
                </DropdownMenuItem>
                <DropdownMenuSeparator className="hidden sm:block bg-gray-600"/>

                <nav className="sm:hidden">
                    <NavItems/>
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UserDropdown
