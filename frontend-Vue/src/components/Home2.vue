<template>
    <div id="hero-banner">
    <div class="container-banner">
                <div class="col-6">
                    <div id="images-hero">
                        <img class="img-fluid animated"  src="https://mid-term-project.github.io/Project/images/hero-section/card-1.png" alt="card 1">
                        <img class="img-fluid animated"  src="https://mid-term-project.github.io/Project/images/hero-section/card-2.png" alt="card 2">                
                        <img id="boy" src="../assets/p2p.png" alt="Hero Img">
            </div>
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
#hero-banner{
    margin: 0px;
    padding: 0px;
    transition: all 0.6s;
    display: flex;
    flex-direction: row;
}

.container-banner {
  max-width: 1440px;
  margin: 0 170px 0 170px;
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

.img-fluid {
  position: absolute;
  z-index: 1;
  width: 55%;
}

#images-hero > .img-fluid:nth-child(1) {
  right: 55%;
}

#images-hero > .img-fluid:nth-child(2) {
  width: 50%;
  top: 65%;
  left: 50%;
}

#boy {
  position: relative;
  width: 100%;
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
      