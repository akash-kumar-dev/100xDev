import { NextRequest, NextResponse } from "next/server";

// `params` should be awaited before using its properties
// export async function GET(req: NextRequest, arg: any) {
//     const temp = await arg.params;
//     console.log(temp.nextauth);

// export function GET(req: NextRequest, { params: { nextauth } }: any) {
export function GET(req: NextRequest, { params: { nextauth } }: {
    params: {
        nextauth: string[]
    }
}) {
    console.log(nextauth);
    return NextResponse.json({
        message: "Hello from Auth route"
    })
}