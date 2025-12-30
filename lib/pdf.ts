import PDFDocument from 'pdfkit'

export function generatePDF() {
  const doc = new PDFDocument()
  doc.text('PiosPedia Receipt')
  doc.end()
  return doc
}
