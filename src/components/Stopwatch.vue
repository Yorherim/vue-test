<template>
  <div class="stopwatch">
    <div class="stopwatch__time stopwatch__time_active">0:00</div>
    <div class="stopwatch__divider stopwatch__divider_active"></div>
    <div class="stopwatch__buttons">
      <Button type="pause" />
      <Button type="pause" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  components: { Button },
};
</script>

<style scoped>
.stopwatch {
  width: 225px;
  height: 120px;
  background: var(--gray);
  padding: 22px 0 20px;
}

.stopwatch__time {
  text-align: center;
  font-size: 22px;
  block-size: 17px;
  line-height: 17px;
}
.stopwatch__time_active {
  color: var(--active);
}
.stopwatch__time_disable {
  color: var(--disable);
}

.stopwatch__divider {
  height: 1px;
  margin: 20px 0;
}
.stopwatch__divider_active {
  background: var(--active);
}
.stopwatch__divider_disable {
  background: var(--disable);
}

.stopwatch__buttons {
  display: flex;
  justify-content: center;
  gap: 50px;
}
</style>
