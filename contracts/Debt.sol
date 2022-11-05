// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

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