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
      userAddress: ref(""),
      registry: ref(),
      Ids: [],
      lenderAddress : ref("0xbDA5747bFD65F08deb54cb465eB87D40e51B197E"),
      tokenAddress : ref("0x90F79bf6EB2c4f870365E785982E1f101E93b906"),
      debtAmount : ref(10),
      deadline : ref(365 * 24 * 60 * 60),
      splits : ref(50),
      contractResult: ref(""),
      debts: ref({}),
      txhash: ref("")
      
    };
  },
  actions: {
    connect(){
      if (window.ethereum) {
        window.ethereum.request({method: "eth_requestAccounts"})
        .then((address) => {
          this.connected = true
          this.userAddress = address[0]
          console.log(this.userAddress)
          let web3 = new Web3(window.ethereum);
          const registryAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
          const registry = new web3.eth.Contract(Registry.abi, registryAddress)
          registry.getPastEvents('DebtCreated', {
            filter: {lender: this.userAddress}, // Using an array means OR: e.g. 20 or 23
            fromBlock: 0,
            toBlock: 'latest'
        }).then((async (events) => {
          console.log(events);
          const list = []
          for(let e in events){
          //console.log(events[e].returnValues.id)
          const id = events[e].returnValues.id
          //   console.log(id)
          const debt2 = await registry.methods.Debts(id).call();
          const payments = await registry.methods.getPayments(id).call();

          list.push(debt2)
          console.log(debt2)
          console.log("payments: ",payments)
          }
          this.debts = list;
          console.log(list)
          console.log(this.debts)
          }))
        });
      }


    },
    connectBorrower(){
      if (window.ethereum) {
        window.ethereum.request({method: "eth_requestAccounts"})
        .then((address) => {
          this.connected = true
          this.userAddress = address[0]
          console.log(this.userAddress)
          let web3 = new Web3(window.ethereum);
          const registryAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
          const registry = new web3.eth.Contract(Registry.abi, registryAddress)
          registry.getPastEvents('DebtCreated', {
            filter: {borrower: this.userAddress}, // Using an array means OR: e.g. 20 or 23
            fromBlock: 0,
            toBlock: 'latest'
        }).then((async (events) => {
          console.log(events);
          const list = []
          for(let e in events){
          //console.log(events[e].returnValues.id)
          const id = events[e].returnValues.id
          //   console.log(id)
          const debt2 = await registry.methods.Debts(id).call();
          list.push(debt2)
          console.log(debt2)
          }
          this.debts = list;
          console.log(list)
          console.log(this.debts)
          }))
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
        const registry = new web3.eth.Contract(Registry.abi, registryAddress)
        //TO DO: Here a need those values from the form
        console.log("after registry")

        //await registry.createDebt(lender.address, token.address, debtAmount, ONE_YEAR_IN_SECS, splits)}
        registry.methods.createDebt(this.lenderAddress, this.tokenAddress, this.debtAmount, this.deadline, this.splits).send({from:this.userAddress})
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
    },
    acceptDebt(id){
      console.log("begin")
        let web3 = new Web3(window.ethereum);
        console.log("after provider")
        const registryAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        const registry = new web3.eth.Contract(Registry.abi, registryAddress)
        //TO DO: Here a need those values from the form
        console.log("after registry")

        //await registry.createDebt(lender.address, token.address, debtAmount, ONE_YEAR_IN_SECS, splits)}
        registry.methods.acceptDebt(id).send({from:this.userAddress})
        .then(result => {this.contractResult = result; console.log(result)});
        console.log("rompe 3")

    },
    rejectDebt(id){
      console.log("begin")
        let web3 = new Web3(window.ethereum);
        console.log("after provider")
        const registryAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        const registry = new web3.eth.Contract(Registry.abi, registryAddress)
        //TO DO: Here a need those values from the form
        console.log("after registry")

        //await registry.createDebt(lender.address, token.address, debtAmount, ONE_YEAR_IN_SECS, splits)}
        registry.methods.rejectDebt(id).send({from:this.userAddress})
        .then(result => {this.contractResult = result; console.log(result)});
        console.log("rompe 3")
    }, 
    registerPayment(Id, txhash){
      let web3 = new Web3(window.ethereum);
      console.log("after provider")
      const registryAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const registry = new web3.eth.Contract(Registry.abi, registryAddress)
      
      registry.methods.registerPayment(Id, txhash).send({from: this.userAddress})
      .then(result => {this.contractResult = result; console.log(result)});
      console.log("rompe 3")
    },
    getPayments(Id){
      let web3 = new Web3(window.ethereum);
      console.log("after provider")
      const registryAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const registry = new web3.eth.Contract(Registry.abi, registryAddress)
      
      registry.methods.getPayments(Id).send({from: this.userAddress})
      .then(result => {this.contractResult = result; console.log(result)});
      console.log("rompe 3")
    }

  },
});