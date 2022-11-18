<template>

<Home2/>
<Techs/>
<Services/>
<Devs />

</template>

<script>

import Home2 from "../components/Home2.vue";
import Techs from "../components/Techs.vue";
import Services from "../components/Services.vue";
import Devs from "../components/Devs.vue"

export default {
    components: {
        Home2,
        Techs,
        Services,
        Devs
    },
    setup() {
        return {};
    },
}
</script>
  
<style>
</style>