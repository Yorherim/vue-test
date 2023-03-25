<template>
  <div class="container">
    <div class="stop-watchers">
      <Stopwatch />
    </div>
  </div>
</template>

<script>
import Stopwatch from "@/components/Stopwatch.vue";

export default {
  components: { Stopwatch },
  data() {
    return {
      stopWatchers: [
        { id: 1, currentTime: Date.now() },
        { id: 2, currentTime: Date.now() },
      ],
    };
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
</style>
