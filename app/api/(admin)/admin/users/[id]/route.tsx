import connectToDB from "@/lib/connect";
import User from "@/lib/models/user.model";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export async function GET(request: NextApiRequest) {
    const params = request.url;
    const segments = params?.split('/');
    const id = segments?.[segments.length - 1];

    await connectToDB()

    const users = await User.findOne({_id: id});

    return NextResponse.json({"message" : users}, { status: 200});
}


export async function POST(request: Request) {
    try {
 
        const req = await request.json();

        

        const { username, email, password, fullname, isAdmin } = req;

        await connectToDB();

        const existingUser = await User.findOne({ username: username, email: email });
        // console.log(existingUser);
        if (!existingUser) {
            return NextResponse.json({ Message: "User doesnt exist" }, { status: 400 });
        }

        existingUser.username = username;
        existingUser.email = email;
        existingUser.password = bcrypt.hash(password, 10);
        existingUser.fullname = fullname;
        existingUser.isAdmin = isAdmin;
        
        existingUser.save();

        console.log(existingUser);
      
    return NextResponse.json({"message" : "User Created edited"}, { status: 200});
    }
        catch (error) {
            console.error('Error processing request:', error);
            return NextResponse.json({ Message: "Internal Server Error" }, { status: 500 });
    }   
}