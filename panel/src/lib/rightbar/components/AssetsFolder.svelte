<script>
    import { onMount } from "svelte";
    import SearchBar from "../../components/SearchBar.svelte";
    import assets from "../../../assets/json/assets.json";

    onMount(() => {
        console.log(assets);
    });
</script>

<div class="w-full h-full p-2">
    <SearchBar />

    <div class="text-xs w-full h-full space-y-8 select-none">
        <div class="mt-4">
            <p>Media</p>
            <hr>
            <div class="grid grid-cols-3 gap-4 mt-2">
                {#each assets.mediaTypes as mediaAsset}
                    <div class="relative flex flex-col justify-center shadow-md transform transition 
                                duration-300 hover:scale-105 items-center w-16 h-16 bg-gray-100 cursor-pointer">
                        {@html mediaAsset.logo}
                        {mediaAsset.title}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>