document.addEventListener("DOMContentLoaded", () => {
    const zoomElement = document.getElementById("editorDiv"); // Target div

    let zoom = 1;
    const ZOOM_SPEED = 0.05;
    const MIN_ZOOM = 0.2;
    const MAX_ZOOM = 3;

    // Prevent the browser's zoom on Ctrl+scroll
    document.addEventListener("wheel", (e) => {
        if (e.ctrlKey) {
            e.preventDefault();
        }
    }, { passive: false });

    // Handle zooming with the mouse wheel
    zoomElement.addEventListener("wheel", (e) => {
        e.preventDefault();

        if (e.deltaY > 0) {
            zoom = Math.max(MIN_ZOOM, zoom - ZOOM_SPEED); // Zoom out
        } else {
            zoom = Math.min(MAX_ZOOM, zoom + ZOOM_SPEED); // Zoom in
        }

        // Apply the zoom to the element
        zoomElement.style.transform = `scale(${zoom})`;
        zoomElement.style.transition = "transform 0.1s ease"; // Smooth transition
    });
});