<template>
  {{Header()}}
</template>

<script>
import { ConnectButton } from "@web3uikit/core"
export default function Header() {
  return (
    <nav>
    <h1>Lottery</h1>
    <div>
      <ConnectButton />
      </div>  
    </nav>
  )
}
/*export default {
  setup() {
    return {
    };
  },
};*/
</script>

<style>
</style>