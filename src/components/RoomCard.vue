<template>
  <div class="room-card">
    <div class="room-card__component">
      <h1>RoomCard</h1>
    </div>

    <div class="room-card__block--img">
      <div class="room-card__img">
        <img src="https://media.radissonhotels.net/image/Park-Inn-Brand/Miscellaneous/16256-115886-f63924267_3XL.jpg?impolicy=Card" alt="">
      </div>
    </div>
    <div class="room-card__block">
      <div class="room-card__title">
        <h3>Title room</h3>
      </div>
      <div class="room-card__description">
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet fugit ab saepe modi voluptatibus numquam recusandae, eum libero. Autem quisquam, nisi mollitia odio voluptatem eligendi natus qui deserunt reiciendis officia!</span>
      </div>
    </div>
    <div class="room-card__features">
      <div class="room-card__guests">
        <span>Max Guests</span>
      </div>
      <div class="room-card__img-size">
        <span>20m</span>
      </div>
    </div>
    <div class="services">
      <i>X</i>
      <i>X</i>
      <i>X</i>
      <i>X</i>
      <i>X</i>
      <i>X</i>
      <i>X</i>
      <i>X</i>
      <i>X</i>
      <i>X</i>
      <i>X</i>
      <i>X</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomCard'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.room-card {
  background-color: cornflowerblue;
  grid-area: room;
  @media (min-width: 768px) {
    grid-column: col-start 4 / 13;
  }
  &__block--img {
    float: left;
    img {
      height: 10rem;
      widows: 10rem; 
    }
  }
  &__features{
      display: flex;
      justify-content: space-around;
    }

}
</style>
