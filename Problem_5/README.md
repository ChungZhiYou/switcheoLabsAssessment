# Deploy Utility Contract

Compile the contract
```
npx hardhat compile
```
<br>

Setup node in a separate terminal and keep it running
```
npx hardhat node
```
<br>

deploy the contract according to the setup network node
```
npx hardhat run --network NETWORK ./Problem_5/scripts/deploy.js
```
<br>

Interact with the contract using test.js
```
node test.js
```