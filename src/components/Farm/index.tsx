import "./style.scss";
import type { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { moveToStock } from "../../redux/features/petSlice";
import { Rex, Lemon, Iceye } from "../../pets";
import { Specie } from "../../interfaces";

export const Farm = () => {
  const petsInFarm = useSelector((state: RootState) => state.pet.petsInFarm);
  const dispatch = useDispatch();
  return (
    <div className="farm">
      {petsInFarm.map((pet, index) => {
        return (
          <div
            key={index}
            className="pet"
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
                  return <Rex />;
                case Specie.LEMON:
                  return <Lemon />;
                case Specie.ICEYE:
                  return <Iceye />;
              }
            })()}
          </div>
        );
      })}
    </div>
  );
};
