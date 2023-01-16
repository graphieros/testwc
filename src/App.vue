<template>
    <div>
        <button v-if="!isActive" :class="`alp-crop-annotate__starter alp-crop-annotate__starter--${buttonPosition}`" @click="isActive = !isActive" data-html2canvas-ignore>
            <svg v-if="!isActive" width="24.000000pt" height="25.408451pt" viewBox="0 0 24.000000 25.408451" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,25.408451) scale(0.005634,-0.005634)" fill="#000000" stroke="none">
              <path d="M3510 4390 c-8 -5 -386 -380 -840 -832 l-825 -823 -169 -397 c-152 -357 -168 -400 -163 -438 9 -68 70 -117 133 -107 18 3 209 81 423 174 l391 168 832 832 833 833 0 50 0 50 -250 250 -251 250 -49 0 c-28 0 -57 -5 -65 -10z m243 -612 l-68 -68 -127 127 -128 128 67 67 68 68 127 -127 128 -128 -67 -67z m-580 -591 c-186 -186 -435 -432 -554 -547 l-216 -209 -127 121 -128 121 554 554 553 553 127 -127 128 -128 -337 -338z m-1003 -898 c0 -6 -273 -129 -278 -125 -2 2 20 57 104 255 l15 35 79 -79 c44 -44 80 -82 80 -86z"/>
              <path d="M625 2071 c-84 -10 -154 -36 -222 -80 -164 -106 -253 -269 -253 -459 0 -48 7 -114 15 -145 45 -175 177 -317 354 -381 53 -20 83 -21 636 -26 574 -5 580 -5 625 -27 71 -35 116 -79 147 -141 23 -47 28 -70 28 -132 0 -64 -4 -83 -29 -128 -33 -60 -76 -101 -139 -134 -41 -22 -53 -23 -377 -28 -364 -5 -365 -6 -400 -63 -36 -59 -20 -135 37 -173 26 -18 51 -19 368 -19 302 0 347 2 400 18 188 58 327 198 381 382 11 39 17 94 17 155 -1 238 -135 422 -377 518 -36 14 -119 17 -621 22 l-580 5 -56 26 c-111 52 -172 146 -173 264 -1 120 62 218 173 269 41 18 70 21 266 26 238 5 255 9 285 64 18 34 16 100 -4 131 -36 56 -54 60 -256 62 -102 0 -212 -2 -245 -6z"/>
              </g>
            </svg>
            <svg v-else style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
        </button>
        
    <div v-show="isActive" style="height:100%; width: 100%; z-index:2147483647; position: fixed; top:0; left:0;" ref="alpCropAnnotateWrapper">
        <div 
            class="alp-crop-annotate__overlay" 
            ref="alpCropAnnotateOverlay"
            @mousedown="dragMouse($event)"
            @mousemove="moveMouse($event)"
            @mouseup="stopMouse($event)"
            :style="isModal ? 'background: radial-gradient(transparent, rgba(0,0,0,0.3));' : 'background: transparent;'"
            data-html2canvas-ignore
        >
        </div>
        
        <button :class="`alp-crop-annotate__starter alp-crop-annotate__starter--${buttonPosition}`" @click="isActive = !isActive" data-html2canvas-ignore>
            <svg v-if="!isActive" width="24.000000pt" height="25.408451pt" viewBox="0 0 24.000000 25.408451" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,25.408451) scale(0.005634,-0.005634)" fill="#000000" stroke="none">
              <path d="M3510 4390 c-8 -5 -386 -380 -840 -832 l-825 -823 -169 -397 c-152 -357 -168 -400 -163 -438 9 -68 70 -117 133 -107 18 3 209 81 423 174 l391 168 832 832 833 833 0 50 0 50 -250 250 -251 250 -49 0 c-28 0 -57 -5 -65 -10z m243 -612 l-68 -68 -127 127 -128 128 67 67 68 68 127 -127 128 -128 -67 -67z m-580 -591 c-186 -186 -435 -432 -554 -547 l-216 -209 -127 121 -128 121 554 554 553 553 127 -127 128 -128 -337 -338z m-1003 -898 c0 -6 -273 -129 -278 -125 -2 2 20 57 104 255 l15 35 79 -79 c44 -44 80 -82 80 -86z"/>
              <path d="M625 2071 c-84 -10 -154 -36 -222 -80 -164 -106 -253 -269 -253 -459 0 -48 7 -114 15 -145 45 -175 177 -317 354 -381 53 -20 83 -21 636 -26 574 -5 580 -5 625 -27 71 -35 116 -79 147 -141 23 -47 28 -70 28 -132 0 -64 -4 -83 -29 -128 -33 -60 -76 -101 -139 -134 -41 -22 -53 -23 -377 -28 -364 -5 -365 -6 -400 -63 -36 -59 -20 -135 37 -173 26 -18 51 -19 368 -19 302 0 347 2 400 18 188 58 327 198 381 382 11 39 17 94 17 155 -1 238 -135 422 -377 518 -36 14 -119 17 -621 22 l-580 5 -56 26 c-111 52 -172 146 -173 264 -1 120 62 218 173 269 41 18 70 21 266 26 238 5 255 9 285 64 18 34 16 100 -4 131 -36 56 -54 60 -256 62 -102 0 -212 -2 -245 -6z"/>
              </g>
            </svg>
            <svg v-else style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
        </button>
        <div class="alp-crop-annotate__selection" ref="alpCropAnnotateSelection" :style="`opacity: ${isModal ? 0 : 1}; border:${selectionHasBorder ? '2px dashed grey' : 'none !important'}`"></div>
        <div v-show="isModal" class="alp-crop-annotate__modal">
            <button class="alp-crop-annotate__close-button" v-if="!isLoading" @click="closeModal">
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
              </svg>
            </button>
            <div v-if="isLoading" data-html2canvas-ignore class="alp-crop-annotate__loading-animation-wrapper">
              <div class="alp-crop-annotate__loading-circle" id="alpCropAnnotateLoadingCircle1"></div>
              <div class="alp-crop-annotate__loading-circle" id="alpCropAnnotateLoadingCircle2"></div>
              <div class="alp-crop-annotate__loading-circle" id="alpCropAnnotateLoadingCircle3"></div>
            </div>
            <SvgAnnotator 
              v-show="!isLoading" 
              @interface="getInterface" 
              :toolboxOpen="true"
              :buttonSize="buttonSize"
              :disableForTouchScreens="disableForTouchScreens"
              :fixedTools="fixedTools"
              :fontFamily="fontFamily"
              :iconColor="iconColor"
              :showPrint="showPrint"
              :showTooltips="showTooltips"
              :translations="translations"
              >
             <section style="color: black; width: fit-content; height: fit-content; margin: 0 auto; padding: 12px;" ref="selectionContent">
             </section>
            </SvgAnnotator>
        </div>
    </div>
    </div>
    
