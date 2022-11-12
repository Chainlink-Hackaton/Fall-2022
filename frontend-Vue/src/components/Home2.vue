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
          <h1>Crypto Lendes</h1>
          <h2>Create and acept lends for everyone</h2>
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
#hero-banner {
  margin: 0px;
  padding: 0px;
  transition: all 0.6s;
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 5%;
  margin: 0% 5% 0% 5%;
  border-radius: 50px;
}

.container-banner {
  max-width: 1440px;
  margin: 0 170px 0 170px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
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
  margin-left: 30%;
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
</style>
      