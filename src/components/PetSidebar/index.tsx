import "./style.scss";
import type { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { moveToFarm } from "../../redux/features/petSlice";
import { IPet } from "../../types";
import { useState } from "react";
import { getPetCompBySpecie } from "../../utilities/helpers";

export const PetSidebar = () => {
  const petsInStock = useSelector((state: RootState) => state.pet.petsInStock);
  const dispatch = useDispatch();
  const [activePet, setActivePet] = useState<IPet | null>(null);

  return (
    <div className="pet-sidebar">
      <div className="pet-list-wrapper">
        <div className="pet-list">
          {petsInStock.map((pet) => (
            <div className="pet-box" key={pet.id} onClick={() => setActivePet(pet)}>
              <div className={`pet ${pet.isOwned ? "owned" : ""} ${pet.isReleased ? "released" : ""}`}>
                {(() => {
                  const PetComp = getPetCompBySpecie(pet.specie);
                  return <PetComp />;
                })()}
              </div>

              {!pet.isOwned && <div className="question-mark">?</div>}
            </div>
          ))}
        </div>
      </div>

      {activePet && (
        <div className="pet-detail">
          <div className="pet-wrapper">
            <div className="pet">
              {(() => {
                const PetComp = getPetCompBySpecie(activePet.specie);
                return <PetComp />;
              })()}
            </div>
          </div>

          <div className="info">
            <span className="specie">{activePet.specie}</span>
            <p className="description">{activePet.description}</p>
          </div>

          <div className="functions">
            <button
              className="farm"
              onClick={() => activePet.isOwned && dispatch(moveToFarm(activePet))}>
              <img src="assets/icons/house.svg" alt="house" />
            </button>
            <button
              className="farm"
              onClick={() => activePet.isOwned && dispatch(moveToFarm(activePet))}>
              <img src="assets/icons/potion.svg" alt="house" />
            </button>
            <button
              className="farm"
              onClick={() => activePet.isOwned && dispatch(moveToFarm(activePet))}>
              <img src="assets/icons/clover.svg" alt="house" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