</template>

<script>
import SvgAnnotator from "svg-annotator";
import html2canvas from "html2canvas";

export default {
    components: {
        SvgAnnotator
    },
    props: {
      buttonPosition: {
        type: String,
        default: "mr", // possible values: tl, ml, bl, tr, mr, br
      },
      buttonSize: {
        type: Number,
        default: 28,
      },
      disableForTouchScreens: {
        type: Boolean,
        default: true,
      },
      fixedTools: {
        type: Boolean,
        default: false,
      },
      fontFamily: {
        type: String,
        default: "Helvetica"
      },
      iconColor: {
        type: String,
        default: "#4A4A4A"
      },
      showPrint: {
        type: Boolean,
        default: true,
      },
      showTooltips: {
        type: Boolean,
        default: true,
      },
      translationColor: {
        type: String,
        default: "Color"
      },
      translationColorAlpha: {
        type: String,
        default: "Color alpha"
      },
      translationDashedLines: {
        type: String,
        default: "Dashed lines"
      },
      translationFilled: {
        type: String,
        default: "Filled"
      },
      translationFontSize: {
        type: String,
        default: "Font size"
      },
      translationThickness: {
        type: String,
        default: "Thickness"
      },
      translationTitle: {
        type: String,
        default: "Annotations"
      },
      translationTooltipGroup: {
        type: String,
        default: "Select & Group"
      },
      translationTooltipDelete: {
        type: String,
        default: "Delete"
      },
      translationTooltipMove: {
        type: String,
        default: "Move"
      },
      translationTooltipResize: {
        type: String,
        default: "Resize"
      },
      translationTooltipBringToFront:{
        type: String,
        default: "Bring to front"
      },
      translationTooltipBringToBack: {
        type: String,
        default: "Bring to back"
      },
      translationTooltipDuplicate: {
        type: String,
        default: "Duplicate"
      },
      translationTooltipRedo: {
        type: String,
        default: "Redo last shape"
      },
      translationTooltipUndo: {
        type: String,
        default: "Undo last shape"
      },
      translationTooltipUngroup: {
        type: String,
        default: "Ungroup"
      },
      translationTooltipPdf: {
        type: String,
        default: "Save pdf"
      }
    },
    data(){
        return {
            annotatorInterface: {
                reset: () => {}
            },
            isActive: false,
            isDragging: false,
            isLoading: false,
            isModal: false,
            startX: 0,
            startY: 0,
            selection: null,
            selectionHasBorder: true,
            selectionWidth: 0,
            selectionHeight: 0,
            croppedCanvas: null,
            translations: {
              color: this.translationColor,
              colorAlpha: this.translationColorAlpha,
              dashedLines: this.translationDashedLines,
              filled: this.translationFilled,
              fontSize: this.translationFontSize,
              thickness: this.translationThickness,
              title: this.translationTitle,
              tooltipGroup: this.translationTooltipGroup,
              tooltipDelete: this.translationTooltipDelete,
              tooltipMove: this.translationTooltipMove,
              tooltipResize: this.translationTooltipResize,
              tooltipBringToFront: this.translationTooltipBringToFront,
              tooltipBringToBack: this.translationTooltipBringToBack,
              tooltipDuplicate: this.translationTooltipDuplicate,
              tooltipRedo: this.translationTooltipRedo,
              tooltipUndo: this.translationTooltipUndo,
              tooltipUngroup: this.translationTooltipUngroup,
              tooltipPdf: this.translationTooltipPdf,
            }
        }
    },
    mounted(){
        this.selection = this.$refs.alpCropAnnotateSelection;
    },
    methods: {
        captureSelection() {
            const selectionContent = this.$refs.selectionContent;
            let offsetY = 0;
            html2canvas(document.body, {
                allowTaint: true,
                useCORS: true,
                scale: 1,
                scrollX: window.pageXOffset,
                scrollY: window.pageYOffset,
            }).then((canvas) => {
                const imageData = canvas.getContext("2d", {willReadFrequently: true}).getImageData(this.startX, this.startY - offsetY, this.selectionWidth, this.selectionHeight);
                this.croppedCanvas = document.createElement("canvas");
                this.croppedCanvas.height = this.selectionHeight;
                this.croppedCanvas.width = this.selectionWidth;
                this.croppedCanvas.getContext("2d").putImageData(imageData, 0, 0);
                selectionContent.innerHTML = "";
                selectionContent.appendChild(this.croppedCanvas);
            }).finally(() => {
                this.isLoading = false;
            });
        },
        dragMouse(e){
            if(!this.isActive || this.isModal) return;
            this.selection.style.display = "initial";
            this.isDragging = true;
            this.startX = e.pageX;
            this.startY = e.pageY;
        },
        moveMouse(e) {
            if (!this.isDragging || !this.isActive || this.isModal) return;
            this.selectionWidth = this.startX < e.pageX ? e.pageX - this.startX : this.startX - e.pageX;
            this.selectionHeight = this.startY < e.pageY ? e.pageY - this.startY : this.startY - e.pageY;
            const left = this.startX < e.pageX ? this.startX - window.scrollX : e.pageX - window.scrollX;
            const top = this.startY < e.pageY ? this.startY - window.scrollY : e.pageY - window.scrollY;
            this.setSelection({
                height: this.selectionHeight,
                width: this.selectionWidth,
                top,
                left
            });
        },
        stopMouse(){
            if(this.isModal || this.selectionHeight === 0) return;
            this.isDragging = false;
            this.setSelectionBorder(false);
            this.isLoading = true;
            this.$nextTick(() => {
                this.captureSelection();
                this.isModal = true;
            })
        },
        setSelectionBorder(isVisible){
            this.selectionHasBorder = isVisible;
        },
        closeModal(){
            this.selection.style.display = "none";
            this.setSelection({
                top:0,
                left:0,
                height:0,
                width:0,
            });
            this.setSelectionBorder(true);
            this.resetAnnotator();
            const selectionContent = this.$refs.selectionContent;
            selectionContent.removeChild(this.croppedCanvas);
            this.isModal = false;
        },
        setSelection({top, left, width, height}) {
            this.selection.style.top = `${top}px`;
            this.selection.style.left = `${left}px`;
            this.selection.style.width = `${width}px`;
            this.selection.style.height = `${height}px`;
        },
        getInterface(payload) {
            this.$options.annotatorInterface = payload;
        },
        resetAnnotator() {
            this.$options.annotatorInterface.reset();
        }
    }

}
</script>

