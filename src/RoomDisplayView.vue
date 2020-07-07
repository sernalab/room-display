<template>
  <div id="app">
    <FilterComponent />
    <Currency />
    <InfoMessage />
    <HotelCard />
    <Tripadvisor />
    <RoomCard />
    <Rates />
    <Nearby />
  </div>
</template>

<script>
import HotelCard from './components/HotelCard.vue'
import RoomCard from './components/RoomCard.vue'
import FilterComponent from './components/FilterComponent.vue'
import Currency from './components/Currency.vue'
import Rates from './components/Rates.vue'
import Nearby from './components/Nearby.vue'
import InfoMessage from './components/InfoMessage.vue'
import Tripadvisor from './components/Tripadvisor.vue'

export default {
  name: 'App',
  components: {
    HotelCard,
    FilterComponent,
    Currency,
    RoomCard,
    Rates,
    Nearby,
    InfoMessage,
    Tripadvisor
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1000px;
  margin: 30px auto;
  display: grid;
  /* grid-template-columns: repeat(4, 25%); */
  grid-template-columns: 1fr 50px 1fr 1fr;
  grid-template-rows: repeat(3, 25%);
}
</style>
