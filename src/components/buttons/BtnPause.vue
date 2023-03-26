<template>
  <button class="btn-pause"></button>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-pause {
  height: 20px;
  width: 10px;
  display: flex;
  justify-content: center;
}
.btn-pause::before {
  content: "";
  position: absolute;
  height: inherit;
  width: 4px;
  background: var(--gray);
}
</style>
