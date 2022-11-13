<template>
        <div class="client-logo">
            <a href="#" target="_blank">
                <img class="logos" src="../assets/chainlink-logo.png" alt="ChainLink">
            </a>
           
            <a href="#" target="_blank">
                <img class="logos otherLogo" src="../assets/solidity-logo.png" alt="Solidity">
            </a>
            
            <a href="#" target="_blank">
                <img class="logos vueLogo" src="../assets/vue-logo.png" alt="Vue">
            </a>
            
            <a href="#" target="_blank">
                <img class="logos otherLogo" src="../assets/pinia.svg" alt="Pinia">
            </a>
        </div>
</template>

<script>
export default {
  name: "Techs",
  setup() {
    return {};
  },
}
</script>

<style>
.client-logo {
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
}


.logos {
  width: 4rem;
  filter: invert(40%) sepia(8%) saturate(15%) hue-rotate(39deg) brightness(93%)
    contrast(86%);
  transition: 0.5s;
}
.logos:hover {
  filter: none;
}

.otherLogo{
  width: 3rem;
}

.vueLogo{
  width: 6rem;
}


.prueba-logo {
  mask-image: url(../images/logos/amazon-logo.svg);
  width: 4rem;
  background-color: red;
  height: 3rem;
}
</style>