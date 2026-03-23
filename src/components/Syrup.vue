<template>
  <div>
    <div class="baseSyrup" :style="baseStyle"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  syrup: {
    id: string;
    name: string;
    color: string;
  };
}>();

const baseStyle = computed(() => ({
  backgroundColor: props.syrup.color,
  opacity: props.syrup.name === "No Syrup" ? 0 : 0.7
}));
</script>

<style lang="scss" scoped>
.baseSyrup {
  background-color: #c6c6c6;
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
}
</style>