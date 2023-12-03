import { NextResponse } from 'next/server'


export async function POST(req,res) {
    const JSONBody=await req.json();
    
    try {
        // const rawResponse = await axios(process.env.API_URL+"api/CreateContact",{
        //     method: 'POST',
        //     body: JSON.stringify(JSONBody)
        // });
        return NextResponse.json({message:"success! However no external link for subscription is given!!"})
    }catch (e) {
        return NextResponse.json(e)
    }

}