import { ethers, BigNumber } from 'ethers'


describe('Etherscan test',  () => {
    const address='0xB49213fE8d39F22FECA3779ee5f15b66bF547375' //Rinkeby 2
    const sampleTxData = '0x000000000000000000000000000000000000000000000000000000012d00e280'

    it('Gets a list of transactions from etherscan', async () => {
        const etherscanProvider = new ethers.providers.EtherscanProvider('rinkeby')
        const history = await etherscanProvider.getHistory(address)
        console.log(history)
    })

    it('Decodes transaction data using abiCoder', async () => {
        const abiCoder = ethers.utils.defaultAbiCoder;
        const result = abiCoder.decode(["uint256"],sampleTxData)
        console.log(BigNumber.from(result[0]._hex).toString())
    })

})