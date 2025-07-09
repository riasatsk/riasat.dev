<script>
	let { data } = $props();
</script>

<main class="prose xl:prose-xl p-5">
	<h2 class="text-white">Page Views</h2>
	<table class="text-white bg-gray-800 rounded-md">
		<thead>
			<tr>
				<th class="text-white">URL</th>
				<th class="text-white">Count</th>
				<th class="text-white">Created At</th>
				<th class="text-white">Updated At</th>
			</tr>
		</thead>
		<tbody>
			{#each data.pageViews as view}
				<tr>
					<td>{view.url}</td>
					<td>{view.count}</td>
					<td>{new Date(view.createdAt).toDateString()}</td>
					<td>{new Date(view.updatedAt).toDateString()}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</main>
