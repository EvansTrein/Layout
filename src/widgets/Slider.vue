<template lang="pug">
//- section(v-for="slide in slideStore.data" :key="slide.id")
//- 	h2 {{ slide.id }}
//- 	h2 {{ slide.title }}
//- 	img(:src="slide.image")
//- 	h2 {{ slide.description }}
</template>

<script setup lang="ts">
import { useSlideStore } from './../entities/slide/store';

const slideStore = useSlideStore();


// onMounted(() => {
//   if (slideStore.data.length === 0) {
//     slideStore.init();
//   }
// });
</script>

<style scoped lang="scss"></style>
