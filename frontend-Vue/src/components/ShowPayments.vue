<template>
    <!--<div v-for="(id, index) in RegistryStore.txhash" :key="index">-->
        <div>
        <div class="form animated flipInX">
            <h2>Check Payments</h2>
            <br />
            <form>
                <h6>Debt hash:</h6>
                <input v-model="RegistryStore.txhash" placeholder="Transaction Hash" list="txhash" name="txhash"
                    type="text" />
                <h6>Payment hash:</h6>
                <!--<input v-for="(payment, index2) in RegistryStore.txhash[id]" disabled
                    v-model="RegistryStore.txhash[id].payment[index2]" placeholder="Lender Address" type="text" />-->

                    <inputdisabled
                    v-model="RegistryStore.txhash" placeholder="Lender Address" type="text" />


                <button class="registerPayment"
                    @click.prevent="RegistryStore.registerPayment(RegistryStore.debts[index].Id,)">Accept
                    Payment</button>

            </form>
        </div>
    </div>
</template>
    <!--
        address lender,
            address currency,
            uint amount,
            uint timeToPay,
            uint numberOfPayments
    -->
    
<script>
import { ref } from "vue"
import { mapStores } from "pinia";
import useRegistryStore from "../stores/registry.js"

export default {
    name: "ShowPayments",
    setup() {
        return {
        };
    },

    methods: {

    },

    computed: {
        ...mapStores(useRegistryStore)
    },

    mounted() {
        this.RegistryStore.connect();
    }
};
</script>
    
<style>
.form {
    display: flex;
    flex-wrap: nowrap;

    justify-content: center;
    flex-direction: column;
    background: #fff;
    margin-top: 5%;
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 5%;
    padding: 30px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}

h6 {
    color: #44c4e7;
}

.form h2 {
    margin: 0 0 20px;
    line-height: 1;
    color: #44c4e7;
    font-size: 18px;
    font-weight: 400;
}

.form input {
    outline: none;
    display: block;
    width: 100%;
    margin: 0 0 20px;
    padding: 10px 15px;
    border: 1px solid #ccc;
    color: #ccc;
    font-family: "Roboto";
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-transition: 0.2s linear;
    -moz-transition: 0.2s linear;
    -ms-transition: 0.2s linear;
    -o-transition: 0.2s linear;
    transition: 0.2s linear;
}

.form input:focus {
    color: #333;
    border: 1px solid #44c4e7;
}

.form button {
    cursor: pointer;
    background: #44c4e7;
    width: 100%;
    padding: 10px 15px;
    border: 0;
    color: #fff;
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 400;
}

.form button:hover {
    background: #369cb8;
}

.registerPayment {
    width: 100% !important;
}
</style>
    