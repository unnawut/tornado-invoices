import { useState } from 'react'
import PrimaryButton from './PrimaryButton'
import { deployments } from './tornconfig';
import TornWrapper from '../method/web3torn';


const pay = async (invoice) => {
  try {
    let invData = TornWrapper.parseInvoice(invoice)
    var address = deployments['netId' + invData.netId][invData.currency].instanceAddress[invData.amount]
    if (invData.currency == 'eth') {
      await TornWrapper.ensureWallet()
      let torn = await TornWrapper.connectTorn(address)

      let userAddress = await TornWrapper.getAddress()
      await torn.methods.deposit(invData.commitmentNote).send({ from: userAddress, value: Web3.utils.toWei(invData.amount, 'ether') })

    } else {
      alert('ETH only first')
    }

  } catch (err) {
    console.log(err)
    alert('ggwp')
  }
}


export default function PayBox() {
  const [chain, setChain] = useState()
  const [amount, setAmount] = useState()
  const [tokenSymbol, setTokenSymbol] = useState()


  return (
    <div className="box">
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
