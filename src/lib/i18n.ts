import { derived } from 'svelte/store';
import { lang } from './stores/lang';

export const translations = {
	id: {
		heroGreeting: 'Halo, saya Muhammad Norshahlan 👋',
		heroSubtitle: 'Software Engineer yang beralih menjadi Entrepreneur. Saya suka membangun sesuatu dan membantu orang.',
		about: 'Tentang',
		workExperience: 'Pengalaman Kerja',
		education: 'Pendidikan',
		skills: 'Keahlian',
		projects: 'Proyek',
		myProjects: 'Proyek Saya',
		checkLatestWork: 'Lihat karya terbaru saya',
		projectsDesc:
			'Saya telah mengerjakan berbagai proyek, mulai dari website sederhana hingga aplikasi web yang kompleks. Berikut beberapa favorit saya.',
		toggleTheme: 'Ganti tema',
		toggleLang: 'Ganti bahasa',
		present: 'Sekarang',
		blog: 'Blog'
	},
	en: {
		heroGreeting: "Hi, I'm Muhammad Norshahlan 👋",
		heroSubtitle: 'Software Engineer turned Entrepreneur. I love building things and helping people.',
		about: 'About',
		workExperience: 'Work Experience',
		education: 'Education',
		skills: 'Skills',
		projects: 'Projects',
		myProjects: 'My Projects',
		checkLatestWork: 'Check out my latest work',
		projectsDesc:
			"I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
		toggleTheme: 'Toggle theme',
		toggleLang: 'Toggle language',
		present: 'Present',
		blog: 'Blog'
	}
} as const;

export const t = derived(lang, ($lang) => (key: keyof (typeof translations)['id']) => translations[$lang][key]);