<style lang="scss">

.alp-crop-annotate {
    position: relative;
    &__close-button {
      background: none;
      border: none;
      cursor: pointer;
      height: 40px;
      opacity: 0.9;
      position: absolute;
      right: 3px;
      top: 3px;
      width: 40px;
      &:hover {
        opacity:1;
      }
    }
    &__starter {
        align-items:center;
        background: white;
        border-bottom: 1px solid grey;
        border-left: 1px solid grey;
        border-radius: 6px 0 0 6px;
        border-right: 1px solid white;
        border-top: 1px solid grey;
        display: flex;
        height: 40px;
        justify-content:center;
        position: fixed;
        width: 40px;
        cursor: pointer;
        &--tr {
          right: 0;
          top: 0;
          border-top: 1px solid white;
          border-right: 1px solid white;
          border-left: 1px solid grey;
          border-bottom: 1px solid grey;
          border-radius: 0 0 0 6px;
          &:hover {
            box-shadow: -6px 3px 6px rgba(0,0,0,0.1);
          }
        }
        &--mr {
          right:0;
          top: 50%;
          transform: translateY(-50%);
          border-bottom: 1px solid grey;
          border-left: 1px solid grey;
          border-radius: 6px 0 0 6px;
          border-right: 1px solid white;
          border-top: 1px solid grey;
          &:hover {
            box-shadow: -6px 0px 6px rgba(0,0,0,0.1);
          }
        }
        &--br {
          right: 0;
          bottom:0;
          border-top: 1px solid grey;
          border-left: 1px solid grey;
          border-right: 1px solid white;
          border-bottom: 1px solid white;
          border-radius: 6px 0 0 0;
          &:hover {
            box-shadow: -6px -3px 6px rgba(0,0,0,0.1);
          }
        }
        &--tl {
          top:0;
          left:0;
          border-top: 1px solid white;
          border-right: 1px solid grey;
          border-bottom: 1px solid grey;
          border-left: 1px solid white;
          border-radius: 0 0 6px 0;
          &:hover {
            box-shadow: 6px 3px 6px rgba(0,0,0,0.1);
          }
        }
        &--ml {
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          border-top: 1px solid grey;
          border-right: 1px solid grey;
          border-bottom: 1px solid grey;
          border-left: 1px solid white;
          border-radius: 0 6px 6px 0;
          &:hover {
            box-shadow: 6px 0px 6px rgba(0,0,0,0.1);
          }
        }
        &--bl {
          bottom:0;
          left:0;
          border-top: 1px solid grey;
          border-right: 1px solid grey;
          border-bottom: 1px solid white;
          border-left: 1px solid white;
          border-radius: 0 6px 0 0;
          &:hover {
            box-shadow: 6px -3px 6px rgba(0,0,0,0.1);
          }
        }
    }
    &__overlay {
        height: 100%;
        left: 0;
        position: fixed;
        top:0;
        width: 100%;
    }
    &__selection {
        border: 1px dashed grey;
        pointer-events: none;
        position: fixed;
    }
    &__loading-animation-wrapper {
      display: flex;
      flex-direction: row;
      gap: 12px;
      padding: 12px 0;
      width: 100px;
    }
    &__loading-circle {
      animation: alp-crop-annotate-loading-animation 1s infinite linear;
      border-radius: 50%;
      display: block;
      height: 18px;
      width: 18px;
      opacity: 0;
    }
    &__modal {
        background: white;
        border-radius: 8px;
        box-shadow: 0 12px 24px -12px rgba(0,0,0,0.1);
        left: 50%;
        max-height: calc(100vh - 48px);
        max-width: calc(100vw - 48px);
        overflow: auto;
        padding: 24px;
        position: absolute;
        top: 50%;
        transform: translate(-50%,-50%);
    }
}
  #alpCropAnnotateLoadingCircle2 {
      animation-delay: 0.3s !important;
    }
    #alpCropAnnotateLoadingCircle3 {
      animation-delay: 0.6s !important;
    }
       
    @keyframes alp-crop-annotate-loading-animation {
      0% {
        opacity: 0;
        border: 3px solid #6376DD;
        transform: scale(0.5,0.5);
      }
      50% {
        opacity: 1;
        border: 4px solid #6376DD;
        transform: scale(1,1);
      }
      100% {
        opacity: 0;
        border: 3px solid #6376DD;
        transform: scale(0.5,0.5);
      }
    }
