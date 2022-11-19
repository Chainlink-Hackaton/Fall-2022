## Youtube Demo: https://www.youtube.com/watch?v=aujaqWEV1Y4

## Credit Register system (Crypto Lends)
End goal of the project is to allow the end user to generate a public credit record store in an L1 and/or an L2 blockchain. End user shall be able to: 
Register a debt 
Register a payment of a debt 

## Inspiration
In Latam is extremely difficult for a considerable amount of the population to access financial products due to a lack of credit records. We try to design a protocol that allows a user to generate an open credit record that could help solve this issue.

## What it does:

**Register a debt**
 A user willing to register a debt submits a transaction indicating 
An address, must be an EOA, representing the lender
An uint256, representing the total amount borrowed
An uint256, representing the time in which the credit shall be paid
An uint256, the number of payments the user wants to split the credit.

Upon registration and object Debt is created with a current status of pending of approval

**Accept a debt**
The EOA representing the lender, must submit a transaction accepting or rejecting the conditions. If the lender choose to reject, the debt status will change to a final dead state. A transaction accepting the debt change the status to Accepted. 

**Register a payment of a debt**
A user submits a transaction with the unique id of a Debt and txhash of a transfer made to the address registered as the lender and the amount tranfered. The register system validates that the registration of the payment has been made on time. Check if the debt has been fully paid if not calculates the deadline of the next payment. Otherwise, register the deadline for the next payment.

If the debt has been fully paid, the debt changes the a final status Paid.

## How we built it
From root folder

To run test
```
npx hardhat test/Registry.ts
```

Run a local node in one terminal
```
npx hardhat node
```

Deploy the contracts
```
npx hardhat --network localhost run scripts/deploy.ts
```

Change to the front end folder
```
cd frontend-Vue
```

Start the front end
```
npm run dev
```

## Challenges we ran into
One of the main challenges we faced was how to make a reliable protocol for third parties. In that sense, the protocol discourages cheating by being immutable, thus if a user fails to pay on time or registers an erroneous payment, it will remain there forever.

## Accomplishments that we're proud of
Though the project is really simple, a lot of attention was dedicated to the design, documentation, and testing. We are really proud of the quality of the job done and the professional attitude we take in the project. 

## What we learned
We developed a well-founded knowledge on the web3.js library, and got comfortable reading the documentation.

## What's next for Public Credit Record 
Automate payments to a debt through ERC20 approve methods.
Automate changes from debts to Default when the deadline is reached and the debt has not yet been fully paid. 
Add interest rates to the protocol
Allows the user to define a debts in fiat currencies.