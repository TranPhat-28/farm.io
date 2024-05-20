import { ICoordinate, Specie } from "../interfaces";
import { Rex, Lemon, Iceye } from "../pets";

export const randomizeCoordinate = (): ICoordinate => {
  const xList = [15, 30, 45, 60, 75, 90];
  const yList = [15, 30, 45, 60, 75, 90];

  const randomXListIndex = Math.floor(Math.random() * 100) % xList.length;
  const randomYListIndex = Math.floor(Math.random() * 100) % yList.length;

  return { x: xList[randomXListIndex], y: yList[randomYListIndex] };
};


export const getPetCompBySpecie = (specie: Specie) => {
  switch (specie) {
    case Specie.RED:
      return Rex;
    case Specie.LEMON:
      return Lemon;
    case Specie.ICEYE:
      return Iceye;
  }
};