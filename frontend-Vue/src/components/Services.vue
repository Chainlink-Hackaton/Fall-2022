<template>
    <h1><b>Crypto Lends Services</b></h1>
            <div id="cards-projects" class="cards">
                <div class="card-box card-box-hover">
                <img src="https://openledger.info/insights/wp-content/uploads/2019/01/banks-blockchain-948x640.png" alt="img">
                <h3>Create</h3>
                <p>Yo can create any kind of debt</p>
                <a href="./pages/simplify.html">Learn more</a>
            </div>
            <div class="card-box card-box-hover">
                <img src="https://buybitcoinworldwide.com/pages/info/whoaccepts/img/who-accepts-bitcoin.png" alt="img">
                <h3>Accept</h3>
                <p>As a lender you can accept debts of any user.</p>
                <a href="#">Learn more</a>
            </div>
            <div class="card-box card-box-hover">
                <img src="https://www.antiersolutions.com/wp-content/uploads/2021/11/gateway-1.jpg" alt="img">
                <h3>Pay</h3>
                <p>Use our platform to pay your Crypto Lends.</p>
                <a href="#">Learn more</a>
            </div>
            </div>
</template>
      
<script>
export default {
    name: "Services",
    setup() {
        return {};
    },
};
</script>
<style>

h1{
    text-align: center;
    color: white;
    padding-top: 5%;
    padding-bottom: 5%;
    background-color: white;
    border-radius: 50px;
    margin:  50px;
    margin-bottom: 50px !important;
}

.cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
}

img{
    margin-bottom: 30px;
    width: 80%;
    border-radius: 50px 50px 0px 0px;
}

.card-box {
  width: 340px;
  height: 440px;
  background-color: #ffffff;
  margin-top: 20px;
  box-shadow: 0 38px 77px rgba(0, 0, 0, 0.1);
  transition: all 600ms;
  border-radius: 50px;
}

.card-box-hover:hover {
  transform: scale(1.1, 1.1);
  box-shadow: 0 0 50px #9d00ecc0;
}

.card-box img {
  width: 340px;
  height: 240px;
}

@media (max-width: 1024px){
  #projects,
  #services {
    margin: 0 100px;
  }

  #projects h2 {
    text-align: center;
    margin-bottom: 50px;
  }
  .cards{
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 767px){

  #projects,
  #services {
    margin: 0;
  }

  #projects h2 {
    text-align: center;
    margin-bottom: 50px;
  }

  .cards{
    justify-content: center;
  }
}
</style>
      