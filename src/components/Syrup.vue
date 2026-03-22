<template>
  <div>
    <div class="baseSyrup" :style="syrupStyle"></div>
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

const syrupStyle = computed(() => ({
  backgroundColor: props.syrup.color || "transparent"
}));
</script>

<style lang="scss" scoped>
.baseSyrup {
  transform: translateY(400%);
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
}
</style>