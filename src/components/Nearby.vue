<template>
  <div class="nearby">
    <div class="hotel-card__img">
      <h1>Nearby</h1>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'Nearby'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nearby {
  background-color: palegreen;
  grid-area: nearby;
  @media (min-width: 768px) {
    grid-column: col-start / 13;
  }
}
</style>
