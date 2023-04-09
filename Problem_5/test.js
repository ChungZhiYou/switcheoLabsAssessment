const { ethers } = require("ethers");

const ADDR = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";  
const ABI = [
	'function getBalances(address addr, address[] memory tokens) public returns (uint[] memory)'
];    

const ADDRESS = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"; 
const TOKENS = [    
	"0xc944E90C64B2c07662A292be6244BDf05Cda44a7",
	"0x965d79F1A1016B574a62986e13Ca8Ab04DfdD15C",
];

const provider = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/ws/v3/');
const signer = provider.getSigner();

const test = async () => {
	// const gasLimit = 300000;
	const contract = new ethers.Contract(ADDR, ABI, signer);

	// const balances = await contract.getBalances(ADDRESS, TOKENS, { gasLimit });
  	const balances = await contract.getBalances(ADDRESS, TOKENS);
	
	return balances;
};


test().then(console.log);