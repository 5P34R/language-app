import connectToDB from "@/lib/connect";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import University from "@/lib/models/university.models";
import School from "@/lib/models/school.models";

export async function GET(request: NextApiRequest) {
    const params = request.url;
    const segments = params?.split('/');
    const id = segments?.[segments.length - 1];

    await connectToDB()

    const school = await School.findOne({_id: id});

    return NextResponse.json({"message" : school}, { status: 200});
}


export async function POST(request: Request) {
    try {
 
        const req = await request.json();
    

        const { _id, name, description, link } = req;

        await connectToDB();

        const existingSchool = await School.findOne({ id: _id  });
        // console.log(existingUser);
        if (!existingSchool) {
            return NextResponse.json({ Message: "School doesnt exist" }, { status: 400 });
        }

        existingSchool.name = name;
        existingSchool.description = description;
        existingSchool.link = link;
       
        
        existingSchool.save();

        console.log(existingSchool);
      
    return NextResponse.json({"message" : "School Created edited"}, { status: 200});
    }
        catch (error) {
            console.error('Error processing request:', error);
            return NextResponse.json({ Message: "Internal Server Error" }, { status: 500 });
    }   
}