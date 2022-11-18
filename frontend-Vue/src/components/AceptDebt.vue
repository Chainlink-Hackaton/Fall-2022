<template>
<div
v-for="(debt, index) in RegistryStore.debts"
:key="index">
  <div class="form animated flipInX">
    <h2>Accept a Debt</h2>

    <h6 v-if="RegistryStore.debts[index].status === '0'">Debt status: pending</h6>
    <h6 v-else-if="RegistryStore.debts[index].status === '1'">Debt status: pending</h6>
    <h6 v-else-if="RegistryStore.debts[index].status === '2'">Debt status: pending</h6>
    <h6 v-else>Debt status: pending</h6>

    <br />
    <form>
      <input disabled v-model="RegistryStore.debts[index].Owner" placeholder="Lender Address" type="text" />

      <input disabled v-model="RegistryStore.debts[index].Currency" placeholder="Currency" list="currencys" name="currency" id="list" />

      <input disabled v-model="RegistryStore.debts[index].Amount" placeholder="Amount" type="text" />

      <input disabled v-model="RegistryStore.debts[index].Deadline" placeholder="Time to Pay" list="timeToPay" name="timeToPay" id="list" />


      <input disabled v-model="RegistryStore.debts[index].Split" placeholder="Number of Payments" list="numberOfPayments" name="numberOfPayments" id="list" />

    
      <button class="acceptDebt" @click.prevent="RegistryStore.acceptDebt(RegistryStore.debts[index].Id)">Accept Debt</button>
      <button class="rejectDebt" @click.prevent="RegistryStore.rejectDebt()">Reject Debt</button>

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
import {mapStores} from "pinia";
import useRegistryStore from "../stores/registry.js"

export default {
  name: "AceptDebt",
  setup() {
    return {
    };
  },

  methods: {

  },  

  computed: {
    ...mapStores(useRegistryStore)
  },

  mounted(){
    this.RegistryStore.connect()
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

h6{
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

.acceptDebt{
  width: 50% !important;
}

.rejectDebt{
  background: rgb(255, 76, 48) !important;
  width: 50% !important;
}

.form .rejectDebt:hover {
  background: rgb(175, 65, 84) !important;
}
</style>
