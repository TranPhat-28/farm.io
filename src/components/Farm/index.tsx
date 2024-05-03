import "./style.scss";
import type { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { moveToStock } from "../../redux/features/petSlice";
import { Specie } from "../../types";
import { Iceye, Lemon, Red } from "../../pets";

export const Farm = () => {
  const petsInFarm = useSelector((state: RootState) => state.pet.petsInFarm);
  const dispatch = useDispatch();
  return (
    <div className="farm">
      <img src="assets/backgrounds/background.svg" alt="" />
      {petsInFarm.map(pet => {
        return (
          <div
            key={pet.id}
            style={{
              position: "absolute",
              top: pet.y + "%",
              left: pet.x + "%",
              transform: "translate(-50%, -50%)",
            }}
            onClick={() => dispatch(moveToStock(pet))}>
            {(() => {
              switch (pet.specie) {
                case Specie.RED:
                  return <Red />;
                case Specie.LEMON:
                  return <Lemon />;
                case Specie.ICEYE:
                  return <Iceye />;
                default:
                  return <div style={{ color: "white" }}>Pet's is not found</div>;
              }
            })()}
          </div>
        );
      })}
    </div>
  );
};
