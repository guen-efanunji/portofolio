import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Lang = 'id' | 'en';

function getInitial(): Lang {
	if (browser) {
		const saved = localStorage.getItem('lang');
		if (saved === 'id' || saved === 'en') return saved;
	}
	return 'id';
}

export const lang = writable<Lang>(getInitial());

if (browser) {
	lang.subscribe((v) => localStorage.setItem('lang', v));
}