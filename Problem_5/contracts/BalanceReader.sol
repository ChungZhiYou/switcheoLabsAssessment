// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20{
    function balanceOf(address account) external view returns (uint256);
}

contract BalanceReader{

    uint[] public balances;
    IERC20 public token;

    function getBalances(address addr, address[] memory tokens) public returns (uint[] memory){

        balances = new uint[](0);

        for (uint i = 0; i < tokens.length; i++){ 
            token = IERC20(tokens[i]);
            balances.push(token.balanceOf(addr));
        }
        
        return balances;
    }
}