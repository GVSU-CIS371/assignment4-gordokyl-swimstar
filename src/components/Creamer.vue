<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  creamer: {
    id: string;
    name: string;
    color: string;
  };
}>();

const frothStyle = computed(() => ({
  backgroundColor: props.creamer.color || "transparent",
  opacity: props.creamer.name === "No Cream" ? 0 : 1
}));

const foamStyle = computed(() => ({
  backgroundColor: props.creamer.color || "#e4e0d2"
}));
</script>