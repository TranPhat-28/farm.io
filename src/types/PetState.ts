import { ICoordinate, IPet } from "./pet";

export interface IPetState {
  petsInStock: IPet[];
  petsInFarm: (IPet & ICoordinate)[];
}


