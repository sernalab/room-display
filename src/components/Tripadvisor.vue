<template>
  <div class="tripadvisor">
    <div class="hotel-card__img">
      <h1>Tripadvisor</h1>
    </div>
    <div class="hotel-card__description">
      <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet fugit ab saepe modi voluptatibus numquam recusandae, eum libero. Autem quisquam, nisi mollitia odio voluptatem eligendi natus qui deserunt reiciendis officia!</span>
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
.tripadvisor {
  grid-column: 1/2;
  grid-row: 4/5;
  background-color: tomato;
}
</style>
