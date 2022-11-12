<template>
  <div class="form animated flipInX">
    <h2>Create a Debt</h2>
    <form>
      <input placeholder="Lender Address" type="text" />

      <input placeholder="Currency" list="currencys" name="currency" id="list" />
      <datalist id="currencys">
        <option value="ETH"></option>
        <option value="SOL"></option>
      </datalist>

      <input placeholder="Amount" type="text" />

      <input placeholder="Time to Pay" list="timeToPay" name="timeToPay" id="list" />
      <datalist id="timeToPay">
        <option value="3 months"></option>
        <option value="6 months"></option>
        <option value="9 months"></option>
        <option value="12 months"></option>
      </datalist>

      <input placeholder="Number of Payments" list="numberOfPayments" name="numberOfPayments" id="list" />
      <datalist id="numberOfPayments">
        <option value="3 payments"></option>
        <option value="6 payments"></option>
        <option value="9 payments"></option>
        <option value="12 payments"></option>
      </datalist>
      <button>Registry Debt</button>
    </form>
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
export default {
  name: "Debt",
  setup() {
    return {};
  },
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
</style>
