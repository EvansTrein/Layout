<template lang="pug">
header.header
	div.header__topBar
		div.header__topBarItem
			MarkerSvg.header__topBarIcon
			p г. Красноярск, ул. Телевизорная 1, стр. 14, оф. 204
		a.header__topBarItem(href="tel:+73912095757")
			PhoneSvg.header__topBarIcon
			p +7 (391) 209 57-57
		a.header__topBarItem(href="tel:+73912155433")
			PhoneSvg.header__topBarIcon
			p +7 (391) 215 54-33
		a.header__topBarItem(href="mail:los-bio@mail.ru")
			MailSvg.header__topBarIcon
			p los-bio@mail.ru
		div.header__topBarItem
			CallbackSvg.header__callback
			p Заказать звонок
	
	hr.header__line
	
	div.header__menu
		a.header__logoLink(href="/")
			LogoSvg.header__logo
		nav.header__nav
			a.header__navItem(href="/about") О компании
			a.header__navItem(href="/project") Проекты
			a.header__navItem(href="/catalog") Каталог
			a.header__navItem(href="/about/contacts") Контакты
		Button.header__navBut(text="Получить КП")
</template>

<script setup lang="ts">
import MarkerSvg from '@public/svg/marker.svg';
import PhoneSvg from '@public/svg/phone.svg';
import MailSvg from '@public/svg/mail.svg';
import CallbackSvg from '@public/svg/callback.svg';
import LogoSvg from '@public/svg/logo.svg';

import Button from '@shared/buttons/button.vue';
</script>

<style scoped lang="scss">
@use '~/assets/styles/vars' as v;
@use '~/assets/styles/mixins' as m;

.header {
  width: 100%;
  padding: 10px 0;

  &__line {
    border: 0;
    height: 2px;
    background-color: var(--white-13);
  }

  &__topBar {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    font-size: v.$topBarFontSize;
    color: var(--white-50);
    @include m.center65w;

    @media (max-width: v.$smBrp) {
      justify-content: center;
    }

    &Item {
      display: flex;
      align-items: center;

      p {
        transition: var(--transition-fast);
        color: var(--white-50);
        cursor: pointer;
        @include m.text-nowrap;
      }
    }

    &Item:first-child {
      @include m.hide(v.$xxlBrp);
    }

    &Item:last-child {
      @include m.hide(v.$mdBrp);
    }

    &Item:nth-child(2) {
      @include m.hide(v.$smBrp);
    }

    &Icon {
      fill: var(--primary-color);
      color: var(--primary-color);
      margin-right: 5px;
      min-width: 24px !important;
      max-width: 24px !important;
      min-height: 24px !important;
      max-height: 24px !important;
    }
  }

  &__callback {
    stroke: var(--primary-color);
    color: rgba(255, 255, 255, 0);
    stroke-width: 3;
    margin-right: 5px;
    min-height: 24px;
    min-width: 24px;
  }

  &__logoLink {
    min-width: 200px;
    width: 20%;
    display: inline-block;
  }

  &__logo {
    width: 100%;
    height: auto;
    color: var(--primary-color-80);
    transition: var(--transition-fast);
  }

  &__menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    @include m.center65w;

    @media (max-width: v.$smBrp) {
      justify-content: center;
    }
  }

  &__nav {
    // @include m.debug;
    display: flex;
    gap: 4vw;
    @include m.hide(v.$smBrp);
  }

  &__navItem {
    @include m.text-nowrap;
    transition: var(--transition-fast);
    position: relative;

    &:first-child {
      @include m.hide(v.$xlBrp);
    }

    &:last-child {
      @include m.hide(v.$mdBrp);
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      top: 25px;
      width: 100%;
      height: 2px;
      background-color: var(--white-50);
      opacity: 0;
      transition: opacity var(--transition-medium);
    }

    &:hover::after {
      opacity: 1;
    }
  }

  &__navBut {
    padding: 0.6rem 1.3rem;

    @media (max-width: v.$mdBrp) {
      padding: 0.4rem 0.5rem;
    }
  }
}

@media (hover: hover) {
  p:hover {
    color: var(--primary-color);
  }
  .header__logo:hover {
    color: var(--white-50);
  }
}
</style>
