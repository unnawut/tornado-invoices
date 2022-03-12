import { useState } from 'react'
import PrimaryButton from './PrimaryButton'

export default function PayBox() {
  const [chain, setChain] = useState()
  const [amount, setAmount] = useState()
  const [tokenSymbol, setTokenSymbol] = useState()


  return (
    <div class="box">
      <h2>Pay Invoice</h2>

      <div>
        <div>Invoice <input placeholder="tornadoInvoice-..." /></div>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <div>Amount: {amount} {tokenSymbol}</div>
        <div>Chain: {chain}</div>
      </div>

      <PrimaryButton label="Pay Invoice" onClick={() => alert('can dev do something')} />
    </div>
  )
}