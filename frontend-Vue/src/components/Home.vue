<template>
<div>
    <div id="banner">
        <div class="banner-section">
            <h1></h1>
        </div>
        <div class="banner-section"></div>
    </div>

    <div id="aboutUs">
        <div class="about-section"></div>
        <div class="about-section"></div>
    </div>

    <div id="technologys">
        <div class="tech"></div>
        <div class="tech"></div>
        <div class="tech"></div>
        <div class="tech"></div>
        <div class="tech"></div>
        <div class="tech"></div>
    </div>
    
    <div id="developers">
        <div class="dev"></div>
        <div class="dev"></div>
    </div>
</div>
</template>
  
<script>
export default {
    name: "Home",
    setup() {
        return {};
    },
};
</script>
<style>
#banner{
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    border-radius: 10%;
    background-image: url("https://crowdfunding-platforms.com/wp-content/uploads/2020/05/11-Crypto-Lending-e1641942705362.png");
    width: 80%;
    height: 498px;
}
</style>
  