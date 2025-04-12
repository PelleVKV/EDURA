<script>
    import CourseFrame from "./components/CourseFrame.svelte";

    let frames = [
        {
            title: "First Frame",
            width: "1040px",
            height: "550px",
            bgColor: "#ffffff"
        },
    ];
</script>

<div class="absolute top-0 left-0 w-screen h-screen z-0">
    {#each frames as frame}
        <CourseFrame
            title={frame.title}
            width={frame.width}
            height={frame.height}
            bgColor={frame.bgColor}
        />
    {/each}
</div>