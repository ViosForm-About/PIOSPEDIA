export default function Receipt({ params }: any) {
  return (
    <div style={{padding:40}}>
      <h1>Struk Pembayaran</h1>
      <a href="/api/receipt" target="_blank">Download PDF</a>
      <p>ID: {params.id}</p>
    </div>
  )
}