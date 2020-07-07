<template>
  <div class="info-message">
    <div class="info-message__title">
      <h1>InfoMessage</h1>
    </div>
    <div class="info-message__description">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, quas quibusdam. Laudantium quibusdam excepturi facilis ipsum sint quia minima hic, velit odio, ullam voluptate aliquid! Accusamus maxime error aliquid asperiores.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoMessage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.info-message {
  background-color: peru;
  grid-area: info;
  @media (min-width: 768px) {
    grid-column: col-start / 13;
  }
}
</style>
