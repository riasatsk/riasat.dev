<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';

	let { children } = $props();
</script>

<nav class="bg-sky-600 p-3 md:flex md:justify-between dark:text-white">
	<h1 class="font-sans text-2xl font-bold">Riasat Sk</h1>
	<ul class="flex gap-3 text-lg font-semibold">
		<li class={page.url.pathname === '/' ? 'border-b-2' : ''}><a href="/">Home</a></li>
		<li class={page.url.pathname === '/blogs' ? 'border-b-2' : ''}><a href="/blogs">Blogs</a></li>
		<li class={page.url.pathname === '/about' ? 'border-b-2' : ''}><a href="/about">About</a></li>
		<li class={page.url.pathname === '/contact' ? 'border-b-2' : ''}><a href="/contact">Contact</a></li>
	</ul>
</nav>
{@render children()}
