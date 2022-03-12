const snarkjs = require('snarkjs');

/** rand stuff  */
const rbigint = (nbytes) => snarkjs.bigInt.leBuff2int(crypto.randomBytes(nbytes));
/** Compute pedersen hash */
const pedersenHash = (data) => circomlib.babyJub.unpackPoint(circomlib.pedersenHash.hash(data))[0];


/** BigNumber to hex string of specified length */
function toHex(number, length = 32) {
    const str = number instanceof Buffer ? number.toString('hex') : bigInt(number).toString(16);
    return '0x' + str.padStart(length * 2, '0');
}

/**
 * Create deposit object from secret and nullifier
 */
function createDeposit({ nullifier, secret }) {
    const deposit = { nullifier, secret };
    deposit.preimage = Buffer.concat([deposit.nullifier.leInt2Buff(31), deposit.secret.leInt2Buff(31)]);
    deposit.commitment = pedersenHash(deposit.preimage);
    deposit.commitmentHex = toHex(deposit.commitment);
    deposit.nullifierHash = pedersenHash(deposit.nullifier.leInt2Buff(31));
    deposit.nullifierHex = toHex(deposit.nullifierHash);
    return deposit;
}


/**
 * create a deposit invoice.
 * @param currency Сurrency
 * @param amount Deposit amount
 */
async function createInvoice({ currency, amount, chainId }) {
    const deposit = createDeposit({
        nullifier: rbigint(31),
        secret: rbigint(31)
    });
    const note = toHex(deposit.preimage, 62);
    const noteString = `tornado-${currency}-${amount}-${chainId}-${note}`;
    console.log(`Your note: ${noteString}`);

    const commitmentNote = toHex(deposit.commitment);
    const invoiceString = `tornadoInvoice-${currency}-${amount}-${chainId}-${commitmentNote}`;
    console.log(`Your invoice for deposit: ${invoiceString}`);

    return (noteString, invoiceString);
}

export default createInvoice
