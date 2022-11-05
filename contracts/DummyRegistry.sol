// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import './interfaces/IDebtRegistry.sol';

contract DummyRegistry is IDebtRegistry {
    mapping(uint => Debt) Debts;
    mapping(address => uint256) DebtCounter;

    function createDebt(
        address lender,
        address currency,
        uint amount,
        uint timeToPay,
        uint numberOfPayments
    ) external override returns (bytes32 Id) {
        Id = keccak256(abi.encode(1));
    }

    function acceptDebt(bytes32 Id) external override returns (bool succeed) {
        return true;
    }

    function registerPayment(uint Id, bytes32 txhash)
        external
        override
        returns (bool succeed)
    {
        return true;
    }
}