<template>
  <!--<Header></Header>-->
  <img alt="Vue logo" src="./assets/logo.png">
  

<br/>
<br/>
  <div>
    <!-- "connect" click event is registered -->
    <button v-if="!connected" @click="connect">Connect wallet</button>
    <button v-if="connected">Call contract</button>
    {{ contractResult }}
  </div>
<br/>
<br/>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
//import Header from "./components/Footer.vue";
import Web3 from "web3";

export default {
  name: "App",

  data(){
    return {
      connected: false,
      contractResult: "",
      web3 : new Web3(window.ethereum),
    }
  },
  components: {
    HelloWorld,
    //Header,
  },
  methods: {
    connect: function() {
      if (window.ethereum) {
        window.ethereum.request({method: "eth_requestAccounts"})
        .then(() => {
          this.connected = true
        });
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
