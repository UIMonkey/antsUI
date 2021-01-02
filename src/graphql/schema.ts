import { gql } from "@apollo/client";

export const GET_ANTS = gql`
query {
    ants {
      name
      colony
      location {
        latitude
        longitude
      }
      destination {
        latitude
        longitude
      }
      heading
      speed
      health
      }
 }
`