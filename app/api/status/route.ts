import { NextResponse } from 'next/server'
import { checkStatus } from '@/lib/rumahotp'
import { sendTelegram } from '@/lib/telegram'

export async function POST(req: Request) {
  const { id } = await req.json()
  const status = await checkStatus(id)

  if (status === 'paid') {
    await sendTelegram(`✅ Pembayaran BERHASIL\nID: ${id}`)
  }

  return NextResponse.json({ status })
}
