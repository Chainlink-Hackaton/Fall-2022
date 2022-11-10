<template>
  <Header></Header>
  <Debt></Debt>
  <!-- <Web3Test></Web3Test>
<br/>
<br/>
<NavBar />
 <div>
   "connect" click event is registered 
    <button v-if="!connected" @click="connect">Connect wallet</button>
    <button v-if="connected">Call contract</button>
    {{ contractResult }}
  </div>
  
<br/>
<br/>
  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  
  <FooterComponent></FooterComponent>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue"
import FooterComponent from "./components/Footer.vue"
import Web3Test from "./components/Web3Test.vue"
import Debt from "./components/Debt.vue"

//import Header from "./components/Footer.vue";
//import Web3 from "web3";

export default {
  name: "App",

  data(){
    return {
    }
  },
  components: {
    HelloWorld,
    Header,
    Web3Test,
    FooterComponent,
    Debt,
  },
  methods: {
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
}
</style>