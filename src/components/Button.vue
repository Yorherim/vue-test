// TODO: сделать каждую кнопку отдельным компонентом
<template>
  <button class="btn btn-pause" v-if="$props.type === 'pause'">
    <div class="btn-pause__divider"></div>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: "play",
    },
  },
};
</script>

<style scoped>
.btn {
  height: 20px;
  color: var(--active);
  border: none;
}
.btn:hover {
  cursor: pointer;
}

.btn-pause {
  width: 10px;
  display: flex;
  justify-content: center;
}
.btn-pause_active {
  background: var(--active);
}
.btn-pause_disable {
  background: var(--disable);
}

.btn-pause__divider {
  width: 4px;
  height: inherit;
  background: var(--gray);
}
</style>
