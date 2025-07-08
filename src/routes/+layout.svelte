<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex flex-col">
	<nav class="sticky top-0 flex-none bg-blue-500 p-3 text-white md:flex md:justify-between">
		<h1 class="font-sans text-2xl font-bold"><a href="/">Riasat Sk</a></h1>
		<ul class="flex gap-3 text-lg font-semibold">
			<li class={page.url.pathname === '/' ? 'border-b-2' : ''}><a href="/">Home</a></li>
			<li class={page.url.pathname === '/blogs' ? 'border-b-2' : ''}><a href="/blogs">Blogs</a></li>
			<li class={page.url.pathname === '/about' ? 'border-b-2' : ''}><a href="/about">About</a></li>
			<li class={page.url.pathname === '/contact' ? 'border-b-2' : ''}>
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</nav>

	<main class="flex-1">
		{@render children()}
	</main>
</div>
