<template>
    <div>
      <div class="form animated flipInX">

    
        <br />
        <h1>{{RegistryStore.txhash}}</h1>
        <form>
          <input disabled  placeholder="Lender Address" type="text" />
    
          <input disabled  placeholder="Currency" list="currencys" name="currency" id="list" />
        
          <button class="acceptDebt" @click.prevent="RegistryStore.acceptDebt(RegistryStore.debts[index].Id)">Accept Debt</button>
          <button class="rejectDebt" @click.prevent="RegistryStore.rejectDebt(RegistryStore.debts[index].Id)">Reject Debt</button>
    
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
      name: "AcceptDebt",
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
    