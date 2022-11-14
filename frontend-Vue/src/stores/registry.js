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
      contractResult: ref(""),
      Ids: [],
    };
  },
  actions: {
    connect(){
      if (window.ethereum) {
        window.ethereum.request({method: "eth_requestAccounts"})
        .then(() => {
          this.connected = true
        });
      }
    },

    callContract(){
      let web3 = new Web3(window.ethereum);
      let contractAddress = '0x44E84A10341BF772906c37fFc30CDbb132eA35f2';
      let abi = JSON.parse(`[{"inputs":[],"name":"getMessage","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_message","type":"string"}],"name":"setMessage","outputs":[],"stateMutability":"nonpayable","type":"function"}]`);
      let contract = new web3.eth.Contract(abi, contractAddress);
      console.log("rompe 1")
      contract.methods.getMessage().call()
        .then(result => this.contractResult = result);
        console.log("rompe 3")
    },
    //Acá van las funciones.

    async createDebt(){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const registryAddress = process.env.REGISTRY_CONTRACT_ADDRESS;
        const registry = ethers.ContractFactory.getContract(registryAddress, Registry.abi, provider)
        //TO DO: Here a need those values from the form
        const lenderAddress = ""
        const tokenAddress = ""
        const debtAmount = ""
        const deadline = ""
        const splits = ""
        //await registry.createDebt(lender.address, token.address, debtAmount, ONE_YEAR_IN_SECS, splits)}
       const tx = await registry.createDebt(lenderAddress, tokenAddress, debtAmount, deadline, splits)
       console.log(tx); //Here we are looking for the event DebtCreated(Id, msg.sender);
       const events = registry.filters.DebtCreated(null, /* Here goes user address */)
       for(let event in events){
          this.Ids.push(event.id)   //Id's of each event for later query
       }
       console.log(this.Ids)//If we get here and show the Id of the Debt, we make it!!!
    }

  },
});