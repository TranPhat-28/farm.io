import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICoordinate, IPet, IPetState } from "../../interfaces";
import { randomizeCoordinate } from "../../utilities/helpers";

const initialState: IPetState = {
  petsInStock: [],
  petsInFarm: [],
};

export const petSlice = createSlice({
  name: "pet",
  initialState,
  reducers: {
    setPetsInStock: (state, action: PayloadAction<IPet[]>) => {
      state.petsInStock = action.payload;
    },
    setPetsInFarm: (state, action: PayloadAction<IPet[]>) => {
      const pets = action.payload;
      const petsWithCoordinates: (IPet & ICoordinate)[] = pets.map((pet) => {
        const { x, y } = randomizeCoordinate();
        return { ...pet, x, y };
      });
      state.petsInFarm = petsWithCoordinates;
    },
    moveToFarm: (state, action: PayloadAction<IPet>) => {
      const pet = action.payload;
      const { x, y } = randomizeCoordinate();
      state.petsInStock = state.petsInStock.filter(
        (petInStock) => petInStock.id !== pet.id
      );
      state.petsInFarm.push({ ...pet, x, y });
    },
    moveToStock: (state, action: PayloadAction<IPet>) => {
      const pet = action.payload;
      state.petsInFarm = state.petsInFarm.filter(
        (petInFarm) => petInFarm.id !== pet.id
      );
      state.petsInStock.push(pet);
      state.petsInStock = state.petsInStock
        .slice()
        .sort((prev, next) => (prev.isOwned > next.isOwned ? -1 : 0));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPetsInStock, setPetsInFarm, moveToFarm, moveToStock } =
  petSlice.actions;

export default petSlice.reducer;
