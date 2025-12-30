import Link from 'next/link'
export default function Home() {
  return (
    <main style={{padding:40}}>
      <h1>PiosPedia Payment</h1>
      <Link href="/qris">Mulai Pembayaran</Link>
    </main>
  )
}