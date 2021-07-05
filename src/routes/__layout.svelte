<script>
	import '../app.scss'
</script>
<main class="wrap">
	<slot />
</main>

<style>
	.wrap{
		max-width: 500px;
		margin: 0px auto;
		padding: 20px;
	}
</style>