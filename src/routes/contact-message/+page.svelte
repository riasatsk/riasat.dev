<script>
	let { data } = $props();
</script>

<main class="prose xl:prose-xl p-5">
	<h2 class="text-white">Contact Message</h2>
	<table class="rounded-md bg-gray-800 text-white">
		<thead>
			<tr>
				<th class="text-white">ID</th>
				<th class="text-white">Name</th>
				<th class="text-white">Email</th>
				<th class="text-white">Message</th>
				<th class="text-white">Created At</th>
			</tr>
		</thead>
		<tbody>
			{#each data.messages as message}
				<tr>
					<td>{message.id}</td>
					<td>{message.name}</td>
					<td>{message.email}</td>
					<td>{message.message}</td>
					<td>{new Date(message.createdAt).toDateString()}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</main>
