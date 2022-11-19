<template>
    <h1 class="devstitle"><b>Our Devs</b></h1>
    <div id="devs-container">
        <div>
            <a href="https://mx.linkedin.com/in/carlos-eduardo-segovia-medina-2b8557192">
            <img class="devs" src="../assets/AE511DD9-054B-4D78-8CD5-0C14EFAB82B0-removebg-preview.png" alt="dev Carlos Segovia" />
            <h2>Carlos Segovia</h2>
        </a>
        </div>

        <div>
            <a href="https://es.linkedin.com/in/javier-esparza-944067156">
            <img class="devs" src="../assets/84877EC8-7170-4A96-AB9F-9B83EC03C9EA-removebg-preview.png" alt="dev Javier Esparza" />
            <h2>Javier Esparza</h2>
        </a>
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

h1{
text-align: center;
margin-top: 10%;
color: white;
padding-top: 5%;
padding-bottom: 5%;
background-color: white;
border-radius: 50px;
margin:  50px;
margin-bottom: 50px !important;
}

h2{
    background-color: white;
    color: blue;
    border-radius: 20px;
    padding-left: 15px;
}

a{
    text-decoration: none;
}

.devs{
    width: 250px;
    border-radius: 30%;
    background-color: white;
}

@media (max-width: 600px) {
    .devs{
    width: 150px;
    border-radius: 30%;
    background-color: white;
}
}

h1{
    margin-top: 10% !important;
    text-align: center;
    color: blue;
    padding-top: 5%;
    padding-bottom: 5%;
    background-color: white;
    border-radius: 50px;
    margin:  50px;
    margin-bottom: 50px !important;
}

</style>