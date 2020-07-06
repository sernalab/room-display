<template>
  <div id="app">
    <FilterComponent />
    <Currency />
    <InfoMessage />
    <HotelCard />
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

export default {
  name: 'App',
  components: {
    HotelCard,
    FilterComponent,
    Currency,
    RoomCard,
    Rates,
    Nearby,
    InfoMessage
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
  margin-top: 60px;
  display: grid;
}
</style>
