<script>
	import '../app.scss'
	import {headText} from '$lib/stores/store'
</script>
<main class="wrap">
	<slot />
</main>

<style>
	h1{
		font-weight: 900;
		color: var(--gold);
		text-shadow: var(--shroom-text-shadow);
		/* background: linear-gradient(to top, var(--sea), var(--sea-light)); */
		font-family: var(--font-title);
		text-align: center;
		width: calc(100% - 55px);
		margin: 55px auto 50px;
		padding: 10px;
		border-radius: 10px;
		box-sizing: border-box;
		box-shadow: 0px 0px 0px 5px var(--gold), 0px 0px 0px 10px var(--green), 0px 0px 0px 15px var(--red);
		font-size: clamp(2rem, 9vw, 3.5rem);
		
	}

	.wrap{
		max-width: 500px;
		margin: 20px auto;
		padding: 20px;
	}
</style>