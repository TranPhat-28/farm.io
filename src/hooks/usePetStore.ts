import { create } from 'zustand';
import type { Coordinate, Pet } from '../types';
import { ramdomozeCoordinate } from '../utilities/helpers';

interface IUsePetStore {
  petsInStock: Pet[],
  petsInFarm: (Pet & Coordinate)[],
  setPetsInStock: (pets: Pet[]) => void,
  setPetsInFarm: (pets: Pet[]) => void,
  moveToFarm: (pet: Pet) => void,
  moveToStock: (pet: Pet) => void;
}

export const usePetStore = create<IUsePetStore>((set) => ({
  petsInStock: [],

  petsInFarm: [],

  setPetsInStock: (pets: Pet[]) => set(state => ({
    ...state,
    petsInStock: pets
  })),

  setPetsInFarm: (pets: Pet[]) => set(state => {
    const petsInFarm: (Pet & Coordinate)[] = [];
    pets.map(pet => {
      const { x, y } = ramdomozeCoordinate();
      petsInFarm.push({ ...pet, x, y });
    });
    return {
      ...state,
      petsInFarm
    };
  }),

  moveToFarm: (pet: Pet) => set(state => {
    const { x, y } = ramdomozeCoordinate();
    return {
      petsInStock: state.petsInStock.filter(petInStock => petInStock.id !== pet.id),
      petsInFarm: [...state.petsInFarm, { ...pet, x, y }]
    };
  }),

  moveToStock: (pet: Pet) => set(state => ({
    petsInStock: [...state.petsInStock, pet],
    petsInFarm: state.petsInFarm.filter(petInFarm => petInFarm.id !== pet.id)
  }))
}));
