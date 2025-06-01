<template lang="pug">
div.app(v-if="projectStore.isLoad")
	Header
	section.app__wrap
		div.slug__menu
			p Главная
			p •
			p.slug__menu-two Проекты
			p •
			p 
				span {{ projectStore.project.title }}
		div.slug__content 
			div.slug__project
				h1.slug__title {{ projectStore.project.title }}
				div.slug__desc-wrap
					ul.slug__desc(v-for="(item, index) in projectStore.project.allDescription" :key="index")
						li {{ item }}
				div.slug__choose-wrap
					h2 ПОЧЕМУ КЛИЕНТЫ ВЫБИРАЮТ ЛОС:
					ul.slug__choose(v-for="(item, index) in mainStore.whyСhoose" :key="index")
							li
								Ellipse.slug__choose-icon
								| {{ item }}
				div.slug__choose-wrap
					h2 ТАКЖЕ ЛОС ВЫБИРАЮТ ЗА:
					ul.slug__chooseMap-wrap(v-for="(value, key, index) in mainStore.whyChooseMap" :key="index")
						div.slug__chooseMap-icons
							Ellipse.slug__chooseMap-icon
							span.slug__chooseMap-index {{ index + 1 }}
						div.slug__chooseMap-text
							h2 {{ key }}
							p {{ value }}
			div.slug__images
				div.slug__images-wrap
					img.slug__images-one(:src="projectStore.project.photos[active]")
					Button.slug__but(text="Следующее фото" @click="nextPhoto")
				div.slug__images-others
					img(v-for="(item, index) in projectStore.project.photos" :key="index" :src="item")
	Footer
//- div {{ projectStore.project }}
//- nuxt-link.b-project__back(to="/") Вернуться на главную
</template>

<script setup lang="ts">
import Header from '@widgets/Header.vue';
import Footer from '@widgets/Footer.vue';
import Ellipse from '@public/svg/ellipse.svg';

import Button from '@shared/buttons/button.vue';

import { useRoute } from 'vue-router';
import { useProjectStore } from './../../entities/project/store';
import { useMainStore } from './../../app/store';
const route = useRoute();

const projectStore = useProjectStore();
const mainStore = useMainStore();

const active = ref(0);

const nextPhoto = () => {
  if (!projectStore.project || !projectStore.project.photos.length) return;
  active.value = (active.value + 1) % projectStore.project.photos.length;
};

onMounted(() => {
  projectStore.getProject(route.params.slug);
});
</script>

<style scoped lang="scss">
@use '~/assets/styles/vars' as v;
@use '~/assets/styles/mixins' as m;

.slug {
  &__menu {
    margin-top: 20px;
    display: flex;
    gap: 1.5rem;

    span {
      color: var(--white-50);
    }

    &-two {
      @include m.hide(v.$smBrp);
    }
  }

  &__desc-wrap {
    // @include m.debug2;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__desc {
    // @include m.debug;
    li {
      text-wrap: pretty;
      font-size: clamp(0.9rem, 1vw, 1.2rem);
    }
  }

  &__content {
    display: flex;

    @media (max-width: v.$xlBrp) {
      flex-direction: column-reverse;
      align-items: center;

      .slug__project {
        width: 80%;
      }

      .slug__images {
        width: 80%;
      }
    }
  }

  &__choose-wrap {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    // @include m.debug2;
    h2 {
      text-wrap: balance;
      font-size: clamp(1.1rem, 1.2vw, 1.6rem);
    }
  }

  &__choose {
    li {
      // @include m.debug;
      display: flex;
      align-items: center;
      text-wrap: pretty;
      font-size: clamp(1rem, 1.1vw, 1.5rem);
      color: var(--white-50);
    }

    &-icon {
      color: var(--primary-color-dark);
      padding: 2px;
      margin-right: 15px;
      min-width: 24px !important;
      max-width: 24px !important;
      min-height: 24px !important;
      max-height: 24px !important;
    }
  }

  &__chooseMap-wrap {
    display: flex;
    font-size: clamp(1rem, 1.1vw, 1.5rem);
    margin-bottom: 1rem;
  }

  &__chooseMap {
    &-icon {
      color: var(--primary-color-dark);
      margin-top: 4px;
      min-width: 28px !important;
      max-width: 28px !important;
      min-height: 28px !important;
      max-height: 28px !important;
    }

    &-text {
      text-wrap: pretty;
      font-size: clamp(0.9rem, 1vw, 1.2rem);

      p {
        color: var(--white-50);
      }
    }

    &-icons {
      position: relative;
      margin-right: 15px;
      width: 28px;
      height: 28px;
    }

    &-index {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin-top: 4px;
      z-index: 5;
      font-weight: bold;
      font-size: 0.9rem;
      color: var(--primary-color);
    }
  }

  &__project {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 60%;
    background-color: var(--primary-color-dark);
    border-radius: var(--border-radius-l);
    padding: 1.5rem 3rem;
  }

  &__but {
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    z-index: 10;
    padding: 0.6rem 1rem;
  }

  &__images {
    width: 40%;
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;
    gap: 0.2rem;
    min-width: 400px;
    max-height: 450px;

    &-wrap {
      position: relative;
      width: 100%;
      max-height: 75%;
    }

    &-one {
      border-radius: var(--border-radius-l);
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    &-others {
      display: flex;
      overflow-x: auto;
      overflow-y: hidden;
      gap: 0.3rem;
      max-height: 30%;
      scrollbar-color: var(--white-50) transparent;

      img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: var(--border-radius-s);
        flex-shrink: 0;
        flex-grow: 1;
      }
    }
  }

  &__title {
    text-wrap: nowrap;
    font-size: clamp(1.2rem, 2.2vw, 2.8rem);
    font-weight: bold;
  }
}
</style>
