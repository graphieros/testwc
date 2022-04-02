<template>
  <div id="app">
    <div
      @click="isModal = !isModal"
      class="sticker"
      :class="`sticker__${orientationClass}`"
      :style="customStyle"
    >
      <span class="sticker__span"> CLICK ME </span>
    </div>
    <div class="modal" v-show="isModal">Cient Id: {{ studyId }}</div>
  </div>
</template>

<script>
// loading state
// getting user information
// survey data
export default {
  name: "App",
  props: {
    bgColor: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
    orientation: {
      type: String,
      default: "br",
    },
    positionBottom: {
      type: String, //px % ""
      default: "",
    },
    positionTop: {
      type: String, //px % ""
      default: "",
    },
    studyId: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isModal: false,
      surveyData: {},
    };
  },
  computed: {
    orientationClass() {
      if (["br", "bl", "tl", "tr"].includes(this.orientation)) {
        return this.orientation;
      }
      return "br";
    },
    customStyle() {
      const backgroundColor = this.bgColor || undefined;
      const bottom = this.positionBottom || undefined;
      const color = this.color || undefined;
      const top = this.positionTop || undefined;
      return {
        backgroundColor,
        bottom,
        color,
        top,
      };
    },
  },
  components: {},
};
</script>

<style lang="scss">
#app,
:host {
  position: relative;
  z-index: 214748364;
}
.sticker {
  align-items: center;
  background-color: grey;
  border-radius: 3px;
  bottom: 100px;
  box-shadow: 0 10px 20px -10px grey;
  display: flex;
  height: 100px;
  justify-content: center;
  position: fixed;
  right: 0;
  user-select: none;
  width: 50px;
  &__br,
  &__bl {
    bottom: 100px;
  }
  &__br,
  &__tr {
    right: 0;
  }
  &__bl,
  &__tl {
    left: 0;
  }
  &__tl,
  &__tr {
    top: 30%;
  }
  &__span {
    color: inherit;
    text-orientation: mixed;
    writing-mode: vertical-lr;
  }
}
.modal {
  align-items: center;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 20px -10px grey;
  display: flex;
  height: 300px;
  justify-content: center;
  left: 50%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 16px;
  position: fixed;
  right: initial;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
}
</style>
