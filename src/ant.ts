export interface IPosition {
    latitude: number;
    longitude: number;
}

export interface IAnt {
    name: string;
    location: IPosition;
    health: number;
    destination?: IPosition;
    heading: number;
    speed: number;
    colony: string;
}