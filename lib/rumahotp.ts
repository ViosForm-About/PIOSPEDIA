import axios from 'axios'
import QRCode from 'qrcode'

const API_KEY = process.env.RUMAHOTP_API_KEY!
const BASE_URL = process.env.RUMAHOTP_BASE_URL!

export async function createDeposit(nominal: number) {
  const adminFee = Math.ceil(nominal * 0.005) + 500
  const total = nominal + adminFee

  const res = await axios.get(
    `${BASE_URL}/v2/deposit/create?amount=${total}&payment_id=qris`,
    { headers: { 'x-apikey': API_KEY } }
  )

  const qrImage = await QRCode.toDataURL(res.data.data.qr_string)

  return {
    transactionId: res.data.data.deposit_id,
    qrImage,
    nominal,
    adminFee
  }
}

export async function checkStatus(depositId: string) {
  const res = await axios.get(
    `${BASE_URL}/v2/deposit/get_status?deposit_id=${depositId}`,
    { headers: { 'x-apikey': API_KEY } }
  )
  return res.data.data.status
}
