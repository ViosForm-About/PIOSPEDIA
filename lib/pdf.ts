import PDFDocument from 'pdfkit'
import { PassThrough } from 'stream'

export function generateReceipt(data: any) {
  const doc = new PDFDocument()
  const stream = new PassThrough()
  doc.pipe(stream)

  doc.fontSize(18).text('STRUK PEMBAYARAN', { align: 'center' })
  doc.moveDown()
  doc.text(`ID Transaksi: ${data.id}`)
  doc.text(`Nominal: Rp ${data.nominal}`)
  doc.text(`Admin: Rp ${data.adminFee}`)
  doc.text(`Status: PAID`)
  doc.moveDown()
  doc.text('Terima kasih telah melakukan pembayaran')

  doc.end()
  return stream
}
