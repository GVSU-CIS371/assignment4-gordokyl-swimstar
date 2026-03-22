<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />

    <Contents>
      <template #top>
        <Creamer v-if="hasCreamer" :creamer="creamer" />
      </template>

      <template #mid>
        <Syrup v-if="hasSyrup" :syrup="syrup" />
      </template>

      <template #bottom>
        <Base :base="base" />
      </template>
    </Contents>
  </Mug>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

type BeverageOption = {
  id: string;
  name: string;
  color: string;
};

type Props = {
  isIced: boolean;
  base: BeverageOption;
  creamer: BeverageOption;
  syrup: BeverageOption;
};

const props = defineProps<Props>();

const hasCreamer = computed(() => props.creamer.name !== "No Cream");
const hasSyrup = computed(() => props.syrup.name !== "No Syrup");
</script>