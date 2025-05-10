import { Rect, Circle } from "fabric";

// Switch function to determine fabric type
export const createFabricObject = (item) => {
    switch (item.fabricShape) {
        case "rect":
            return new Rect({
                id: item.id,
                width: item.initialWidth,
                height: item.initialHeight,
                fill: item.initialFill,
                left: 100,
                top: 100,
            });
        case "circle":
            return new Circle({
                id: item.id,
                radius: item.initialRadius,
                fill: item.initialFill,
                left: 100,
                top: 100,
            });
        default:
            return null;
    }
};