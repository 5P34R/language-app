import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminPagelayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <div className="w-1/6 border-r-2 h-screen space-y-5 gap-4 flex flex-col items-center">
                <Link href="/admin/dashboard" className="w-full">
                    <Button className="w-full bg-transparent text-black hover:text-white">Home</Button>
                </Link>
                <Link href="/admin/dashboard" className="w-full">
                    <Button className="w-full bg-transparent text-black hover:text-white">Home</Button>
                </Link>
                <Link href="/admin/dashboard" className="w-full">
                    <Button className="w-full bg-transparent text-black hover:text-white">Home</Button>
                </Link>
                <Link href="/admin/dashboard" className="w-full">
                    <Button className="w-full bg-transparent text-black hover:text-white">Home</Button>
                </Link>
                <Link href="/admin/dashboard" className="w-full">
                    <Button className="w-full bg-transparent text-black hover:text-white">Home</Button>
                </Link>
                
            </div>
            <div className="mt-10 w-full">
                {children}
            </div>
        </div>
    )
}