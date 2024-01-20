import connectToDB from "@/lib/connect";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import University from "@/lib/models/university.models";

export async function GET(request: NextApiRequest) {
    const params = request.url;
    const segments = params?.split('/');
    const id = segments?.[segments.length - 1];

    await connectToDB()

    const university = await University.findOne({_id: id});

    return NextResponse.json({"message" : university}, { status: 200});
}


export async function POST(request: Request) {
    try {
 
        const req = await request.json();

        

        const { _id, name, description, link } = req;

        await connectToDB();

        const existingUniversity = await University.findOne({ id: _id  });
        // console.log(existingUser);
        if (!existingUniversity) {
            return NextResponse.json({ Message: "User doesnt exist" }, { status: 400 });
        }

        existingUniversity.name = name;
        existingUniversity.description = description;
        existingUniversity.link = link;
       
        
        existingUniversity.save();

        console.log(existingUniversity);
      
    return NextResponse.json({"message" : "University Created edited"}, { status: 200});
    }
        catch (error) {
            console.error('Error processing request:', error);
            return NextResponse.json({ Message: "Internal Server Error" }, { status: 500 });
    }   
}