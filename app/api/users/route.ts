import { NextRequest } from "next/server"

export function GET(){
    return Response.json({
        name: "Sarathi Prabu GET",
        email: "sarathiprabum@gmail.com"
    })
}
export async function POST(req: NextRequest){
    const body = await req.json();
    console.log(body)

    return Response.json({
        message: "You are loggin in Successfully!!"
    })
}
export function PUT(){
    return Response.json({
        name: "Sarathi Prabu PUT",
        email: "sarathiprabum@gmail.com"
    })
}