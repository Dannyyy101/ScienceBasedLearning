'use client'
import {useEffect, useState} from "react";
import {Course} from "@/utils/types/courses.types";
import {BookIcon} from "@/components/Icons";
import {Progressbar} from "@/components/Progressbar";

export default function Page() {
    const [courses, setCourses] = useState<Course[]>([])

    useEffect(() => {
        fetch('/api/courses').then(res => res.json()).then((item) => setCourses(item))
    }, [])


    return <main className="w-screen h-screen flex justify-center">
        <section className="w-2/3 mt-32 relative">
            <h1 className="text-3xl font-bold">Kurse</h1>
            <button className="absolute top-0 right-0 w-28 h-8 border rounded-md">Erstellen</button>
            <section className="flex flex-wrap mt-8">
                {courses.map(course => <CourseCard course={course}/>)}
            </section>
        </section>
    </main>
}

const CourseCard = ({course}: { course: Course }) => {
    return (
        <div className={"w-96 h-52 rounded-md border relative"}>
            <div className="w-full h-16 px-4 flex items-center rounded-t-md"
                 style={{backgroundColor: course.secondary_color_hex || "white"}}>
                <div className="rounded-full p-2 w-10 h-10 flex justify-center items-center"
                     style={{backgroundColor: course.primary_color_hex || "white"}}>
                    <BookIcon/>
                </div>
                <h2 className="pl-1 text-2xl font-semibold">{course.name}</h2>
            </div>
            <div className="w-full px-4 mt-4">
                <div className="w-full flex">
                    <p className="text-sm w-1/2">{10} Aufgaben</p>
                </div>
                <Progressbar progress={50} color={course.primary_color_hex || "white"}/>
                <p className="w-full text-right text-sm text-fgColor_disabled mt-1">
                    {40}% erledigt
                </p>
            </div>
            <button className="absolute bottom-4 left-4 w-32 h-10 bg-black rounded-md text-white">Lernen</button>
        </div>
    )
}