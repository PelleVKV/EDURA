<script>
    import AssetsFolder from "./components/AssetsFolder.svelte";
    import DesignPanel from "./components/DesignPanel.svelte";

    let activeTab = 'design';

    let tabs = [
        { name: 'Design', id: 'design' },
        { name: 'Assets', id: 'assets' }
    ];

    const setActiveTab = (tab) => {
        activeTab = tab;
    };
</script>

<div class="w-full h-full">
    <div class="flex text-xs">
        <button class={`flex justify-center items-center w-1/2 py-1 rounded-t-lg cursor-pointer
        ${activeTab == 'design' ? 'bg-gray-100' : ''}`} on:click={() => setActiveTab('design')}>DESIGN</button>
        <button class={`flex justify-center items-center w-1/2 py-1 rounded-t-lg cursor-pointer
        ${activeTab == 'assets' ? 'bg-gray-100' : ''}`} on:click={() => setActiveTab('assets')}>ASSETS</button>
    </div>
    <div class="w-full h-full bg-gray-100">
        <!-- CONTENT -->
        {#if activeTab == 'assets'}<AssetsFolder />{/if}
        {#if activeTab == 'design'}<DesignPanel />{/if}
    </div>
</div>