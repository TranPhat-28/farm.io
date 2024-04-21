import "./App.css";
import { SidebarLayout } from "./layouts";
import Background from "./assets/background.svg";
import { useState } from "react";

type DynamicZoo = {
  zoo: string;
  x: number;
  y: number;
};

function App() {
  const [data, setData] = useState<DynamicZoo[]>([]);
  const handleDragOver = (event: React.DragEvent) => event.preventDefault();
  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const id = event.dataTransfer!.getData("zoo");
    const dynamicZoo: DynamicZoo = {
      zoo: id,
      x: event.clientX,
      y: event.clientY,
    };
    setData((data) => [...data, dynamicZoo]);
  };

  // -------------------
  const handleDragStart = (event: React.DragEvent) => {
    event.dataTransfer?.setData("zoo-in", (event.target as HTMLElement).id);
  };

  const handleDragEnd = (event: React.DragEvent) => {
    setData((data) =>
      data.filter((item) => item.zoo !== (event.target as HTMLElement).id)
    );
  };
  // -------------------
  // const handleDragOverOnMov = (event: React.DragEvent) =>
  //   event.preventDefault();
  // const handleDrop2 = (event: React.DragEvent) => {
  //   event.preventDefault();
  //   const id = event.dataTransfer!.getData("zoo");
  //   const dynamicZoo: DynamicZoo = {
  //     zoo: id,
  //     x: event.clientX,
  //     y: event.clientY,
  //   };
  //   setData((data) => [...data, dynamicZoo]);
  // };

  return (
    <SidebarLayout>
      <>
        <img src={Background} alt="background" className="background" />
        <div
          className="drop-area"
          id="drop-area"
          onDragOver={handleDragOver}
          onDrop={handleDrop}>
          {data.map((zoo, index) => (
            <div
              key={index}
              className="zoo"
              id={zoo.zoo}
              style={{
                position: "absolute",
                top: zoo.y,
                left: zoo.x,
                transform: "translate(-50%, -50%)",
              }}
              draggable
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}>
              {zoo.zoo}
            </div>
          ))}
        </div>
      </>
    </SidebarLayout>
  );
}

export default App;
