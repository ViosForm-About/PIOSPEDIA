import axios from 'axios'
import QRCode from 'qrcode'
import { sendTelegram } from './telegram'

export async function createDeposit(nominal: number) {
  const r = await axios.get(`${process.env.RUMAHOTP_BASE_URL}/v2/deposit/create?amount=${nominal}&payment_id=qris`, {
    headers: { 'x-apikey': process.env.RUMAHOTP_API_KEY! }
  })

  const d = r.data.data
  const qr = await QRCode.toDataURL(d.qr_string)
  await sendTelegram(`PENDING ${d.deposit_id}`)

  return { id: d.deposit_id, qr, total: nominal }
}

export async function checkStatus(id: string) {
  const r = await axios.get(`${process.env.RUMAHOTP_BASE_URL}/v2/deposit/get_status?deposit_id=${id}`, {
    headers: { 'x-apikey': process.env.RUMAHOTP_API_KEY! }
  })
  return r.data.data.status
}
