export enum Specie {
    RED = "red",
    LEMON = "lemon",
    ICEYE = "iceye"
}

export interface IPet {
    id: string;
    specie: Specie;
}

export interface ICoordinate {
    x: number;
    y: number;
}