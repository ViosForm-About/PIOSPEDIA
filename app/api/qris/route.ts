import { NextResponse } from 'next/server'
import { createDeposit } from '@/lib/rumahotp'

export async function POST(req: Request) {
  const { nominal } = await req.json()
  return NextResponse.json(await createDeposit(nominal))
}