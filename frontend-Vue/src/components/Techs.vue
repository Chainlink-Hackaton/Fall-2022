<template>
        <div class="client-logo">
            <a href="#" target="_blank">
                <img class="logos" src="../assets/Chainlink_Logo_Blue.svg" alt="ChainLink">
            </a>
           
            <a href="#" target="_blank">
                <img class="logos" src="./images/logos/google-logo.svg" alt="Google">
            </a>
            
            <a href="#" target="_blank">
                <img class="logos" src="./images/logos/microsoft-logo.svg" alt="Microsoft">
            </a>
            
            <a href="#" target="_blank">
                <img class="logos" src="./images/logos/fedex-logo.svg" alt="Fedex">
            </a>
            <a href="#" target="_blank">
                <img class="logos" src="./images/logos/amazon-logo.svg" alt="Amazon">
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
  width: 12rem;
  filter: invert(40%) sepia(8%) saturate(15%) hue-rotate(39deg) brightness(93%)
    contrast(86%);
  transition: 0.5s;
}
.logos:hover {
  filter: none;
}

.prueba-logo {
  mask-image: url(../images/logos/amazon-logo.svg);
  width: 4rem;
  background-color: red;
  height: 3rem;
}
</style>