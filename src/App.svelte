<script lang="ts">
	import { onMount } from 'svelte'
	import generatePassword from './lib'

	let password = $state('')

	let copyText = $state('Copy Password')

	let optionsLength = $state({
		maxNumberLength: 2,
		maxSymbolLength: 2,
	})

	let options = $state({
		totalLength: 8,
		maxNumberLength: 2,
		maxSymbolLength: 2,
	})

	onMount(() => {
		password = generatePassword({
			totalLength: 8,
			maxNumberLength: 2,
			maxSymbolLength: 2,
		})
	})

	$effect(() => {
		const maxNumberLength = optionsLength.maxNumberLength
		optionsLength.maxSymbolLength = maxNumberLength - options.maxNumberLength
		options.maxSymbolLength = optionsLength.maxSymbolLength
	})

	$effect(() => {
		const totalLength = options.totalLength
		optionsLength.maxNumberLength = totalLength
		optionsLength.maxSymbolLength = totalLength
	})

	$effect(() => {
		password = generatePassword(options)
		copyText = "Copy Password"
	})

	function CopyPassword() {
		navigator.clipboard.writeText(password)
		copyText = 'Password Coped !'
	}
</script>

<div class="w-full h-screen flex justify-center items-center">
	<div
		class="w-64 flex-col flex justify-center items-center p-10 bg-white dark:bg-gray-900 transition-colors duration-500"
	>
		<h1 class=" font-bold mb-4 text-gray-900 dark:text-white">
			Password Generator
		</h1>
		<p
			class="w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md line-clamp-1"
		>
			{password}
		</p>
		<p class="mt-2 text-gray-900 dark:text-white">
			Password Length - <span class="font-semibold">{password.length}</span>
		</p>

		<div class="mt-6 space-y-4 w-full">
			<!-- Total Length Slider -->
			<div>
				<label for="totalLength" class=" text-gray-900 dark:text-white"
					>Total Length - <span class="font-semibold"
						>{options.totalLength}</span
					></label
				>
				<input
					class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none focus:outline-none cursor-pointer"
					type="range"
					min="8"
					step="1"
					bind:value={options.totalLength}
				/>
			</div>

			<!-- Max Numbers Slider -->
			<div>
				<label for="maxNumberLength" class=" text-gray-900 dark:text-white"
					>Max Numbers - <span class="font-semibold"
						>{options.maxNumberLength}</span
					></label
				>
				<input
					class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none focus:outline-none cursor-pointer"
					type="range"
					min="0"
					max={optionsLength.maxNumberLength}
					step="1"
					bind:value={options.maxNumberLength}
				/>
			</div>

			<!-- Max Symbols Slider -->
			<div>
				<label for="maxSymbolLength" class=" text-gray-900 dark:text-white"
					>Max Symbols - <span class="font-semibold"
						>{options.maxSymbolLength}</span
					></label
				>
				<input
					class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none focus:outline-none cursor-pointer"
					type="range"
					min="0"
					max={optionsLength.maxSymbolLength}
					step="1"
					bind:value={options.maxSymbolLength}
				/>
			</div>
		</div>

		<div>
			<button class=" text-white mt-4 rounded-md text-lg bg-yellow-500 p-3" onclick={CopyPassword}
				>{copyText}</button
			>
		</div>
	</div>
</div>
