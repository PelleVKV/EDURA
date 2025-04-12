<script>
    import { notification } from '../../stores/notification.js';
</script>

{#if $notification.isVisible}
    <div class="notification absolute text-sm top-2 left-1/2 transform -translate-x-1/2 bg-white shadow-2xl p-2 px-6 rounded-full">
        <span>{$notification.message}</span>
    </div>
{/if}

<style>
.notification {
    animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
  