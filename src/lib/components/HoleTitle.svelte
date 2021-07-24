<script>
	import {currentHoleViewed, showHoleSelect} from '$lib/stores/store'
</script>

<h1 class="head-text" 
	on:click={ () => showHoleSelect.set(true) }>
	Hole <sup>#</sup>{$currentHoleViewed}
</h1>

<style>
sup{
	font-size: clamp(1rem, 5vw, 2rem);
}
</style>