<template lang="pug">
section(v-if="projectStore.data.length > 0")
	h2.projects__header Проекты
	div.projects__content
		div.projects__element(v-for="(item, index) in projectStore.data")
			NuxtLink.projects__link(:to="`/project/${item.slug}`")
				img.projects__photo(:src="item.photos[0]")
				h3.projects__title Проект {{ item.id }}
				div.projects__desc {{ item.allDescription[0] }}
				hr.projects__line 
				div.projects__works Тип работы: {{ item.works }}
				//- hr.projects__line
				div.projects__customer Заказчик: {{ item.title }}
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

<style scoped lang="scss">
@use '~/assets/styles/vars' as v;
@use '~/assets/styles/mixins' as m;

// .is-last {
//   grid-column: span 3;
//   max-width: 70%;
//   margin: 0 auto;
// }

.projects {
  display: flex;
  flex-direction: column;
  width: 100%;

  &__link {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
    border-radius: inherit;
    gap: 1rem;
  }

  &__header {
    text-wrap: nowrap;
    font-size: clamp(1.6rem, 2.5vw, 3.5rem);
    font-weight: bold;
    padding-bottom: 2rem;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    @media (max-width: v.$xlBrp) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: v.$mdBrp) {
      grid-template-columns: 1fr;
    }
  }

  &__element {
    background-color: var(--black-50);
    border-radius: var(--border-radius-xl);
    transition: var(--transition-fast);
    display: flex;
    flex-direction: column;
    min-height: 400px;
    padding: 1rem;
  }

  &__photo {
    align-self: center;
    border-radius: var(--border-radius-xl);
    min-width: 200px;
    max-width: 400px;
    max-height: 200px;
    width: 100%;
  }

  &__title {
    min-width: 170px;
    text-wrap: balance;
    font-size: clamp(1.2rem, 1.5vw, 1.8rem);
    font-weight: bold;
  }

  &__desc {
    text-wrap: pretty;
    font-size: clamp(0.8rem, 0.9vw, 1.1rem);
    flex-grow: 3;
    max-height: 150px;
    overflow: auto;
    // @include m.debug;
  }

  &__line {
    width: 100%;
    border: 1px solid var(--white-50);
  }

  &__works {
    align-self: flex-start;
    font-size: clamp(0.7rem, 0.85vw, 1.1rem);
  }

  &__customer {
    align-self: flex-start;
    margin-top: auto;
    font-size: clamp(0.7rem, 0.85vw, 1.1rem);
  }
}

@media (hover: hover) {
  .projects__element:hover {
    background-color: var(--white-13);
    transform: scale(0.9);
  }
}
</style>
