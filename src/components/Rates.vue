<template>
  <div class="rate-card">
    <div class="rate-card__img">
      <h3>Title rate</h3>
    </div>
    <div class="rate-card__label">
      <span>NON refound</span>
    </div>
    <div class="rate-card__conditions">
      <span>See conditions</span>
    </div>
    <div class="rate-card__discount">
      <span>Discount</span>
    </div>
    <div class="rate-card__price">
      <span>7777$</span>
    </div>
    <div class="rate-card__select">
      <button>Select ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rates'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.rate-card {
  grid-column: 3/5;
  grid-row: 4/5;
  background-color: rosybrown;
}

h3 {
  margin: 40px 0 0;
}
</style>
