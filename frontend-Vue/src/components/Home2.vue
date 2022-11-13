<template>
  <div id="hero-banner">
    <div class="container-banner">
        <div id="images-hero">
          <img class="img-fluid animated"
            src="../assets/png-transparent-ethereum-eth-hd-logo-thumbnail-removebg-preview.png" alt="card 1">
          <img class="img-fluid animated" src="../assets/chainlink-removebg-preview.png" alt="card 2">
          <img id="boy" src="../assets/Crypto-Lend-circle.png" alt="Hero Img">
        </div>

        <div class="text">
          <h1>Crypto Lending</h1>
          <p>is a form of decentralized finance (DeFi) where investors lend their crypto to borrowers in exchange for interest payments</p>
          <p></p>
        </div>
      </div>
    </div>
</template>
      
<script>
export default {
  name: "Home",
  setup() {
    return {};
  },
};
</script>
<style>
*{
  font-family: "Heebo", sans-serif;
}

#hero-banner {
  margin: 0px;
  padding: 0px;
  transition: all 0.6s;
  display: flex;
  flex-direction: row;
    background:
    url("https://38.media.tumblr.com/d23deac40b06633b79520a8552f40b94/tumblr_nb1uhrRrge1st5lhmo1_1280.jpg")
    no-repeat center center fixed;
  padding: 50px;
  margin: 0 50px 0 50px;
  border-radius: 50px;
}

.container-banner {
  max-width: 1440px;
  margin: 0 170px 0 170px;
  padding: 30px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  border-radius: 10px;
}

#images-hero {
  max-width: 520px;
  margin: 0;
  display: flex;
  align-content: center;
  justify-content: center;
  /* background-color: #072AC8; */
  position: relative;
}

.text{
  margin-left: 30px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  text-align: center;
}

.img-fluid {
  position: absolute;
  z-index: 1;
  width: 50px;
}

#images-hero>.img-fluid:nth-child(1) {
  right: 85%;
}

#images-hero>.img-fluid:nth-child(2) {
  width: 80px;
  top: 65%;
  left: 75%;
}

#boy {
  position: relative;
  width: 180px;
}

#hero-banner .animated {
  animation: up-down 2s ease-in-out infinite alternate-reverse both;
}

#hero-banner .animated:hover {
  animation: none;
}

@keyframes up-down {
  0% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(-10px);
  }
}

@media(max-width: 1020px) {
  #hero-banner{
    margin: 0;
    padding: 0;
  }


  .container-banner{
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .text{
    margin: 0;
    padding: 0;
  }
};



</style>
      