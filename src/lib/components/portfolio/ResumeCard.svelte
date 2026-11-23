<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { cn } from '$lib/utils';
	import { t } from '$lib/i18n';
	import { ChevronRightIcon } from 'lucide-svelte';
	import { quartOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	let {
		logoUrl,
		logoBg = 'bg-white dark:bg-foreground',
		company,
		title,
		subtitle,
		href,
		badges,
		description,
		start,
		end
	}: {
		logoUrl: string;
		logoBg?: string;
		company: string;
		title: string;
		subtitle?: string;
		href: string;
		badges?: string[];
		description?: string;
		start: string;
		end: string;
	} = $props();
	
	
	let isExpanded = $state(false);

	
	
	let handleClick = (e: MouseEvent) => {
		if (description) {
			e.preventDefault();
			isExpanded = !isExpanded;
		}
	};
</script>

<a href={href || '#'} onclick={handleClick}>
	<div class="flex rounded-lg bg-card text-card-foreground p-2">
		<div class="flex-none">
			<Avatar.Root class="{logoBg} m-auto size-12 border-2 border-muted rounded-full overflow-hidden">
				<Avatar.Image src={logoUrl} alt={company} class="object-contain p-1.5 rounded-full" />
				<Avatar.Fallback>{company[0]}</Avatar.Fallback>
			</Avatar.Root>
		</div>
		<div class="group ml-4 flex-grow flex-col items-center">
			<div class="flex flex-col">
				<div class="flex items-center justify-between gap-x-2 text-base">
					<h3
						class="inline-flex items-center justify-center text-xs font-semibold leading-none sm:text-sm"
					>
						{company}
						{#if badges && badges.length > 0 && badges[0] !== ''}
							<span class="inline-flex gap-x-1">
								{#each badges as badge}
									<Badge variant="secondary" class="align-middle text-xs">
										{badge}
									</Badge>
								{/each}
							</span>
						{/if}
						<ChevronRightIcon
							class={cn(
								'size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
								isExpanded ? 'rotate-90' : 'rotate-0'
							)}
						/>
					</h3>
					<div class="text-right text-xs tabular-nums text-muted-foreground sm:text-sm">
						{start} - {end || $t('present')}
					</div>
				</div>
				{#if title}
					<div class="font-sans text-xs">{title}</div>
				{/if}
				{#if subtitle}
					<div class="font-sans text-xs text-muted-foreground">{subtitle}</div>
				{/if}
			</div>
			{#if description}
				{#if isExpanded}
					<div
						class="mt-2 text-xs sm:text-sm"
						transition:slide={{
							duration: 700,
							easing: quartOut
						}}
					>
						{description}
					</div>
				{/if}
			{/if}
		</div>
	</div>
</a>
