<template>
    <div>
    <!-- "connect" click event is registered -->
    <button v-if="!ContractStore.connected" @click="ContractStore.connect">Connect wallet</button>
    <button v-if="ContractStore.connected" @click="ContractStore.callContract">Call contract</button>
    {{ ContractStore.contractResult }}
  </div>
</template>

<script>
import useContractStore from "../stores/contract"
import { mapStores } from "pinia";


export default {
  setup() {
    return {
    };
  },

  computed: {
    ...mapStores(useContractStore)
  }
};
</script>

<style>
</style>