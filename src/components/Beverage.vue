<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />

    <Contents>
      <template v-slot:top>
        <Creamer v-if="hasCreamer" :creamer="creamer" />
      </template>

      <template v-slot:mid>
        <!-- Only show syrup if it exists -->
        <Syrup v-if="hasSyrup" :syrup="syrup" />
      </template>

      <template v-slot:bottom>
        <Base />
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

type Props = {
  isIced: boolean;
  creamer: string;
  syrup: string;
};

const props = defineProps<Props>();

const hasCreamer = computed(() => props.creamer !== "No Creamer");
const hasSyrup = computed(() => props.syrup !== "No Syrup");
</script>
