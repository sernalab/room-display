<template>
  <div class="currency">
    <div class="currency__price">
      <p>See prices in</p>
      <select name="currency" id="currency">
        <option value="eur">EUR</option>
        <option value="dolar">DOLAR</option>
      </select>
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
.currency {
  grid-column: 4/5;
  display: flex;
  align-items: end;
  justify-content: end;
  background-color: limegreen;
  &__price {
    display: flex;
    align-items: center;
  }
}
</style>
