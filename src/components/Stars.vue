<template>
  <div class="stars__container">
    <div v-for="(_star, i) in 5" :key="`star${i}`">
      <button @click="clickStar(i + 1)" class="stars__button" :ref="`star${i}`">
        {{ isSelected(i + 1) ? "&#9734;" : "&#9733;" }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      max: 0,
    };
  },
  computed: {},
  methods: {
    clickStar(index) {
      if (this.max === index) {
        this.max = index - 1;
        this.$emit("rate", index - 1);
      } else {
        this.max = index;
        this.$emit("rate", index);
      }
    },
    isSelected(index) {
      return index - 1 >= this.max;
    },
  },
};
</script>

<style lang="scss" scoped>
.stars {
  &__container {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    user-select: none;
  }
  &__button {
    background-color: unset;
    border: none;
    color: #ffc400;
    font-size: 3em;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
