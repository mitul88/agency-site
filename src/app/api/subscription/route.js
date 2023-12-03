import { NextResponse } from 'next/server'


export async function POST(req,res) {
    const JSONBody=await req.json();
    
    try {
        // business logic or connect outside API if any
        return NextResponse.json({message:"success! However no external link for subscription is given!!"})
    }catch (e) {
        return NextResponse.json(e)
    }

}