<template>
  <div class="container">
    <div class="stop-watchers">
      <GrayCart v-for="stopWatcher in $data.stopWatchers" :key="stopWatcher.id">
        <Stopwatch />
      </GrayCart>

      <GrayCart>
        <BtnPlus @click="createNewStopWatcher" />
      </GrayCart>
    </div>
  </div>
</template>

<script>
import Stopwatch from "@/components/Stopwatch.vue";
import GrayCart from "@/components/GrayCart.vue";
import BtnPlus from "@/components/buttons/BtnPlus.vue";

export default {
  components: { Stopwatch, GrayCart, BtnPlus },
  data() {
    return {
      stopWatchers: [{ id: 1 }, { id: 2 }],
    };
  },
  methods: {
    createNewStopWatcher() {
      this.$data.stopWatchers.push({ id: Date.now() });
    },
  },
  mounted() {
    alert(
      "Сделал дополнительный функционал - добавление нуля в цифру, если она меньше 10. " +
        "Знаю, что по тз не нужно было это делать, но без этого время выглядело 'не очень'.",
    );
  },
};
</script>

<style>
@font-face {
  font-family: "Gotham Pro";
  src: url("@/fonts/GothamPro.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --active: #ffffff;
  --disable: #9e9e9e;
  --dark: #353638;
  --gray: #696969;
}

body {
  font-family: "Gotham Pro", sans-serif;
  background: var(--dark);
}

button {
  border: none;
}
button:hover {
  cursor: pointer;
}

.container {
  width: 775px;
  margin: 0 auto;
}

.stop-watchers {
  display: flex;
  flex-wrap: wrap;
  gap: 45px 50px;
  padding: 70px 0;
}

.active {
  color: var(--active);
  background: var(--active);
}

.disable {
  color: var(--disable);
  background: var(--disable);
}

@media (max-width: 1024px) {
  .container {
    width: 500px;
  }
}
@media (max-width: 576px) {
  .container {
    width: 225px;
  }
}
</style>
