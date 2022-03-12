import PrimaryButton from './PrimaryButton'
import createInvoice from '../method/invoice'


function magic() {
  var { note, invoice } = createInvoice();
  alert("can dev disply" + note + invoice)
}


export default function CreateBox() {
  return (
    <div className="box">
      <h2>Create Invoice</h2>

      <div>Chain: </div>
      <div>
        <label className="label">Token</label>
        <div>
          <select name="token">
            <option value="ETH">ETH</option>
          </select>
        </div>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label className="label">Amount</label>
        <div>
          <select name="amount">
            <option value="0.1">0.1 ETH</option>
            <option value="0.1">1 ETH</option>
            <option value="0.1">10 ETH</option>
            <option value="0.1">100 ETH</option>
          </select>
        </div>
      </div>

      <PrimaryButton label="Create Invoice" onClick={() => alert('can dev do something')} />
    </div>
  )
}
