<template>
    <div id="devs-container">
        <div>
            <img class="devs" src="../assets/AE511DD9-054B-4D78-8CD5-0C14EFAB82B0-removebg-preview.png" alt="dev Carlos Segovia" />
        </div>

        <div>
            <img class="devs" src="../assets/84877EC8-7170-4A96-AB9F-9B83EC03C9EA-removebg-preview.png" alt="dev Javier Esparza" />
        </div>
    </div>
</template>
        
<script>
export default {
    name: "Devs",
    setup() {
        return {};
    },
};
</script>
<style>
* {
    font-family: "Heebo", sans-serif;
}

#devs-container{
    margin-top: 10%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.devs{
    width: 250px;
    border-radius: 30%;
    background-color: white;
}
</style>