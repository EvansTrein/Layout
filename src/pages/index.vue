<template lang="pug">
Header
main.wrap
	Slider

</template>

<script setup lang="ts">
import Header from '@widgets/Header.vue';
import Slider from '@widgets/Slider.vue';
</script>

<style scoped lang="scss">
@use '~/assets/styles/mixins' as m;
.wrap {
	@include m.center75w;
}

</style>
