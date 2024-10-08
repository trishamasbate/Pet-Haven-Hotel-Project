import { gql } from '@apollo/client';

// Define the REGISTER_USER mutation with the appropriate input types.
export const REGISTER_USER = gql`
  mutation register(
    $firstName: String!,
    $lastName: String!,
    $username: String!,
    $email: String!,
    $password: String!,
    $pets: [PetInput!]!
  ) {
    register(
      firstName: $firstName,
      lastName: $lastName,
      username: $username,
      email: $email,
      password: $password,
      pets: $pets
    ) {
      token
      user {
        _id  # Changed from id to _id
        firstName
        lastName
        email
        pets {
          name
          gender
          age
          breed
          notes
        }
      }
    }
  }
`;

// Define the LOGIN_USER mutation for user authentication.
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id  # Changed from id to _id
        username
        firstName
        lastName
        email
        pets {
          name
          gender
          age
          breed
          notes
        }
      }
    }
  }
`;

// Define the BOOK_SERVICES mutation to book services for a user.
export const BOOK_SERVICES = gql`
  mutation BookServices($userId: ID!, $serviceIds: [ID!]!) {
    bookServices(userId: $userId, serviceIds: $serviceIds) {
      _id  # Changed from id to _id
      user {
        _id  # Changed from id to _id
        username
      }
      services {
        _id  # Changed from id to _id
        name
        price
      }
    }
  }
`;

// Define the REMOVE_SERVICE_FROM_BOOKING mutation to remove a service from a booking.
export const REMOVE_SERVICE_FROM_BOOKING = gql`
  mutation RemoveServiceFromBooking($bookingId: ID!, $serviceId: ID!) {
    removeServiceFromBooking(bookingId: $bookingId, serviceId: $serviceId) {
      _id  # Changed from id to _id
      services {
        _id  # Changed from id to _id
        name
        price
      }
    }
  }
`;

// Define the CANCEL_BOOKING mutation to cancel a booking.
export const CANCEL_BOOKING = gql`
  mutation CancelBooking($bookingId: ID!) {
    cancelBooking(bookingId: $bookingId) {
      _id  # Changed from id to _id
      status
      refundIssued
    }
  }
`;