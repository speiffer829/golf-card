<script>
	import {currentHoleViewed, showHoleSelect} from '$lib/stores/store'
	import { fly } from 'svelte/transition'
	import { backOut } from 'svelte/easing'
</script>

{#key $currentHoleViewed}
<h1 class="head-text"
	in:fly={{ y: -50, duration: 500, easing: backOut }} 
	on:click={ () => showHoleSelect.set(true) }>
	Hole <sup>#</sup>{$currentHoleViewed}
</h1>
{/key}

<style>
sup{
	font-size: clamp(1rem, 5vw, 2rem);
}
</style>