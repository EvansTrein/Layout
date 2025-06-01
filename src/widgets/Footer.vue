<template lang="pug">
footer.footer
	div.footer__wrpap
		div.footer__requisites
			LogoSvg.footer__logo
			h4.footer__legal {{ mainStore.requisites.name }}
			h4.footer__tin-kpp
				p
					span ИНН: 
					| {{ mainStore.requisites.tin }}
				p
					span КПП: 
					| {{ mainStore.requisites.kpp }}
			h4.footer__ogrn
				p
					span ОГРН: 
					| {{ mainStore.requisites.ogrn }}
		div.footer__company
			h4.footer__title {{ mainStore.company.company }}
			div.footer__content
				h4 {{ mainStore.company.about }}
				h4 {{ mainStore.company.projects }}
				h4 {{ mainStore.company.catalog }}
				h4 {{ mainStore.company.contacts }}
		div.footer__catalog
			h4.footer__title {{ mainStore.catalog.catalog }}
			div.footer__content
				h4 {{ mainStore.catalog.kns }}
				h4 {{ mainStore.catalog.tanks }}
				h4 {{ mainStore.catalog.stormwaterTreatmentFacilities }}
				h4 {{ mainStore.catalog.domesticWastewaterTreatmentFacilities }}
				h4 {{ mainStore.catalog.accessories }}
		div.footer__contacts
			h4.footer__title {{ mainStore.contacts.contacts }}
			div.footer__content-wrap
				PhoneSvg.footer__icon
				a(:href="`tel:${mainStore.contacts.phone1}`") {{ mainStore.contacts.phone1 }}
			div.footer__content-wrap
				PhoneSvg.footer__icon
				a(:href="`tel:${mainStore.contacts.phone2}`") {{ mainStore.contacts.phone2 }}
			div.footer__content-wrap
				MailSvg.footer__icon
				a.underline(:href="`mail:${mainStore.contacts.mail}`") {{ mainStore.contacts.mail }}
			div.footer__content-wrap
				CallbackSvg.footer__callback
				p.underline {{ mainStore.contacts.callback }}
			Button.footer__but(text="Получить КП")
</template>

<script setup lang="ts">
import LogoSvg from '@public/svg/logo.svg';
import PhoneSvg from '@public/svg/phone.svg';
import MailSvg from '@public/svg/mail.svg';
import CallbackSvg from '@public/svg/callback.svg';
import Button from '@shared/buttons/button.vue';
import { useMainStore } from './../app/store';

const mainStore = useMainStore();
</script>

<style scoped lang="scss">
@use '~/assets/styles/vars' as v;
@use '~/assets/styles/mixins' as m;

.underline {
	border-bottom: 2px solid var(--white-50);
}

.footer {
  background-color: var(--primary-color-dark);
  height: 470px;
  display: flex;
  align-items: center;

	&__but {
		padding: 0.6rem 1rem;
	}

  &__wrpap {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 5rem;
    @include m.center65w;
    // @include m.debug2;

    @media (min-width: v.$wideBrp) {
      gap: 10rem;
    }
  }

	&__content-wrap {
		display: flex;
		align-items: center;
		gap: 0.4rem;

		a,p {
			color: var(--white-80);
			cursor: pointer;
		}
	}

  &__icon {
    fill: var(--primary-color);
    color: var(--primary-color);
    min-width: 24px !important;
    max-width: 24px !important;
    min-height: 24px !important;
    max-height: 24px !important;
  }

	&__callback {
    stroke: var(--primary-color);
    color: rgba(255, 255, 255, 0);
    stroke-width: 3;
    min-height: 24px;
    min-width: 24px;
  }

  &__title {
    font-size: 1.5rem;
  }

  &__content {
    display: flex;
    flex-direction: column;
    text-wrap: balance;
    gap: 1.5rem;
    font-size: 1rem;
    color: var(--white-80);
  }

  &__requisites {
    display: flex;
    flex-direction: column;
    min-width: 280px;
    height: 200px;
    gap: 1rem;

    span {
      color: var(--white-50);
    }
  }

  &__logo {
    width: 100%;
    height: auto;
    color: var(--primary-color-80);
  }

  &__legal {
    text-wrap: nowrap;
  }

  &__tin-kpp {
    display: flex;
    gap: 0.5rem;
  }

  &__company {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    min-width: 200px;
    height: auto;
    @include m.hide(v.$smBrp);
  }

  &__catalog {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    min-width: 200px;
		max-width: 200px;
    height: auto;
    @include m.hide(v.$xlBrp);
  }

  &__contacts {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    min-width: 200px;
    height: auto;
    @include m.hide(v.$largeBrp);
  }
}
</style>
