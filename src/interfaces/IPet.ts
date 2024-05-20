export enum Specie {
  RED = "Red",
  LEMON = "Lemon",
  ICEYE = "Iceye",
}

export interface IPet {
  id: string;
  specie: Specie;
  isOwned: boolean;
  isReleased?: boolean;
  description: string;
}

export interface ICoordinate {
  x: number;
  y: number;
}

export interface IPetState {
  petsInStock: IPet[];
  petsInFarm: (IPet & ICoordinate)[];
}
