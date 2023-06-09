const {ethers} = require("ethers");

const SWTH_CONTRACT_ADDRESS = '0xC0ECB8499D8dA2771aBCbF4091DB7f65158f1468';

const provider = new ethers.providers.getDefaultProvider('https://1rpc.io/bnb');

const addresses = [
    '0xb5d4f343412dc8efb6ff599d790074d0f1e8d430',
    '0x0020c5222a24e4a96b720c06b803fb8d34adc0af',
    '0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392'
];

const ABI = [
    "function balanceOf(address account) view returns (uint256)",
    "function decimals() public view returns (uint8)"
];

const main = async () => {
    const SWTHContract = new ethers.Contract(SWTH_CONTRACT_ADDRESS, ABI, provider);

    const decimals = await SWTHContract.decimals();

    console.log("\n");
    for (const address of addresses) {
        const balance = await SWTHContract.balanceOf(address);
        console.log(`Address: ${address},       Balance: ${ethers.utils.formatUnits(balance, decimals)}`);
    }
    console.log("\n");
}
main();