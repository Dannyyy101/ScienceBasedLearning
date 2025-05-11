'use client'
import {useState} from "react";
import {MenuIcon} from "@/components/Icons";
import {Route} from "@/utils/types/routes.types";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes: Route[] = [{name: "Home", path: "/"}, {name: "Kurse", path: ("/courses")}]

    if (!open) {
        return <button className="w-fit h-fit absolute top-4 left-4 hover:cursor-pointer" onClick={() => setOpen(true)}>
            <MenuIcon/></button>
    }

    return <header className={`w-52 absolute h-screen top-0 left-0 ${open && "opacity-100"}`}>
        <section className={`w-full h-full bg-gray-100 relative`}>
            <button className={`w-fit h-fit absolute top-4 ${open ? "right-4" : "left-4"} hover:cursor-pointer trans`}
                    onClick={() => setOpen((prev) => !prev)}>
                <MenuIcon/></button>
            <div className="w-full h-full flex flex-col pt-12">
                {routes.map((route: Route) => <Link className="p-2 text-xl" key={route.name}
                                                    href={route.path}>{route.name}</Link>)}
            </div>
        </section>
        <div className="absolute bottom-4 left-4 flex items-center"><Image
            src={"https://lh3.googleusercontent.com/a/ACg8ocIGPCgscPu520YfZNI6trMLziYQDnE4TQo-xrVmfDxke2-Vug=s96-c"}
            alt={"profile-image"}
            width={32}
            height={32}
            className={"rounded-full"}
        />
            <div className="pl-1"><h1>Daniel Stöcklein</h1>
                <p className="text-xs">
                    Lehrer
                </p></div>
        </div>
    </header>
}