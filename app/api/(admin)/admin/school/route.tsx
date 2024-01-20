import connectToDB from "@/lib/connect";
import School from "@/lib/models/school.models";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    await connectToDB()

    const school = await School.find({})

    return NextResponse.json(school)

}


export async function POST(request: Request) {
   await connectToDB()
    
        const { name, description, link } = await request.json()
    
        const school = await School.create({
            name,
            description,
            link
        })
    
        return NextResponse.json(school) 
}