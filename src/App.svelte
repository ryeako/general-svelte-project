<script>
	import SideNav from './layout/SideNav.svelte';
	import Router from 'svelte-spa-router';
	import routes from './routes'
	import { moveHistory } from "./store/stores";
	import { onDestroy } from 'svelte';

	let moveHistoryContent = [];
    const subMoveHistory = moveHistory.subscribe(moves => moveHistoryContent = moves);
	onDestroy(subMoveHistory);
</script>

<svelte:head>
	<title>Silly App to test Svelte</title>
</svelte:head>

<nav class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col justify-between bg-gray-300 dark:bg-gray-900 dark:text-white shadow-lg z-10">
	<SideNav />
</nav>

<div class="fixed top-0 left-16 h-screen pl-5 pt-5 z-0 w-full bg-gray-100 dark:bg-gray-700 dark:text-white">
	<Router {routes} />
</div>

{#each moveHistoryContent as history}
<div>
	{history}
</div>
{/each}

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@layer components {
		.sidebar-icon {
			@apply relative flex items-center justify-center 
               h-12 w-12 mt-2 mb-2 mx-auto shadow-lg
               bg-gray-200 dark:bg-gray-800 text-green-500 hover:bg-gray-400
               dark:hover:bg-green-600 dark:hover:text-white
               rounded-3xl hover:rounded-xl
               transition-all duration-300 ease-linear
               cursor-pointer;
		}

		.sidebar-tooltip {
			@apply absolute w-auto p-2 m-2 min-w-max left-14
				rounded-md shadow-md
				text-black dark:text-white bg-gray-300 dark:bg-gray-900 
				text-xs font-bold
				transition-all duration-100 scale-0 origin-left;
      }

	}
</style>