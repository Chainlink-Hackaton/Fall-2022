<template>
  <Header></Header>
  <!--<Debt></Debt>
  <Web3Test></Web3Test>
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
<br>
<Home2></Home2>
<Techs></Techs>
<br>
  <FooterComponent></FooterComponent>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue"
import FooterComponent from "./components/Footer.vue"
import Web3Test from "./components/Web3Test.vue"
import Debt from "./components/Debt.vue"
import Home2 from "./components/Home2.vue"
import Techs from "./components/Techs.vue"

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
    Home2,
    Techs,
  },
  methods: {
  }
};
</script>

<style>
*{
  font-family: "Josefin Sans", sans-serif;
}

body {
  background: #44c4e7
    url("https://38.media.tumblr.com/d23deac40b06633b79520a8552f40b94/tumblr_nb1uhrRrge1st5lhmo1_1280.jpg")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  font-family: "Roboto";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body::before {
  z-index: -1;
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  background: #44c4e7;
  /* IE Fallback */
  background: rgba(68, 196, 231, 0.8);
  width: 100%;
  height: 100%;
}

h1 {
  font-size: 60px;
  font-weight: 900;
  color: #0d6efd;
  line-height: 7rem;
}

h2 {
  font-size: 50px;
  font-weight: 700;
  color: var(#0d6efd);
}

h3 {
  font-size: 40px;
  font-weight: 700;
  color: var(#0d6efd);
}

h4 {
  font-size: 24px;
  font-weight: 500;
  color: var(#0d6efd);
}

p {
  font-size: 20px;
  font-weight: 400;
  color: var(#0d6efd);
}
</style>