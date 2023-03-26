<template>
  <button class="btn-plus"></button>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-plus {
  width: 20px;
  height: 20px;
  background: var(--gray);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.btn-plus:before {
  content: "";
  position: absolute;
  width: 3px;
  height: inherit;
  background: var(--disable);
}
.btn-plus:after {
  content: "";
  position: absolute;
  width: inherit;
  height: 3px;
  background: var(--disable);
}
</style>
