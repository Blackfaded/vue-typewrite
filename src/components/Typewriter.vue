<template>
  <div class="typewriter">
    <span
      v-html="displayText"
      class="writer"
      :style="textStyle"
    >

    </span>
    <span
      class="caret"
      :style="caretStyle"
      v-html="'&nbsp'"
    ></span>
  </div>

</template>

<script>
export default {
  name: 'v-type-writer',
  props: {
    text: {
      type: String,
      required: true,
      validator: text => text.length
    },
    typeDelay: {
      type: Number,
      default: 0
    },
    typeSpeed: {
      type: Number,
      default: 150
    },
    caretColor: {
      type: String,
      default: '#101010'
    },
    textColor: {
      type: String,
      default: 'inherit'
    }
  },
  data() {
    return {
      currentStep: 0,
      displayText: '',
      writeInterval: null,
      typeDelayInterval: null
    };
  },
  computed: {
    endstepp() {
      return this.text.length;
    },
    textStyle() {
      return {
        color: this.textColor
      };
    },
    caretStyle() {
      return {
        'background-color': this.caretColor,
        width: '0.10em'
      };
    }
  },
  methods: {
    write() {
      this.typeDelayInterval = setTimeout(() => {
        this.writeInterval = setInterval(() => {
          this.currentStep++; // eslint-disable-line
          this.displayText = this.text.slice(0, this.currentStep);
          if (this.currentStep >= this.endstepp) {
            clearInterval(this.writeInterval);
          }
        }, this.typeSpeed);
      }, this.typeDelay);
    },
    rewrite() {
      this.reset();
      this.write();
    },
    reset() {
      clearInterval(this.writeInterval);
      clearTimeout(this.typeDelayInterval);
      this.currentStep = 0;
      this.displayText = '';
    }
  },
  mounted() {
    this.write();
  },
  beforeDestroy() {
    this.reset();
  },
  watch: {
    text() {
      this.rewrite();
    }
  }
};
</script>

<style lang="scss" scoped>
.typewriter {
  .writer {
    white-space: pre;
  }
  .caret {
    display: inline-block;
    font-size: inherit;
    animation: blink-caret 0.75s step-end infinite;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
