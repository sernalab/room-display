<template>
  <div class="hotel-card">
    <div class="hotel-card__img">
      <h1>Hotel Card</h1>
    </div>
    <div class="hotel-card__img">
      <span>Title Hotel</span>
    </div>
    <div class="hotel-card__img">
      <span>Discount labels</span>
    </div>
    <div class="hotel-card__img">
      <span>Adress</span>
    </div>
    <div class="hotel-card__img">
      <span>777777777</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotelCard'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hotel-card {
  grid-column: 1/2;
  grid-row: 3/4;
  background-color: mediumaquamarine;
}
a {
  color: #42b983;
}
</style>
