<template lang="pug">
button.button {{ text }}
</template>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<style scoped lang="scss">
@use '~/assets/styles/mixins' as m;
.button {
	cursor: pointer;
	background-color: var(--primary-color);
	border-radius: var(--border-radius-s);
	color: #fff;
	transition: var(--transition-fast);
	@include m.text-nowrap;
}

@media (hover: hover) {
  button:hover {
    background-color: var(--primary-dark-color);
		color: black;
  }
}
</style>
