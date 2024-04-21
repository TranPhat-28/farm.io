import { useEffect } from "react";

export const useDrag = (
  format: string,
  elementIds: string[],
  setData: (event: DragEvent) => string,
  options?: {
    handleDragStart?: (event: DragEvent) => void;
    handleDragEnd?: (event: DragEvent) => void;
  }
) => {
  useEffect(() => {
    const elements: HTMLElement[] = elementIds.map(
      (elementId) => document.getElementById(elementId)!
    );

    elements.map((element) => {
      element.draggable = true;

      element.addEventListener("dragstart", (event: DragEvent) => {
        event.dataTransfer?.setData(format, setData(event));
        options?.handleDragStart && options?.handleDragStart(event);
      });

      element.addEventListener("dragend", (event: DragEvent) => {
        options?.handleDragEnd && options?.handleDragEnd(event);
      });
    });
  }, [elementIds, format, options, setData]);
};
