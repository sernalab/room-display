<template>
  <div class="currency-component">
    <div class="currency">
      <div class="currency__price">
        <p>See prices in</p>
        <select name="currency" id="currency">
          <option value="eur">EUR</option>
          <option value="dolar">DOLAR</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Currency'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.currency-component {
  display: none;
  grid-area: currency;
  @media (min-width: 768px) {
    display: block;
    grid-column: col-start 10 / 13;
    .currency {
      display: flex;
      align-items: end;
      justify-content: end;
      background-color: limegreen;
      height: 100%;
      
      &__price {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
