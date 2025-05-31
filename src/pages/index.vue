<template lang="pug">
Header
main.wrap
	Slider
	Advantage

</template>

<script setup lang="ts">
import Header from '@widgets/Header.vue';
import Slider from '@widgets/Slider.vue';
import Advantage from '@widgets/Advantage.vue';
</script>

<style scoped lang="scss">
@use '~/assets/styles/mixins' as m;
.wrap {
	display: flex;
	flex-direction: column;
	gap: 5rem;
	@include m.center75w;
}

</style>
