import { PrismaClient } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
    try {
        const data = await prisma.computer.findMany()
        return NextResponse.json({success: true, data})
    }
    catch (err) {
        return NextResponse.json({success: false, error: err})
    }
}

export async function POST(request: NextRequest) {
    try {
        const data: any = await request.json()

        const res = await prisma.computer.create({
            data: {
                manufacturer: data.manufacturer,
                processor_type: data.processor_type,
                clock_frequency: Number(data.clock_frequency),
                ram: Number(data.ram),
                hdd: Number(data.hdd)
            }
        })
        return NextResponse.json({success: true, data: res})
    }
    catch (err) {
        console.log(err)
        return NextResponse.json({success: false, error: err})
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const id = searchParams.get('id')

        if (id) {
            const res = await prisma.computer.delete({
                where: {
                    id: Number(id)
                }
            })
            return NextResponse.json({success: true, data: res})    
        }
    }
    catch (err) {
        console.log(err)
        return NextResponse.json({success: false, error: err})
    }
}

