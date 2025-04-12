<script>
    export let title;
    export let width;
    export let height;
    export let bgColor;
</script>

<div class={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[${bgColor}] w-[${width}] h-[${height}]`}
        style="background-color: {bgColor}; width: {width}; height: {height};">
    <input class="absolute text-sm -translate-y-full outline-0" bind:value={title} />
</div>
