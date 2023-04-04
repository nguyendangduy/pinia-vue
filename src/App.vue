<script>
import { defineComponent } from "vue";
import { useCounterStore } from "./stores/counter";

export default defineComponent({
  setup() {
    const useCounter = useCounterStore();

    return {
      useCounter,
    };
  },
});
</script>

<template>
  <main>
    <h1>Counter App</h1>
    <div class="counter-wrapper">
      <button class="counter-btn" @click="useCounter.increaseCount">+</button>
      <div class="counter">
        <span>{{ useCounter.count }}</span>
      </div>
      <button class="counter-btn" @click="useCounter.decreaseCount">-</button>
    </div>
    <!-- <div>{{ useCounter.squaredCount }}</div> -->
    <br />
    <hr />
    <br />
    <h2>Squared Count</h2>
    <div class="counter">
      <span>{{ useCounter.squaredCount }}</span>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.counter {
  font-size: 70px;
  text-align: center;
}

.counter-wrapper {
  display: flex;
  width: 250px;
  margin: auto;
  align-items: center;
  justify-content: space-around;
}

.counter-btn {
  width: 50px;
  height: 50px;
  font-size: 40px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 50px;
}

h2 {
  text-align: center;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
