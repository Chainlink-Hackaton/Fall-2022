// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import './interfaces/IDebtRegistry.sol';

contract Registry is IDebtRegistry {
    mapping(bytes32 => Debt) public Debts;
    mapping(address => uint256) public DebtCounter;

    event DebtCreated(bytes32 indexed id, address indexed borrower);

    function createDebt(
        address lender,
        address currency,
        uint amount,
        uint timeToPay,
        uint numberOfPayments
    ) external override returns (bytes32 Id) {
        Id = keccak256(abi.encodePacked(msg.sender, lender, amount, timeToPay, numberOfPayments, block.timestamp));
        Debt memory d; 
        d.Id = Id;
        d.Owner = msg.sender;
        d.Lender = lender;
        d.Currency = currency;
        d.Amount = amount;
        d.Deadline = calculateDeadline(timeToPay);
        d.Split = numberOfPayments;
        d.status = Status.Pending;
        Debts[Id] = d;
        emit DebtCreated(Id, msg.sender);
    }

    function acceptDebt(uint Id) external override returns(bool succeed) {}

    function registerPayment(uint Id, bytes32 txhash)
        external
        override
        returns (bool succeed)
    {}

    function calculateDeadline(uint timeToPay) internal returns(uint deadline) {}
}