<template lang="pug">
div.project-page
	h1.b-project__title 
		| Продукт 
		span {{ slug }}
	p.b-project__description Описание продукта
	nuxt-link.b-project__back(to="/") Вернуться на главную
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
const slug = route.params.slug;
</script>

<style scoped lang="scss"></style>
