import { NextResponse } from 'next/server'
import { generateReceipt } from '@/lib/pdf'

export async function POST(req: Request) {
  const data = await req.json()
  const pdfStream = generateReceipt(data)

  return new Response(pdfStream as any, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename=receipt.pdf'
    }
  })
}
