<svelte:head>
</svelte:head>

<script>
    import { onMount } from 'svelte';
   
    onMount(async () => {
        init();
    });


    function init() {
        console.log("hello world!");
    };
    
</script>

<style></style>
<div class="w-24 h-24 bg-teal-500 ml-10 mt-10 rounded-lg shadow-lg"></div>