<script>
	import {currentHoleViewed, showHoleSelect} from '$lib/stores/store'
</script>

<h1 class="head-text" 
	on:click={ () => showHoleSelect.set(true) }>
	Hole <sup>#</sup>{$currentHoleViewed}
</h1>

<p class="small-text">Touch the hole number to go back or see the current totals</p>

<style>
sup{
	font-size: clamp(1rem, 5vw, 2rem);
}

.small-text{
	margin-bottom: 15px;
}
</style>