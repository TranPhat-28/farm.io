import { useState } from "react";
import "./style.scss";

const DATA = ["zoo-1", "zoo-2", "zoo-3"];
// type DynamicZoo = {
//   zoo: string;
//   x: number;
//   y: number;
// };

export const VisitSidebar = () => {
  const [data, setData] = useState(DATA);
  // const [isDrag, setIsDrag] = useState<boolean>(false);

  const handleDragStart = (event: React.DragEvent) => {
    // setIsDrag(true);
    event.dataTransfer?.setData("zoo", (event.target as HTMLElement).id);
  };

  const handleDragEnd = (event: React.DragEvent) => {
    // setIsDrag(false);
    setData((data) =>
      data.filter((item) => item !== (event.target as HTMLElement).id)
    );
  };

  // -----------
  const handleDragOver = (event: React.DragEvent) => {
    // if (isDrag) return;
    event.preventDefault();
  };
  const handleDrop = (event: React.DragEvent) => {
    // if (isDrag) return;

    event.preventDefault();
    const id = event.dataTransfer!.getData("zoo-in");
    setData((data) => [...data, id]);
  };

  return (
    <div
      className="visit-sidebar"
      id="visit-sidebar"
      onDragOver={handleDragOver}
      onDrop={handleDrop}>
      <div className="zoo-box-list">
        {data.map((zoo, index) => (
          <div className="zoo-box" key={index}>
            <div
              className="zoo"
              id={zoo}
              draggable
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}>
              {zoo}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// useEffect(() => {
//   const eles = [
//     document.getElementById("zoo-1")!,
//     document.getElementById("zoo-2")!,
//     document.getElementById("zoo-3")!,
//   ];

//   console.log(eles);

//   const handleDragStart = (event: DragEvent) => {
//     event.dataTransfer?.setData("zoo", (event.target as HTMLElement).id);
//   };

//   const handleDragEnd = (event: DragEvent) => {
//     setData((data) =>
//       data.filter((item) => item !== (event.target as HTMLElement).id)
//     );
//     console.log(data);
//   };

//   eles.map((ele) => {
//     ele.draggable = true;
//     ele.addEventListener("dragstart", handleDragStart);
//     ele.addEventListener("dragend", (event: DragEvent) => {
//       handleDragEnd(event);
//       // ele.removeEventListener("dragstart", handleDragStart);
//       // ele.removeEventListener("dragend", handleDragEnd);
//     });
//   });
// }, [data]);
