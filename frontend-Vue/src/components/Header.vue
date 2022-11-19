<template>
  <header>
    <nav
      class="navbar bg-primary text-center text-white"
      :class="{ active: showMenu }"
    >
      <!--<img src="../assets/logocheckme.png">-->
      <img
        class="img-logo"
        src="../assets/Logo para Diseño de Videojuegos Recreativos Atrevido y Estético Blanco y Negro (1).png"
        alt="AgroLend Logo"
      />
      <!--<a href="#" class="nav-branding">NavBar</a>-->

      <ul
        class="nav-menu bg-primary text-center text-white"
        :class="{ active: this.showMenu }"
        @click="showMenu = !this.showMenu"
      >
        <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/debt">Create Debt</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/accept">Accept Debt</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/payment">Register Payment</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/showPayments">Review Payments</router-link></li>
      </ul>

      <div>
        <button
          v-if="RegistryStore.connected == false"
          class="btn btn-light btn-met nav-item"
          type="button"
          @click="RegistryStore.connect()"
        >
          <img
            class="led-check"
            src="../assets/red-light-removebg-preview.png"
            alt="Red Check"
          />Connect<img
            class="metamask-logo"
            src="../assets/Metamask.png"
            alt="Metamask Logo"
          />
        </button>
        <button
          v-else="RegistryStore.connected == true"
          class="btn btn-light btn-met nav-item btn-2"
          type="button"
        >
          <img
            class="led-check"
            src="../assets/Green.png"
            alt="Green Check"
          />{{
            RegistryStore.userAddress.slice(0, 3) +
            "..." +
            RegistryStore.userAddress.slice(-3)
          }}<img
            class="metamask-logo"
            src="../assets/Metamask.png"
            alt="Metamask Logo"
          />
        </button>
      </div>

      <div
        class="hamburger"
        :class="{ active: this.showMenu }"
        @click="showMenu = !this.showMenu"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapStores } from "pinia";
import useRegistryStore from "../stores/registry.js";
import router from "../router/index.js";
//import router from "../router/index"

export default {
  name: "NavBar",
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    ...mapStores(useRegistryStore),
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.pointer {
  cursor: pointer;
}

li {
  list-style: none;
}

a {
  color: white;
  text-decoration: none;
}

.navbar {
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
}

.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
}

.nav-branding {
  font-size: 2rem;
}

.img-logo {
  padding: 5px;
  width: 120px;
}

.btn-met {
  padding-left: 18 !important;
  color: blue;
  margin-right: 50px;
}

.btn-light {
  --bs-btn-color: #0d6efd !important;
}

.metamask-logo {
  padding-left: 0px;
  margin: 0px;
  width: 50px;
}

.led-check {
  padding-right: 10px;
  padding-left: 0px;
  margin: 0px;
  width: 25px;
}

.nav-link {
  transition: 0.7s ease !important;
}

.nav-link:hover {
  color: plum !important; 
}

.hamburger {
  display: none;
  visibility: hidden;
  padding-right: 20px;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: white;
}

@media (max-width: 720px) {
  .hamburger {
    display: block;
    visibility: initial;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .nav-menu {
    position: absolute;
    left: -100%;
    top: 115px;
    gap: 0;
    flex-direction: column;
    background-color: white;
    width: 100%;
    transition: 0.3s;
  }

  .nav-item {
    margin: 16px 0;
  }

  .nav-menu.active {
    left: 0;
    display: flex;
    flex-wrap: nowrap;
    left: 0;
    justify-content: space-between;
  }

  .navbar.active {
    margin-bottom: 12rem !important;
  }

  .hide {
    display: none;
  }
}
</style>
