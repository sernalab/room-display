<template>
  <div class="filter">
    <div class="filter__header">
      <div class="filter__title">
        <h1>FilterRates</h1>
      </div>
      <div class="filter__clear">
        <a href="#">Clear all filters</a>
      </div>
    </div>
    <div class="filter__group">
      <div class="filter__group--item">
        <span>Member only</span>
      </div>
      <div class="filter__group--item">
        <span>Free Cancellation</span>
      </div>
      <div class="filter__group--item">
        <span>Discounted</span>
      </div>
      <div class="filter__group--item">
        <span>Points</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterComponent'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.filter {
  background-color: mediumslateblue;
  display: none;
  grid-area: filter;
  @media (min-width: 768px) {
    display: block;
    grid-column: col-start / 10;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__group {
    display: flex;
    flex-direction: row;
    &--item {
      border: 1px solid tomato;
      margin: 0 10px;
    }
  }
}
a {
  color: #42b983;
}
</style>
