// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


interface IDebtRegistry {
    enum Status {
        Pending, Approved, Rejected, Paid, Default
    }

    struct Debt {
        uint Id;
        address Owner;
        address Lender;
        address Currency;
        uint Amount;
        uint Deadline;
        uint Split;
        uint[] Payments;
        Status status;
    }

    function createDebt(address lender, uint amount, uint timeToPay, uint numberOfPayments) external returns(uint Id) ;
    function acceptDebt(uint Id) external returns(bool succeed);
    function registerPayment(uint Id, bytes32 txhash) external returns(bool succeed) ;
}