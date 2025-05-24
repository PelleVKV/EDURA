import { Rect, Circle, Textbox, Group } from "fabric";

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
            // Frame is a rectangle with a label
            const rect = new Rect({
                id: item.id,
                width: item.initialWidth,
                height: item.initialHeight,
                fill: item.initialFill,
            });

            // Frame title
            const label = new Textbox("Frame", {
                fontSize: 16,
                fill: "black",
                editable: true,
                selectable: true,
                evented: true,
                fontFamily: "Special Gothic Expanded One",
                left: 5,
                top: -20,
            });

            // Group the rect and label together
            const frameGroup = new Group([rect, label], {
                id: item.id,
                hasControls: true,
                hasBorders: true,
                objectCaching: false,
                lockScalingX: true,
                lockRotation: true,
            });

            return frameGroup;
        case "text":
            return new Textbox(item.initialText || "Enter text", {
                id: item.id,
                width: item.initialWidth || 200,
                height: item.initialHeight || 50,
                fill: item.initialFill || "black",
                fontSize: item.initialFontSize || 20,
                fontFamily: "Special Gothic Expanded One",
            });
        default:
            return null;
    }
};
