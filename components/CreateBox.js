import { useState } from 'react'
import PrimaryButton from './PrimaryButton'
import { invoiceService } from '../services/invoiceService'

export default function CreateBox() {
  const [chainId, setChainId] = useState(1)
  const [currency, setCurrency] = useState('eth')
  const [amount, setAmount] = useState(0.1)
  const [invoiceRequested, setInvoiceRequested] = useState(false)

  const handleCreate = () => {
    event.preventDefault()
    setInvoiceRequested(true)

    var { note, invoice } = invoiceService.createInvoice(currency, amount, chainId);

    showInvoiceInfo(note, invoice)
  }

  const showInvoiceInfo = (note, invoice) => {

  }

  return (
    <div className="box">
    <h2>Create Invoice</h2>

    <div>Chain: </div>
      <div>
        <label className="label">Token</label>
        <div>
          <select
            name="currency"
            onChange={ event => setToken(event.target.value) }
            disabled={invoiceRequested}
          >
            <option value="eth" default>ETH</option>
          </select>
        </div>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label className="label">Amount</label>
        <div>
          <select
            name="amount"
            onChange={ event => setAmount(event.target.value) }
            disabled={invoiceRequested}
          >
            <option value="0.1" default>0.1 ETH</option>
            <option value="1">1 ETH</option>
            <option value="10">10 ETH</option>
            <option value="100">100 ETH</option>
          </select>
        </div>
      </div>

      <PrimaryButton
        label="Create Invoice"
        onClick={ () => !invoiceRequested && handleCreate() }
      />
    </div>
  )
}
