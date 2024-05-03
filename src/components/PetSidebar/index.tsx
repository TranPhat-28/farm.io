import "./style.scss";
import type { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { moveToFarm } from "../../redux/features/petSlice";
import { Specie } from "../../types";
import { Iceye, Lemon, Red } from "../../pets";

export const PetSidebar = () => {
  const petsInStock = useSelector((state: RootState) => state.pet.petsInStock);
  const dispatch = useDispatch();
  return (
    <div className="pet-sidebar">
      <div className="pet-list">
        {petsInStock.map(pet => (
          <div key={pet.id} className="pet" onClick={() => dispatch(moveToFarm(pet))}>
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
        ))}
      </div>
    </div>
  );
};
