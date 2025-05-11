import { Rect, Circle } from "fabric";

// Switch function to determine fabric type
export const createFabricObject = (item) => {
    const shape = item.name?.trim().toLowerCase();

    switch (shape) {
        case "square":
            return new Rect({
                id: item.id,
                width: item.initialWidth,
                height: item.initialHeight,
                fill: item.initialFill,
            });
        case "circle":
            return new Circle({
                id: item.id,
                radius: item.initialRadius,
                fill: item.initialFill,
            });
        case "video":
            return new Rect({
                id: item.id,
                width: item.initialWidth,
                height: item.initialHeight,
                fill: item.initialFill,
            });
        case "frame":
            return new Rect({
                id: item.id,
                width: item.initialWidth,
                height: item.initialHeight,
                fill: item.initialFill,
                lockScalingX: true,
                lockRotation: true,
            });
        default:
            return null;
    }
};
