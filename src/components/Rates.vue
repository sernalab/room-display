<template>
  <div class="rate-card">
    <div class="rate-card__component">
      <h1>Rates</h1>
    </div>
    <div class="rate-card__block">
      <div class="rate-card__info">
        <div class="rate-card__title">
          <h3>Special Rate-Queen Bed</h3>
        </div>
        <div class="rate-card__conditions">
          <span>See conditions</span>
        </div>
        <div class="rate-card__label">
          <span>NON refound</span>
        </div>  
      </div>
      <div class="rate-card__price">
        <div class="rate-card__discount">
          <span>20% savings</span>
        </div>
        <div class="rate-card__total">
          <span>7777$</span>
        </div>
      </div>
      <div class="rate-card__select">
        <button>Select ></button>
      </div>
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
  &__block {
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__select {
    button{
      background-color: tomato;
      border: 0;
      height: 50px;
      width: 100px;
    }
  }
}

h3 {
  margin: 0;
}
</style>
