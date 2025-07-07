<script lang="ts">
	let email = $state('');
	let name = $state('');
	let message = $state('');

	async function sendMessage(email: string, name: string, message: string) {
		const response = await fetch('/api/contact', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ email, name, message })
		});
        if(response.ok){
            console.log("Successful")
        }
	}
</script>
<svelte:head>
	<title>Contact Me | Riasat Sk</title>
</svelte:head>
<main class="flex justify-center p-3">
	<div class="flex w-80 flex-col justify-center gap-3 font-sans md:w-96 dark:text-white">
		<h1 class=" text-center text-2xl font-semibold">Contact Me</h1>
		<div class="flex flex-col">
			<label for="email" class="font-semibold">Email</label>
			<input type="email" class="rounded-md bg-transparent font-serif" />
		</div>
		<div class="flex flex-col">
			<label for="name" class="font-semibold">Name</label>
			<input type="text" class="rounded-md bg-transparent font-serif" />
		</div>
		<div class="flex flex-col">
			<label for="message" class="font-semibold">Message</label>
			<textarea name="message" id="" class="rounded-md bg-transparent font-serif"></textarea>
		</div>

		<button class="rounded-md border-none bg-blue-500 p-2 text-lg font-semibold active:scale-105"
			>Send</button
		>
	</div>
</main>
