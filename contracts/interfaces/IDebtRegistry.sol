// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


interface IDebtRegistry {
    enum Status {
        Pending, Approved, Rejected, Paid, Default
    }

    struct Debt {
        bytes32 Id;
        address Owner;
        address Lender;
        address Currency;
        uint Amount;
        uint Deadline;
        uint Split;
        bytes32[] Payments;
        Status status;
    }

    function createDebt(address lender,  address currency, uint amount, uint timeToPay, uint numberOfPayments) external returns(bytes32 Id) ;
    function acceptDebt(bytes32 Id) external returns(bool succeed);
    function rejectDebt(bytes32 Id) external returns(bool succeed);
    function registerPayment(bytes32 Id, bytes32 txhash) external returns(bool succeed) ;
}