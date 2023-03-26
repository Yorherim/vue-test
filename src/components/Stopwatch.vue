<template>
  <div class="stopwatch">
    <div
      class="stopwatch__time"
      :class="
        this.$data.statusTimer === 'pause' || this.$data.statusTimer === 'stop'
          ? 'disable-color'
          : ''
      "
    >
      {{ secondsTransformToHh_mm_ss($data.seconds) }}
    </div>

    <div
      class="stopwatch__divider"
      :class="
        this.$data.statusTimer === 'pause' || this.$data.statusTimer === 'stop'
          ? 'disable-background-color'
          : ''
      "
    ></div>

    <div class="stopwatch__buttons">
      <BtnPlay
        :class="{
          'right-indent-play': true,
          'disable-background-color':
            this.$data.statusTimer === 'pause' ||
            this.$data.statusTimer === 'stop'
              ? 'disable-background-color'
              : '',
        }"
        v-if="$data.statusTimer === 'pause' || $data.statusTimer === 'stop'"
        @click="startTimer"
      />
      <BtnPause
        :class="{
          'right-indent-pause': true,
          'disable-background-color':
            this.$data.statusTimer === 'pause' ||
            this.$data.statusTimer === 'stop'
              ? 'disable-background-color'
              : '',
        }"
        v-else
        @click="pauseTimer"
      />

      <BtnStop
        @click="stopTimer"
        :class="
          this.$data.statusTimer === 'pause' ||
          this.$data.statusTimer === 'stop'
            ? 'disable-background-color'
            : ''
        "
      />
    </div>
  </div>
</template>

<script>
import BtnPause from "@/components/buttons/BtnPause.vue";
import BtnPlay from "@/components/buttons/BtnPlay.vue";
import BtnStop from "@/components/buttons/BtnStop.vue";

import { secondsTransformToHh_mm_ss } from "@/utils/seconds-transform-to-hh_mm_ss";

export default {
  components: { BtnPause, BtnPlay, BtnStop },
  data() {
    return {
      /**
       * status timer
       * @type {("working" | "pause" | "stop")}
       */
      statusTimer: "stop",
      /**
       * interval
       * @type {(number | null)}
       */
      interval: null,
      /**
       * current seconds from start stopwatch
       * @type {number}
       */
      seconds: 0,
    };
  },

  methods: {
    secondsTransformToHh_mm_ss,
    startTimer() {
      this.$data.statusTimer = "working";
      if (!this.interval) {
        this.interval = setInterval(this.incrementSeconds, 1000);
      }
    },
    pauseTimer() {
      this.$data.statusTimer = "pause";
    },
    stopTimer() {
      clearInterval(this.$data.interval);
      this.$data.statusTimer = "stop";
      this.$data.seconds = 0;
      this.$data.interval = null;
    },
    incrementSeconds() {
      if (this.$data.statusTimer !== "pause") {
        this.seconds++;
      }
    },
  },
};
</script>

<style scoped>
.stopwatch {
  width: 100%;
  height: 100%;
  padding: 22px 0 20px;
}

.stopwatch__time {
  text-align: center;
  font-size: 22px;
  block-size: 17px;
  line-height: 17px;
  color: var(--active);
}

.stopwatch__divider {
  height: 1px;
  margin: 20px 0;
  background: var(--active);
}

.stopwatch__buttons {
  display: flex;
  justify-content: center;
}

.right-indent-pause {
  margin-right: 55px;
}
.right-indent-play {
  margin-right: 48px;
}

.disable-color {
  color: var(--disable);
}
.disable-background-color {
  background: var(--disable);
}
</style>
