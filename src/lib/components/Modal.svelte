<script>
	import { createEventDispatcher } from 'svelte';
	import {fade, fly} from 'svelte/transition'

	const dispatch = createEventDispatcher()
</script>

<div 
	class="overlay" 
	transition:fade|local={{ duration: 400 }} 
	on:click|self={() => dispatch('closeMe')}>
	<div class="modal" transition:fly|local={{ y:100, duration: 400 }}>
		<div class="wrap">
			<slot/>
		</div>
	</div>
</div>

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
		box-shadow: 1px 2px 4px hsla(420, 69%, 0%, .20);
		border-radius: 10px;
		width: clamp(315px, 90%, 450px);
		padding: 1rem;
	}
</style>