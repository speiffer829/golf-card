<script>
	import { createEventDispatcher } from 'svelte';
	import {fade, fly} from 'svelte/transition'

	const dispatch = createEventDispatcher()

	export let modalOpen = false
</script>

{#if modalOpen}
<div 
	class="overlay" 
	transition:fade|local={{ duration: 400 }} 
	on:click|self={() => modalOpen = false}>
	<div class="modal" transition:fly|local={{ y:100, duration: 400 }}>
		<div class="wrap">
			<slot/>
		</div>
	</div>
</div>
	
{/if}

<style>
	.overlay{
		position: fixed;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--pale-yellow-trans);
		backdrop-filter: blur(10px);
	}

	.modal{
		background: var(--gold-light);
		box-shadow: var(--subtle-shadow);
		border-radius: 10px;
		width: clamp(315px, 90%, 450px);
		padding: 1rem;
	}
</style>