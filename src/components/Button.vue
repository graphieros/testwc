<template>
  <button
    @click="$emit('click')"
    class="button"
    :class="`button__${sizeClass}`"
    :style="customStyle"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default: "white",
    },
    big: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "black",
    },
    fab: {
      type: Boolean,
      default: false,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    left: {
      type: Boolean,
      default: false,
    },
    medium: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    top: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    customStyle() {
      const backgroundColor = this.background || "white";
      const color = this.color || "black";
      const left = this.left ? "0" : undefined;
      const position = this.fixed ? "fixed" : undefined;
      const right = this.right ? "0" : undefined;
      const top = this.top ? "0" : undefined;
      return {
        backgroundColor,
        color,
        left,
        position,
        right,
        top,
      };
    },
    sizeClass() {
      if (this.big) {
        return "big";
      }
      if (this.medium) {
        return "medium";
      }
      if (this.small) {
        return "small";
      }
      if (this.fab) {
        return "fab";
      }
      return "medium";
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.button {
  font-family: Roboto, sans-serif;
  border: 1px solid #ccc;
  opacity: 0.8;
  transition: opacity 0.15s ease-in-out;
  box-shadow: 0px 5px 10px -5px grey;
  position: relative;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  &__big {
    border-radius: 10px;
    font-size: 1.3rem;
    margin: 8px 0;
    padding: 8px 24px;
  }
  &__medium {
    border-radius: 8px;
    font-size: 1rem;
    margin: 6px 0;
    padding: 6px 18px;
  }
  &__small {
    border-radius: 6px;
    font-size: 0.8rem;
    margin: 4px 0;
    padding: 4px 12px;
  }
  &__fab {
    border: none;
    box-shadow: none;
    height: 32px;
    margin: 8px;
    width: 32px;
  }
}
</style>
