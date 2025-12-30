'use client'
import Link from 'next/link'

export default function QRBox({ data }: any) {
  return (
    <div className="mt-6 text-center space-y-2">
      <img src={data.qrImage} className="mx-auto w-64" />
      <p>Nominal: Rp {data.nominal}</p>
      <p>Admin: Rp {data.adminFee}</p>
      <Link
        href={`/status/${data.transactionId}`}
        className="inline-block mt-4 px-4 py-2 bg-blue-500 rounded"
      >
        Cek Status
      </Link>
    </div>
  )
}
