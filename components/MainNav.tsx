"use client"
import { Button } from './ui/button'
import { Icons } from './icons'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from './ui/separator'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { decodeToken } from '@/lib/utils'


export default function MainNav() {

    const router = useRouter();
    const [userProfile, setUserProfile] = useState<any>(null);

    const getUserProfile = async () => {
        await fetch('/api/me').then(async (res) => {
            if (res.status === 200) {
                const data = await res.json();
                console.log(data)
                setUserProfile(data);
            }
            else {
                setUserProfile(null);
            }
        }       
        )
    }

    useEffect(() => {
        getUserProfile()
    }, []);

    return (
        <nav className="sticky top-0 text-gray-100 body-font w-full shadow-xl bg-gray-700 opacity-70">
            <div className="w-full flex p-7 items-center">
                <img src="/icon.jpg" alt="Company Icon" className="h-10 md:h-12" />
            {/* pc menu */}
            <div className="hidden md:flex md:items-center ml-auto space-x-4 ">
                <a href="#" className="mr-5 hover:text-yellow-500">Home</a>
                <a href="#" className="mr-5 hover:text-yellow-500">About Us</a>
                <a href="#" className="mr-5 hover:text-yellow-500">Events</a>
                <a href="#" className="mr-5 hover:text-yellow-500">Contact Us</a>

                <Button className='bg-gray-200 rounded-full shadow-xl hover:bg-yellow-500 hover:text-gray-100 text-gray-600'>EN/DE</Button>


                {
                    userProfile !== null ? (
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-300">{userProfile.username}</span>
                        </div>
                    ) : (
                        <Button className=" hover:text-yellow-400 rounded-full border-2 hover:border-yellow-300 px-10" onClick={() => router.push("/login")}>
                            Login
                        </Button>
                    )
                }

            </div>

            {/* mobile menu */}
            <div className="block md:hidden ml-auto">
                <Sheet>
                    <SheetTrigger className="bg-inherit" asChild>
                        <Button className='bg-inherit'>
                            <Icons.ham />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                        <img src="/icon.jpg" alt="Company Icon" className="h-15" />
                        </SheetHeader>

                        <Separator className='my-3' />

                        <SheetDescription>
                            <ul className="space-y-10 flex flex-col items-center">
                                <li>
                                    <a href="#" className="hover:text-yellow-500">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-yellow-500">About Us</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-yellow-500">Events</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-yellow-500">Contact Us</a>
                                </li>
                            </ul>
                        </SheetDescription>
                        <Separator className='my-3' />
                        <SheetFooter className='space-y-3 gap-4'>
                            <Button className='bg-gray-200 rounded-full shadow-xl hover:bg-yellow-500 hover:text-gray-100 text-gray-600'>EN/DE</Button>
                            
                                <Button className=" hover:text-yellow-400 rounded-full border-2 hover:border-yellow-300 px-10" onClick={() => router.push("/login")}>
                                    Login
                                </Button>
                           
                        </SheetFooter>
                        <SheetClose>
                            <Button className='bg-inherit'>
                                <Icons.close />
                            </Button>
                        </SheetClose>
                    </SheetContent>
                </Sheet>                
            </div>

            </div>    
        </nav>
    )
}