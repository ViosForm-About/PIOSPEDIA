import { NextResponse } from 'next/server'
import { checkStatus } from '@/lib/rumahotp'
import { sendTelegram } from '@/lib/telegram'

export async function GET(req: Request) {
  const id = new URL(req.url).searchParams.get('id')!
  const status = await checkStatus(id)
  if (status === 'paid') await sendTelegram(`PAID ${id}`)
  return NextResponse.json({ status })
}
