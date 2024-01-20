import connectToDB from "@/lib/connect";
import University from "@/lib/models/university.models";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    await connectToDB()

    const university = await University.find({})

    return NextResponse.json(university)

}


export async function POST(request: Request) {
   await connectToDB()
    
        const { name, description, link } = await request.json()
    
        const university = await University.create({
            name,
            description,
            link
        })
    
        return NextResponse.json(university) 
}