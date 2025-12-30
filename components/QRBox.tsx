export default function QRBox({ qr, total, id }: any) {
  return (
    <div>
      <img src={qr} width={200} />
      <p>Total: Rp{total}</p>
      <a href={`/status/${id}`}>Cek Status</a>
    </div>
  )
}
