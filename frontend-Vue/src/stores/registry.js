/*import { ethers } from "hardhat";*/
import { defineStore } from "pinia";
import { ref } from "vue";
import Web3 from "web3"

import { ethers } from 'ethers';

import Registry from '../../../artifacts/contracts/Registry.sol/Registry.json'


export default defineStore("Registry", {
  state() {
    return {
      //Acá van las variables.
      connected: ref(false),
      Ids: [],
      lenderAddress : ref("0xbDA5747bFD65F08deb54cb465eB87D40e51B197E"),
      tokenAddress : ref("0x90F79bf6EB2c4f870365E785982E1f101E93b906"),
      debtAmount : ref(10),
      deadline : ref(365 * 24 * 60 * 60),
      splits : ref(50),
      contractResult: ref("")
    };
  },
  actions: {
    connect(){
      if (window.ethereum) {
        window.ethereum.request({method: "eth_requestAccounts"})
        .then(() => {
          this.connected = ref(true)
        });
      }
    },

    /*callContract(){
      let web3 = new Web3(window.ethereum);
      let contractAddress = '0x44E84A10341BF772906c37fFc30CDbb132eA35f2';
      let abi = JSON.parse(`[{"inputs":[],"name":"getMessage","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_message","type":"string"}],"name":"setMessage","outputs":[],"stateMutability":"nonpayable","type":"function"}]`);
      let contract = new web3.eth.Contract(abi, contractAddress);
      console.log("rompe 1")
      contract.methods.getMessage().call()
        .then(result => this.contractResult = result);
        console.log("rompe 3")
    },*/
    //Acá van las funciones.

     createDebt(){
        console.log("begin")
        let web3 = new Web3(window.ethereum);
        console.log("after provider")
        const registryAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        let abi = JSON.parse(`[
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "id",
                  "type": "bytes32"
                }
              ],
              "name": "DebtAccepted",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "id",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "borrower",
                  "type": "address"
                }
              ],
              "name": "DebtCreated",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "Id",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "borrower",
                  "type": "address"
                }
              ],
              "name": "DebtDefault",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "id",
                  "type": "bytes32"
                }
              ],
              "name": "DebtPaid",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "id",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "txhash",
                  "type": "bytes32"
                }
              ],
              "name": "PaymentRegistered",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "id",
                  "type": "bytes32"
                }
              ],
              "name": "RejectAccepted",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "DebtCounter",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "",
                  "type": "bytes32"
                }
              ],
              "name": "Debts",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "Id",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "Owner",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "Lender",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "Currency",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "Amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "Deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "Split",
                  "type": "uint256"
                },
                {
                  "internalType": "enum IDebtRegistry.Status",
                  "name": "status",
                  "type": "uint8"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "Id",
                  "type": "bytes32"
                }
              ],
              "name": "acceptDebt",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "succeed",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "lender",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "currency",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "timeToPay",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "numberOfPayments",
                  "type": "uint256"
                }
              ],
              "name": "createDebt",
              "outputs": [
                {
                  "internalType": "bytes32",
                  "name": "Id",
                  "type": "bytes32"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "Id",
                  "type": "bytes32"
                }
              ],
              "name": "getPayments",
              "outputs": [
                {
                  "internalType": "bytes32[]",
                  "name": "",
                  "type": "bytes32[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "Id",
                  "type": "bytes32"
                }
              ],
              "name": "getPaymentsCount",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "Id",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes32",
                  "name": "txhash",
                  "type": "bytes32"
                }
              ],
              "name": "registerPayment",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "succeed",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "Id",
                  "type": "bytes32"
                }
              ],
              "name": "rejectDebt",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "succeed",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "Id",
                  "type": "bytes32"
                }
              ],
              "name": "setDebtToDefault",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "succeed",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]`)
        const registry = new web3.eth.Contract(abi, registryAddress)
        //TO DO: Here a need those values from the form
        console.log("after registry")

        //await registry.createDebt(lender.address, token.address, debtAmount, ONE_YEAR_IN_SECS, splits)}
        registry.methods.createDebt(this.lenderAddress, this.tokenAddress, this.debtAmount, this.deadline, this.splits).send({from:"0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"})
        .then(result => {this.contractResult = result; console.log(result)});
        console.log("rompe 3")

    //    try{const tx =  registry.createDebt(this.lenderAddress, this.tokenAddress, this.debtAmount, this.deadline, this.splits)}
    //    catch{console.log("Fallo loco")}
    //    console.log(tx); //Here we are looking for the event DebtCreated(Id, msg.sender);
    //    const events = registry.filters.DebtCreated(null, /* Here goes user address */)
    //    for(let event in events){
    //       this.Ids.push(event.id)   //Id's of each event for later query
    //    }

       // Subscribe for listen the event NewValueSet
       //registry.events.DebtCreated({filter: {borrower: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"}}, function(error, event){ console.log(event); } )
       
       //console.log(this.Ids)//If we get here and show the Id of the Debt, we make it!!!
    }
  },
});