import { generatePDF } from '@/lib/pdf'

export async function GET() {
  const pdf = generatePDF()
  return new Response(pdf as any, {
    headers: { 'Content-Type': 'application/pdf' }
  })
}
