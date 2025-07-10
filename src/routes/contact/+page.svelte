<script lang="ts">
	let email = $state('');
	let name = $state('');
	let message = $state('');
	let isMessageSent = $state(false);

	async function sendMessage(name: string, email: string, message: string) {
		const response = await fetch('/api/contact', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ name, email, message })
		});

		if (response.ok) {
			isMessageSent = true;
		}
	}
</script>

<svelte:head>
	<title>Contact Me | Riasat Sk</title>
</svelte:head>
<main class="flex justify-center p-3">
	{#if !isMessageSent}
		<div class="flex w-80 flex-col justify-center gap-3 font-sans md:w-96 dark:text-white">
			<h1 class=" text-center text-2xl font-semibold">Contact Me</h1>

			<div class="flex flex-col">
				<label for="name" class="font-semibold">Name</label>
				<input bind:value={name} type="text" class="rounded-md bg-transparent font-serif" />
			</div>
			<div class="flex flex-col">
				<label for="email" class="font-semibold">Email</label>
				<input bind:value={email} type="email" class="rounded-md bg-transparent font-serif" />
			</div>
			<div class="flex flex-col">
				<label for="message" class="font-semibold">Message</label>
				<textarea
					bind:value={message}
					name="message"
					id=""
					class="rounded-md bg-transparent font-serif"
				></textarea>
			</div>

			<button
				class="rounded-md border-none bg-blue-500 p-2 text-lg font-semibold active:scale-105"
				onclick={async () => {
					await sendMessage(name, email, message);
				}}>Send</button
			>
		</div>
	{:else}
		<div class="border-green-600 bg-emerald-200 p-3 text-black">
			Thanks for reching me out, I usually answer in less than 24 hour
		</div>
	{/if}
</main>
