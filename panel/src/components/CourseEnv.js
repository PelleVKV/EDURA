import { useState, useEffect, useRef } from "react";
import { Canvas, Rect } from "fabric";
import { useData } from "../context/DataContext";
import { createFabricObject } from "../utils/LoadFabricItem";
import { ContextMenu, courseEnvMenu } from "./tools/ContextMenu";

export const CourseEnv = () => {
    const {
        dataCollection,
        setDataCollection,
        selectedShapes,
        setSelectedShapes,
    } = useData();
    const [menuPos, setMenuPos] = useState(null);

    const canvasRef = useRef(null);
    const fabricCanvasRef = useRef(null);

    // Initial Canvas Setup Settings
    useEffect(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const canvasEl = canvasRef.current;
        if (!canvasEl) return;

        const fabricCanvas = new Canvas(canvasEl, { width, height });
        fabricCanvasRef.current = fabricCanvas;

        // Zoom
        const onWheel = (opt) => {
            const delta = opt.e.deltaY;
            let zoom = fabricCanvas.getZoom();
            zoom *= 0.999 ** delta;
            zoom = Math.min(Math.max(zoom, 0.01), 20);
            fabricCanvas.zoomToPoint(
                { x: opt.e.offsetX, y: opt.e.offsetY },
                zoom
            );
            opt.e.preventDefault();
            opt.e.stopPropagation();
        };

        // Pan
        let isDragging = false;
        let lastPosX = 0;
        let lastPosY = 0;

        const onMouseDown = (opt) => {
            const evt = opt.e;
            if (evt.altKey === true) {
                isDragging = true;
                fabricCanvas.selection = false;
                lastPosX = evt.clientX;
                lastPosY = evt.clientY;
            }
            if (evt.button === 2) {
                console.log("Right click");
            }
        };

        const onMouseMove = (opt) => {
            if (isDragging) {
                const e = opt.e;
                const vpt = fabricCanvas.viewportTransform;
                vpt[4] += e.clientX - lastPosX;
                vpt[5] += e.clientY - lastPosY;
                fabricCanvas.requestRenderAll();
                lastPosX = e.clientX;
                lastPosY = e.clientY;
            }
        };

        const onMouseUp = () => {
            isDragging = false;
            fabricCanvas.selection = true;
        };

        const handleKeyDown = (e) => {
            if (e.key === "Delete" || e.key === "Backspace") {
                const activeObject = fabricCanvas.getActiveObject();
                const activeObjects = fabricCanvas.getActiveObjects();
                if (activeObjects.length > 0) {
                    activeObjects.forEach((obj) => fabricCanvas.remove(obj)); // Remove each object
                    fabricCanvas.discardActiveObject(); // Deselect all objects
                    fabricCanvas.requestRenderAll(); // Re-render the canvas

                    setDataCollection((prev) =>
                        prev.filter(
                            (item) =>
                                !activeObjects.some((obj) => obj.id === item.id)
                        )
                    );
                }
            }
        };

        const onSelect = (opt) => {
            const selected = opt.selected || [];
            console.log("Selected items:", selected);
            
            if (selected.length > 0) {
                const shapes = selected.map((obj) => ({
                    id: obj.id,
                    type: obj.type,
                }));
                setSelectedShapes(shapes);
            } else {
                setSelectedShapes([]);
            }
        };

        // Add listeners
        fabricCanvas.on("mouse:wheel", onWheel);
        fabricCanvas.on("mouse:down", onMouseDown);
        fabricCanvas.on("mouse:move", onMouseMove);
        fabricCanvas.on("mouse:up", onMouseUp);
        fabricCanvas.on("selection:created", onSelect);
        fabricCanvas.on("selection:updated", onSelect);
        fabricCanvas.on("selection:cleared", () => setSelectedShapes([]));
        document.addEventListener("keydown", handleKeyDown);

        // Cleanup
        return () => {
            fabricCanvas.off("mouse:wheel", onWheel);
            fabricCanvas.off("mouse:down", onMouseDown);
            fabricCanvas.off("mouse:move", onMouseMove);
            fabricCanvas.off("mouse:up", onMouseUp);
            fabricCanvas.off("selection:created", onSelect);
            fabricCanvas.off("selection:updated", onSelect);
            fabricCanvas.off("selection:cleared");
            document.removeEventListener("keydown", handleKeyDown);
            fabricCanvas.dispose();
        };
    }, []);

    useEffect(() => {
        const fabricCanvas = fabricCanvasRef.current;
        if (!fabricCanvas) return;

        dataCollection.forEach((item) => {
            if (fabricCanvas.getObjects().some((obj) => obj.id === item.id))
                return;
            const fabricObj = createFabricObject(item);
            if (fabricObj) {
                fabricCanvas.add(fabricObj);
                fabricCanvas.centerObject(fabricObj);
                fabricCanvas.requestRenderAll();
            }
        });
    }, [dataCollection]);

    const handleContextMenu = (e) => {
        e.preventDefault();
        setMenuPos({ x: e.clientX, y: e.clientY });
    };

    return (
        <div
            className="absolute inset-0 bg-white top-0 left-0 w-screen overflow-none
            h-screen z-0 zoom-node bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:16px_16px]"
            onContextMenu={handleContextMenu}
        >
            <canvas
                ref={canvasRef}
                width={window.innerWidth}
                height={window.innerHeight}
            />
            <ContextMenu
                data={courseEnvMenu}
                position={menuPos}
                onClose={() => setMenuPos(null)}
            />
        </div>
    );
};
