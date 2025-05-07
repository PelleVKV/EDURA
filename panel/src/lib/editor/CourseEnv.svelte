<script lang="ts">
    import CourseFrame from "./components/CourseFrame.svelte";
    import { writable } from 'svelte/store';
    import { StaticCanvas, FabricText } from "fabric";
    
    let frames = [
        {
            title: "First Frame",
            width: "800px",
            height: "600px",
            bgColor: "#ffffff",
            zoomLevel: 1.2,
        },
    ];
</script>

<!-- Your Zoom Node Container -->
<div class="absolute inset-0 bg-white top-0 left-0 w-screen overflow-auto
            h-screen z-0 zoom-node bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:16px_16px]">
    {#each frames as frame}
    <CourseFrame 
        title={frame.title}
        width={frame.width}
        height={frame.height}
        bgColor={frame.bgColor}
    />
    {/each}
</div>