import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),

  getters: {
    squaredCount() {
      return this.count * this.count;
    },
  },

  actions: {
    increaseCount() {
      this.count++;
    },
    decreaseCount() {
      if (this.count > 0) {
        this.count--;
      }
    },
  },
});
