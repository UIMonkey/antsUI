export interface IPosition {
    latitude: number;
    longitude: number;
}

export class Position implements IPosition {
    latitude;
    longitude;
    constructor(latitude=0, longitude=0) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

export enum Colony {
    Blue = 'Blue',
    Red = 'Red',
    Yellow = 'Yellow',
    Green = 'Green',
    Purple = 'Purple'
}

export interface IAnt {
    name: string;
    location: IPosition;
    health: number;
    destination?: IPosition;
    heading: number;
    speed: number;
    colony: Colony;
}

export class Ant implements IAnt {
    name;
    health;
    speed = 0;
    heading;
    colony;
    location = new Position();
    destination = new Position();

    constructor(name='', health=100, heading=90, colony=Colony.Blue) {
        this.name = name;
        this.health = health;
        this.heading = heading;
        this.colony = colony;
    }
}