<template lang="pug">
section.adv(v-if="advStore.data.length > 0")
	h2.adv__header Наши преимущества
	div.adv__content
		div.adv__element(v-for="item in advStore.data" :key="item.id")
			div.adv__wrap
				img.adv__icon(:src="item.icon")
				h3.adv__title {{ item.title }}
			p.adv__desc {{ item.description }}

</template>

<script setup lang="ts">
import { useAdvantageStore } from './../entities/advantage/store';

const advStore = useAdvantageStore();

onMounted(() => {
  if (advStore.data.length === 0) {
    advStore.init();
  }
});
</script>

<style scoped lang="scss">
@use '~/assets/styles/vars' as v;
@use '~/assets/styles/mixins' as m;

.adv {
  display: flex;
  flex-direction: column;
  width: 100%;
	// @include m.debug;
	
  &__header {
		text-wrap: nowrap;
    font-size: clamp(1.6rem, 2.5vw, 3.5rem);
    font-weight: bold;
		padding-bottom: 2rem;

		@media (max-width: v.$mdBrp) {
			text-align: center;
    }
  }
	
  &__content {
		display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    justify-content: center;

		@media (max-width: v.$mdBrp) {
			grid-template-columns: 1fr;
    }
  }
	
  &__element {
		background-color: var(--black-100);
    border-radius: var(--border-radius-xl);
    display: flex;
		flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
	
	&__wrap {
		display: flex;
		width: 100%;
		gap: 1.2rem;
		align-items: center;
	}
	
	&__icon {
		width: 15%;
		height: 90%;
		min-width: 80px;
	}
	
	&__title {
		min-width: 170px;
		text-wrap: balance;
    font-size: clamp(1.4rem, 1.8vw, 2.1rem);
    font-weight: bold;
	}
	
	&__desc {
		text-wrap: pretty;
    font-size: clamp(0.95rem, 1.1vw, 1.4rem);
	}
}
</style>
