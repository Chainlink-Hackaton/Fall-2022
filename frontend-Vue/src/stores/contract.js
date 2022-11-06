import { defineStore } from "pinia";
import { ref } from "vue";
import Web3 from "web3"

export default defineStore("Contract", {
  state() {
    return {
      //Acá van las variables.
      connected: ref(false),
      contractResult: ref(""),
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
    }
    //Acá van las funciones.
  },
});