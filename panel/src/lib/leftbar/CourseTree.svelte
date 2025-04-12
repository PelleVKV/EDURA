<script>
    import { onMount } from 'svelte';
    import { state, storeState } from '../../stores/cookieManager';

    let projectTitle = 'New Project';

    const saveTitle = (event) => {
        projectTitle = event.target.value;
        storeState({ title: projectTitle });
    }

    onMount(() => {
        const storedTitle = $state.title;

        if (storedTitle) {
            projectTitle = storedTitle;
        } else {
            projectTitle = 'New Project';
        }
    });
</script>

<div class="flex flex-col space-y-4 w-full h-full">
    <input type="text" class="outline-none" bind:value={projectTitle} on:blur={saveTitle}>

<!-- {#each frames as frame}
        <li class="list-none">
            <input type="text" class="text-xs uppercase outline-none" bind:value={frame.title}>
        </li>
    {/each} -->
</div>