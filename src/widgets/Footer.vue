<template lang="pug">
footer.footer
	div.footer__wrpap
		div.footer__requisites
		div.footer__company
		div.footer__catalog
		div.footer__contacts
</template>

<script setup lang="ts">
import Button from '@shared/buttons/button.vue';
</script>

<style scoped lang="scss">
@use '~/assets/styles/vars' as v;
@use '~/assets/styles/mixins' as m;

.footer {
	background-color: var( --primary-color-dark);
	height: 470px;
	display: flex;
	align-items: center;
	
	&__wrpap {
		@include m.center65w;
		display: flex;
		width: 100%;
		justify-content: center;
		gap: 5rem;
		@include m.debug2;
		
		@media (min-width: v.$wideBrp) {
			gap: 10rem;
		}
	}
	
	&__requisites {
		@include m.debug;
		width: 300px;
		height: 200px;
	}

	&__company {
		@include m.debug;
		width: 200px;
		height: 290px;
		@include m.hide(v.$smBrp);
	}

	&__catalog {
		@include m.debug;
		width: 200px;
		height: 320px;
		@include m.hide(v.$xlBrp);
	}

	&__contacts {
		@include m.debug;
		width: 200px;
		height: 300px;
		@include m.hide(v.$largeBrp);
	}
}
</style>
