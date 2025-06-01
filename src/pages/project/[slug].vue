<template lang="pug">
Header
section {{ projectStore.project }}
//- nuxt-link.b-project__back(to="/") Вернуться на главную
Footer
</template>

<script setup lang="ts">
import Header from '@widgets/Header.vue';
import Footer from '@widgets/Footer.vue';

import Button from '@shared/buttons/button.vue';

import { useRoute } from 'vue-router';
import { useProjectStore } from './../../entities/project/store';
const route = useRoute();

const projectStore = useProjectStore();


onMounted(() => {
	projectStore.getProject(route.params.slug)
});
</script>

<style scoped lang="scss"></style>
