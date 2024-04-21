import { useEffect } from "react";

export const useDrop = (
  key: string,
  elementIds: string[],
  handler: (data: string, event: DragEvent) => void
  // options?: {
  //   handleDragOver?: (event: DragEvent) => void;
  //   handleDrop?: (data: string, event: DragEvent) => void;
  // }
) => {
  useEffect(() => {
    const elements: HTMLElement[] = elementIds.map(
      (elementId) => document.getElementById(elementId)!
    );

    elements.map((element) => {
      element.addEventListener("dragover", (event: DragEvent) => {
        event.preventDefault();
      });

      element.addEventListener("drop", (event: DragEvent) => {
        event.preventDefault();
        const data = event.dataTransfer!.getData(key);
        handler(data, event);
        // options?.handleDrop && options?.handleDrop(data, event);
      });
    });
  }, [elementIds, handler, key]);
};
