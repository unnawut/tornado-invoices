import Web3 from "web3"

let web3 = undefined
let TornWrapper = {}

TornWrapper.ensureWallet = async () => {
  if (!window.ethereum) {
    window.alert('Please install MetaMask first.')
    return
  }
  if (!web3) {
    try {
      await window.ethereum.enable()
      web3 = new Web3(window.ethereum)
    } catch (error) {
      window.alert('You need to allow MetaMask.')
      return
    }
  }
  const coinbase = await web3.eth.getCoinbase()

  if (!coinbase) {
    window.alert('Please activate MetaMask first.')
    return
  }
}

TornWrapper.getChainId = async () => {
  await TornWrapper.ensureWallet()
  return await web3.eth.getChainId()
}


TornWrapper.getAddress = async () => {
  return Web3.utils.toChecksumAddress(await web3.eth.getCoinbase())
}


TornWrapper.connectTorn = async (address) => {
  return await new web3.eth.Contract([{
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_commitment",
        "type": "bytes32"
      }
    ],
    "name": "deposit",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }], address)
}


/**
 * Parses Tornado.cash deposit invoice
 * @param invoiceString the note
 */
TornWrapper.parseInvoice = async (invoiceString) => {
  const noteRegex = /tornadoInvoice-(?<currency>\w+)-(?<amount>[\d.]+)-(?<netId>\d+)-0x(?<commitmentNote>[0-9a-fA-F]{64})/g
  const match = noteRegex.exec(invoiceString)
  if (!match) {
    throw new Error('The note has invalid format')
  }

  const netId = Number(match.groups.netId)
  const buf = Buffer.from(match.groups.commitmentNote, 'hex')
  const commitmentNote = TornWrapper.toHex(buf.slice(0, 32))

  return {
    currency: match.groups.currency,
    amount: match.groups.amount,
    netId,
    commitmentNote
  }
}
/** BigNumber to hex string of specified length */
TornWrapper.toHex = async (number, length = 32) => {
  const str = number instanceof Buffer ? number.toString('hex') : bigInt(number).toString(16);
  return '0x' + str.padStart(length * 2, '0');
}



export default TornWrapper
