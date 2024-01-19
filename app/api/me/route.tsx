import * as jose from 'jose';

export async function GET(request: Request) {

    try{
        const cookie = request.headers.get('cookie')
        const token = cookie?.split(';').find((c: string) => c.trim().startsWith('token='))?.split('=')[1];
    
        const { payload } = await jose.jwtVerify(token!, new TextEncoder().encode(process.env.JWT_SECRET!));
    
        return new Response(JSON.stringify(payload), {
            headers: { 'content-type': 'application/json' },
        });
    }

    catch(error){
        console.error('Error processing request:', error);
        return new Response(JSON.stringify({ Message: "Internal Server Error" }), {
            headers: { 'content-type': 'application/json' },
        });
    }
}