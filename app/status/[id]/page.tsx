'use client'
import { useEffect, useState } from 'react'

export default function Status({ params }: any) {
  const [status, setStatus] = useState('PENDING')

  useEffect(() => {
    const i = setInterval(async () => {
      const r = await fetch(`/api/status?id=${params.id}`)
      const j = await r.json()
      setStatus(j.status)
    }, 3000)
    return () => clearInterval(i)
  }, [params.id])

  return <h1>Status: {status}</h1>
}