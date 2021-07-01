<script>
	import '../app.scss'
</script>

<h1>Golf Scorerer</h1>
<div class="wrap">
	<slot />
</div>

<style>
	h1{
		font-weight: 900;
		color: var(--gold);
		text-shadow: 2px 2px 0 var(--brown), 4px 4px 0 var(--red), 6px 6px var(--green);
		/* background: linear-gradient(to top, var(--sea), var(--sea-light)); */
		font-family: var(--font-title);
		text-align: center;
		width: calc(100% - 55px);
		margin: 55px auto 50px;
		padding: 10px;
		border-radius: 5px;
		box-sizing: border-box;
		box-shadow: 0px 0px 0px 5px var(--gold), 0px 0px 0px 10px var(--green), 0px 0px 0px 15px var(--red);
		font-size: clamp(2rem, 9vw, 3.5rem);
		
	}

	.wrap{
		max-width: 500px;
		margin: 20px auto;
	}
</style>