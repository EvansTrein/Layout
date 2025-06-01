<template lang="pug">
section(v-if="slideStore.data.length > 0")
	div.slide
		div.slide__info
			h2.slide__title {{ slideStore.data[active].title }}
			span.slide__desc {{ slideStore.data[active].description }}
			Button.slide__but(text="Перейти в каталог")
		img.slide__img(:src="slideStore.data[active].image")
	div.slide__bar
		span.slide__barEl(
      :class="{ 'slide__barEl_active': active === 0 }",
      @click="active = 0"
    )
		span.slide__barEl(
      :class="{ 'slide__barEl_active': active === 1 }",
      @click="active = 1"
    )
		span.slide__barEl(
      :class="{ 'slide__barEl_active': active === 2 }",
      @click="active = 2"
    )
</template>

<script setup lang="ts">
import Button from '@shared/buttons/button.vue';
import { useSlideStore } from './../entities/slide/store';

const slideStore = useSlideStore();
const active = ref(0);

// const interval = setInterval(() => {
//   active.value = (active.value + 1) % 3;
// }, 5000);

onMounted(() => {
  if (slideStore.data.length === 0) {
    slideStore.init();
  }
});

// onUnmounted(() => clearInterval(interval));
</script>

<style scoped lang="scss">
@use '~/assets/styles/vars' as v;
@use '~/assets/styles/mixins' as m;

.slide {
  display: flex;
  width: 100%;
  align-items: center;
  height: 600px;
	margin-top: 1.5rem;
	
  @media (max-width: v.$smBrp) {
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  &__info {
		display: flex;
    flex-direction: column;
    gap: 4rem;
    cursor: default;
    width: 60%;
    max-width: 800px;
    overflow: hidden;

    @media (max-width: v.$smBrp) {
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
	
  &__title {
		text-wrap: balance;
    font-size: clamp(1.4rem, 3.2vw, 4.5rem);
    font-weight: bold;
		min-height: 250px;
		max-height: 250px;
  }
	
  &__desc {
		text-wrap: balance;
    max-height: 200px;
    min-height: 200px;
    max-width: 600px;
    font-size: clamp(0.8rem, 1vw, 1.5rem);
		// @include m.debug;
  }

  &__but {
    padding: 0.6rem 1.3rem;
    max-width: 200px;
  }

  &__img {
    width: 40%;
    max-width: 600px;
    min-height: 40%;
    @include m.hide(v.$smBrp);
  }

  &__bar {
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }

  &__barEl {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--white-50);
    cursor: pointer;
    transition: var(--transition-fast);

    &_active {
      background-color: var(--primary-dark-color);
      transform: scale(1.4);
    }

    &:hover:not(&_active) {
      background-color: var(--primary-dark-color);
    }
  }
}
</style>
