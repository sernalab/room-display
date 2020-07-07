<template>
  <div class="hotel-card">
    <div class="hotel-card__component">
      <h1>Hotel Card</h1>
    </div>
    <div class="hotel-card__img">
      <img src="https://media.radissonhotels.net/image/Park-Inn-Brand/Miscellaneous/16256-115886-f63924267_3XL.jpg?impolicy=Card" alt="">
    </div>
    <div class="hotel-card__title">
      <h3>Radisson Blue Berlin</h3>
    </div>
    <div class="hotel-card__discount">
      <span>30% OFF</span>
    </div>
    <div class="hotel-card__adress">
      <span>Berlin, Germany</span>
    </div>
    <div class="hotel-card__phone">
      <span>+49 777777777</span>
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
  &__img {
    img{
      height: 10rem;
      widows: 10rem; 
    }
  }
  &__discount {
    span {
      background-color: tomato;
    }
  }
}
a {
  color: #42b983;
}
</style>
