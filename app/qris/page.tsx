'use client'
import { useState } from 'react'
import QRBox from '@/components/QRBox'

export default function QRIS() {
  const [data, setData] = useState<any>(null)

  async function create() {
    const r = await fetch('/api/qris', {
      method: 'POST',
      body: JSON.stringify({ nominal: 10000 })
    })
    setData(await r.json())
  }

  return (
    <div style={{padding:40}}>
      <button onClick={create}>Generate QRIS</button>
      {data && <QRBox {...data} />}
    </div>
  )
}