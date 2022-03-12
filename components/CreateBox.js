import PrimaryButton from './PrimaryButton'

export default function CreateBox() {
  return (
    <div class="box">
      <h2>Create Invoice</h2>

      <div>Chain: </div>
      <div>
        <label class="label">Token</label>
        <div>
          <select name="token">
            <option value="ETH">ETH</option>
          </select>
        </div>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label class="label">Amount</label>
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
