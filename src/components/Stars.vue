<template>
  <div class="stars__container">
    <div v-for="(_star, i) in size" :key="`star${i}`">
      <button @click="clickStar(i + 1)" class="stars__button" :ref="`star${i}`">
        {{ isSelected(i + 1) ? "&#9734;" : "&#9733;" }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 5,
    },
  },
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
    gap: 6px;
    padding: 12px;
  }
  &__button {
    align-items: center;
    background-color: unset;
    border: none;
    color: #ffc400;
    display: flex;
    font-size: 3em;
    height: 40px;
    justify-content: center;
    &:hover {
      cursor: pointer;
      transform: scale(1.1, 1.1);
    }
  }
}
</style>
