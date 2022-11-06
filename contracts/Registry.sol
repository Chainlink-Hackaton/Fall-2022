// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import './interfaces/IDebtRegistry.sol';

contract Registry is IDebtRegistry {
    mapping(bytes32 => Debt) public Debts;
    mapping(address => uint256) public DebtCounter;

    event DebtCreated(bytes32 indexed id, address indexed borrower);
    event DebtAccepted();
    event DebtPaid(bytes32 indexed id);
    event PaymentRegistered(bytes32 indexed id, bytes32 indexed txhash);
    event DebtDefault(bytes32 indexed Id, address indexed borrower);


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
        //We store timeToPay here to use it when 
        //the lender approve the Debt to calculate the Deadline
        d.Deadline = timeToPay; 
        d.Split = numberOfPayments;
        d.status = Status.Pending;
        Debts[Id] = d;
        emit DebtCreated(Id, msg.sender);
    }

    function acceptDebt(bytes32 Id) external override returns(bool succeed) {
        Debt storage debt = Debts[Id];
        require(msg.sender == debt.Lender, "Registry: Only lender can accept a Debt");
        require(debt.status == Status.Pending, "Registry: Debt status is not pending");
        debt.status = Status.Approved;
        //Deadline is set up only after the 
        //lender approved the Debt
        uint timeToPay = debt.Deadline;
        debt.Deadline = calculateDeadline(timeToPay);
        emit DebtAccepted();
        succeed = true;
    }

    function registerPayment(bytes32 Id, bytes32 txhash)
        external
        override
        returns (bool succeed)
    {
        Debt storage debt = Debts[Id];
        require(msg.sender == debt.Owner, "Registry: Only borrower can register a debt");
        require(debt.status == Status.Approved, "Registry: Debt status is not approved");
        require(block.timestamp < debt.Deadline, "Registry: too late to pay");
        debt.Payments.push(txhash);
        
        if(debt.Payments.length == debt.Split){
            debt.status = Status.Paid;
            emit DebtPaid(Id);
            return true;
        }
        
        emit PaymentRegistered(Id, txhash);
    }

    function setDebtToDefault(bytes32 Id) public returns(bool succeed){
        Debt storage debt = Debts[Id];
        require(block.timestamp > debt.Deadline, "Registry: Deadline not reached yet");
        require(debt.status == Status.Approved, "Registry: Debt status is not approved");
        debt.status = Status.Default;
        emit DebtDefault(Id, debt.Owner);
        return true;
    }

    function calculateDeadline(uint timeToPay) view internal returns(uint deadline) {
        deadline = block.timestamp + timeToPay;
    }

    function getPaymentsCount(bytes32 Id) public view returns(uint) { 
        return Debts[Id].Payments.length; 
}

    function getPayments(bytes32 Id) public view returns(bytes32[] memory ) {
         return Debts[Id].Payments; 
    }
}