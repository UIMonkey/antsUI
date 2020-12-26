import { IAnt } from "./ant";

export const testAnts: IAnt[] = [
    {
      name: 'Dave',
      location: {
        latitude: 51.32476,
        longitude: 9.543
      },
      health: 100,
      destination: {
        latitude: 50.32476,
        longitude: 8.543
      },
      heading: 90,
      speed: 5,
      colony: 'Red'
    },
    {
      name: 'Kim',
      location: {
        latitude: 51.32476,
        longitude: 8.543
      },
      health: 100,
      destination: {
        latitude: 50.32476,
        longitude: 8.543
      },
      heading: 45,
      speed: 6,
      colony: 'Blue'
    }
  ];