</style>

<style lang="scss">
details {
  border-radius: 0 0 8px 8px;
}
.annotator-wrapper {
  all:unset;
}
summary {
  text-align: center;
  padding: 0 0 6px 0;
}
.hide-shape {
  display: none;
}
button.svg-annotator__button-tool {
  align-items: center;
  background: white;
  border-radius: 4px;
  border: 1px solid #ccc;
  border: 1px solid grey;
  cursor: pointer !important;
  display: flex;
  justify-content: center;
  opacity: 0.9;
  padding: 2px;
  &:hover {
    opacity: 1;
    border: 1px solid #aaa;
  }
  &--one-shot {
    background: grey;
    color: white;
    svg {
      background: grey;
    }
  }
  &--selected {
    background: rgb(175, 175, 175);
    border: 1px solid rgb(42, 42, 42);
    svg {
      background: rgb(175, 175, 175);
    }
    circle,
    rect {
      stroke: white;
    }
    path {
      fill: white;
    }
  }
}
button.svg-annotator__button-tool:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
button.svg-annotator__button--round {
  border-radius: 50% !important;
}
button.svg-annotator__button--delete {
  &--selected {
    background: rgba(255, 0, 0, 0.1);
    border: 1px solid red;
    svg {
      path {
        fill: red;
      }
    }
  }
}
.svg-annotator__tool-selection {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid #ccc;
  &--bottom {
    border-radius: 0 0 8px 8px;
  }
  &--top {
    border-radius: 8px 8px 0 0;
  }
}
.svg-annotator__tool-input {
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    background: white;
    padding: 3px;
    border-radius: 3px;
    width: 40px;
  }
  label {
    font-size: 0.6em;
  }
}
text {
  user-select: none;
}
summary {
  user-select: none;
  cursor: pointer;
}
.animated-circle-print {
  stroke-linecap: round !important;
  stroke-dasharray: 400;
  stroke-dashoffset: 0;
  animation: animate-circle 1s infinite linear;
}
@keyframes animate-circle {
  from {
    opacity: 0;
    stroke-dashoffset: 400;
  }
  to {
    opacity: 1;
    stroke-dashoffset: 0;
  }
}
.svg-annotator__tooltip-svg {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}
.svg-annotator__tooltip-svg .svg-annotator__tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}
.svg-annotator__tooltip-svg .svg-annotator__tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}
.svg-annotator__tooltip-svg:hover .svg-annotator__tooltiptext {
  visibility: visible;
  opacity: 1;
}
.draw--free {
  /* circle cursor for freehand draw mode */
  cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABg2lDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TpSIVh2YQcchQnSyIijhKFYtgobQVWnUwufQLmjQkKS6OgmvBwY/FqoOLs64OroIg+AHi6OSk6CIl/i8ptIjx4Lgf7+497t4BQrPKNKtnAtB020wn4lIuvyqFXhGGiAhCiMnMMpKZxSx8x9c9Any9i/Es/3N/jgG1YDEgIBHPMcO0iTeIZzZtg/M+scjKskp8Tjxu0gWJH7muePzGueSywDNFM5ueJxaJpVIXK13MyqZGPE0cVTWd8oWcxyrnLc5atc7a9+QvDBf0lQzXaY4ggSUkkYIEBXVUUIWNGK06KRbStB/38Q+7/hS5FHJVwMixgBo0yK4f/A9+d2sVpya9pHAc6H1xnI9RILQLtBqO833sOK0TIPgMXOkdf60JzH6S3uho0SNgcBu4uO5oyh5wuQMMPRmyKbtSkKZQLALvZ/RNeSByC/Sveb2193H6AGSpq+Ub4OAQGCtR9rrPu/u6e/v3TLu/H5C7crM1WjgWAAAABmJLR0QAqwB5AHWF+8OUAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5gwUExIUagzGcQAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAABfSURBVBjTldAxDoNQDIPhL0+q1L33P1AvAhN7xfK6WAgoLfSfrNiykpQtE+7RLzx2vgF9D3o8lWDmn1QVVMP0LZQGmNtqp1/cmou0XHdG/+sYeGZwFBqPCub8rkcvvAGvsi1VYarR8wAAAABJRU5ErkJggg==)
      5 5,
    auto;
}
.svg-annotator__no-shadow {
  * {
    box-shadow: none !important;
  }
}
</style>