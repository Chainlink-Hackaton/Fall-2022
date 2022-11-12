<template>
    <header>
        <nav class="navbar bg-primary text-center text-white" :class="{active: showMenu}">
            <!--<img src="../assets/logocheckme.png">-->
            <img class= "img-logo" src="../assets/Agro-Lend(Logo).png" alt="AgroLend Logo">
            <!--<a href="#" class="nav-branding">NavBar</a>-->

            <ul class="nav-menu bg-primary text-center text-white" :class="{active: this.showMenu}" @click="showMenu = !this.showMenu">
                <li class="nav-item">Home</li>
                <li class="nav-item">Lender</li>
                <li class="nav-item">Payer</li>
            </ul>

            <div class="hamburger" :class="{active: this.showMenu}" @click="showMenu = !this.showMenu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    </header>
</template>

<script>
import { mapStores } from "pinia";
import useContractStore from "../stores/contract"
//import router from "../router/index"

export default {
    name: "NavBar",
    data() {
        return {
            showMenu: false,
        }
    },
    computed: {
        ...mapStores(useContractStore),
    },
};
</script>


<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.pointer{
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

.img-logo{
    padding: 5px;
    width: 120px;
}

.nav-link {
    transition: 0.7s ease;
}

.nav-link:hover {
    color: orangered
}

.hamburger {
    visibility: hidden;
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

@media(max-width: 720px) {
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
        top: 70px;
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