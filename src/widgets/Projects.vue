<template lang="pug">
div(v-if="projectStore.data.length > 0") {{ projectStore.data }}
</template>

<script setup lang="ts">
import { useProjectStore } from './../entities/project/store';

const projectStore = useProjectStore();

onMounted(() => {
  if (projectStore.data.length === 0) {
    projectStore.init();
  }
});

</script>

<style scoped lang="scss"></style>