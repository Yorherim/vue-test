<template>
  <div class="gray-cart">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.gray-cart {
  width: 225px;
  height: 120px;
  background: var(--gray);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
