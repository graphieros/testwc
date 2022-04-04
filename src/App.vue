<template>
  <div id="app">
    <div
      v-if="isSticker"
      @click="showModal()"
      class="sticker"
      :class="`sticker__${orientationClass}`"
      :style="customStyle"
    >
      <span class="sticker__span">{{ stickerText }}</span>
    </div>
    <div class="modal" v-if="isModal">
      <Button
        @click="isModal = !isModal"
        :fab="true"
        :fixed="true"
        :right="true"
        :top="true"
      >
        <IconClose />
      </Button>

      <div class="modal__rating-stars">
        <Stars :size="starsNumber" @rate="saveRating" />
      </div>

      <div class="modal__rating-result">
        Your rating: {{ userRating }} / {{ starsNumber }}
      </div>

      <div class="modal__input">
        <label for="comment">Vos commentaires:</label>
        <textarea name="comment" v-model="comment"></textarea>
      </div>

      <div class="modal__actions">
        <Button
          :big="true"
          background="blue"
          color="white"
          @click="postSurvey()"
        >
          Envoyer
        </Button>
      </div>
    </div>

    <div class="overlay" v-if="isModal"></div>
  </div>
</template>

<script>
// TODO: loading state
// TODO: get user information
// TODO: store survey data
import Button from "./components/Button.vue";
import IconClose from "./components/IconClose.vue";
import Stars from "./components/Stars.vue";
export default {
  name: "App",
  components: {
    Button,
    IconClose,
    Stars,
  },
  props: {
    // bg-color: background color of the sticker. Defaults to white
    bgColor: {
      type: String,
      default: "white",
    },
    // color: text color of the background. Defaults to black
    color: {
      type: String,
      default: "black",
    },
    // orientation: br, tr, bl, tl. Defaults to bottom right
    orientation: {
      type: String,
      default: "br",
    },
    // position-bottom: distance to bottom of page in % or px. Defaults to nothing
    positionBottom: {
      type: String, //px % ""
      default: "",
    },
    // position-top: distance to top of page in % or px. Defaults to nothing
    positionTop: {
      type: String, //px % ""
      default: "",
    },
    // stars-number: customize number of stars. Defaults to 5
    starsNumber: {
      type: Number,
      default: 5,
    },
    // sticker: shows a fixed sticker on the screen side. Defaults to false
    sticker: {
      type: Boolean,
      default: false,
    },
    // sticker-text: text of the sticker. Defaults to "Click me"
    stickerText: {
      type: String,
      default: "Click me",
    },
    // study-id: client id to pass to the component
    studyId: {
      type: String,
      default: "",
    },
    // trigger: opens modal when user's mouse leaves window at the top, defaults to once (once, always, none)
    trigger: {
      type: String,
      default: "none",
    },
    // trigger-delay: sets the time after which the components starts watching the user's mouse position. Defaults to 5000ms (5s)
    triggerDelay: {
      type: String,
      default: "5000",
    },
  },
  data() {
    return {
      canTrigger: true,
      comment: "",
      isModal: false,
      isSticker: this.sticker,
      surveyData: {},
      userRating: 0,
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
  methods: {
    lockTrigger() {
      this.canTrigger = false;
    },
    postSurvey() {
      // retrieve all gatehred data in proper format and post to db.
      console.log("POSTING DATA...");
    },
    saveRating(rating) {
      this.userRating = rating;
    },
    showModal() {
      this.isModal = !this.isModal;
      this.isSticker = false;
    },
  },
  created() {
    setTimeout(() => {
      if (this.trigger === "always") {
        document.addEventListener("mousemove", (e) => {
          if (e.clientY < 3) {
            this.isModal = true;
          }
        });
      } else if (this.trigger === "once") {
        document.addEventListener("mousemove", (e) => {
          if (this.canTrigger && e.clientY < 3) {
            this.isModal = true;
            this.lockTrigger();
          }
        });
      }
    }, this.triggerDelay);
  },
};
</script>

<style lang="scss">
#app,
:host {
  font-family: "Roboto", sans-serif;
  position: relative;
  z-index: 214748364;
}
.sticker {
  align-items: center;
  background-color: grey;
  border-radius: 3px;
  bottom: 100px;
  box-shadow: 0 10px 20px -10px grey;
  cursor: pointer;
  display: flex;
  height: fit-content;
  justify-content: center;
  padding: 16px 8px;
  position: fixed;
  right: 0;
  user-select: none;
  width: fit-content;
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
    display: inline-block;
    overflow: visible;
    transform: rotate(180deg);
    white-space: nowrap;
    writing-mode: vertical-rl;
  }
}
.modal {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 20px -10px grey;
  left: 50%;
  min-height: 300px;
  width: fit-content;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 32px;
  position: fixed;
  right: initial;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  &__rating-result,
  &__actions {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  &__rating-stars {
    display: block;
    width: 100%;
  }
  &__input {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 32px 0;
    input,
    label {
      width: 100%;
    }
    label {
      margin-bottom: 8px;
    }
    input,
    textarea {
      border-radius: 8px;
      border: 1px solid #ccc;
      font-family: Roboto, sans-serif;
      font-size: 1rem;
      max-width: 60ch;
    }
    input {
      height: 44px;
      padding: 0px 8px;
    }
    textarea {
      min-height: 100px;
      max-height: 200px;
      min-width: 30ch;
      padding: 8px;
      &:focus {
        border: 1px solid blue;
        outline: none;
      }
    }
  }
}
.overlay {
  background: rgba(0, 0, 0, 0.3);
  display: block;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 0;
}

@media screen and(max-width: 600px) {
  .modal {
    &__input {
      label,
      textarea {
        min-width: none;
      }
    }
  }
}
</style>
