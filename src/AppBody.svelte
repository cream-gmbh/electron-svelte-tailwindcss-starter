<svelte:head>

</svelte:head>

<script>
    import { onMount } from 'svelte';
   
    onMount(async () => {
        init();
    });

    function init() {
        console.log("hello world!");
    }
    
</script>

<style>

</style>

<!-- Test TailwindCSS -->
<div class="container">
    <div class="grid grid-rows-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div class="text-3xl text-gray-800 ml-10 mt-10">SUCCESS!</div>
        <div class="w-24 h-24 bg-red-500 ml-10 mt-10 rounded-none shadow"></div>
        <div class="w-24 h-24 bg-green-500 ml-10 mt-10 rounded shadow-md"></div>
        <div class="w-24 h-24 bg-blue-500 ml-10 mt-10 rounded-lg shadow-lg"></div>
        <div class="w-24 h-24 bg-yellow-500 ml-10 mt-10 rounded-full shadow-xl"></div>
    </div>
</div>