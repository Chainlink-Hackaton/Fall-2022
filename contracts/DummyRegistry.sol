// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import './interfaces/IDebtRegistry.sol';

contract DummyRegistry is IDebtRegistry {
    mapping(uint => Debt) Debts;
    mapping(address => uint256) DebtCounter;

    function createDebt(
        address lender,
        uint amount,
        uint timeToPay,
        uint numberOfPayments
    ) external override returns (uint Id) {
        return 1;
    }

    function acceptDebt(uint Id) external override returns (bool succeed) {
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