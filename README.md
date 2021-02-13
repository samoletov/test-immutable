# Immutable test

HTTP service implementation with swagger docs using Next.js. See description below

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Description

Design a parking service system. The service offers parking in addition to refueling to vehicles that require it, there are two employees who work on commission and get paid different rates.
The system is responsible for assigning the workload equally between the two employees in a way that favours profit.

- Small cars pay a flat rate of $25 for parking and large vehicles pay $35.
- Every car with 10% or less fuel, will be refueled to maximum capacity and charged the fuel amount in addition to the parking fee.
- Employee A gets paid 11% commission over the final amount paid, while employee B gets paid 15%.
- Fuel has a fixed rate of $1.75/litre.

Requirements:

- Your application should print a JSON-formatted array of assignments in the following format:

```json
{
  "licencePlate": string,
  "employee": string,
  "fuelAdded": float, // Amount of fuel added in litres
  "price": float
}
```

- Input for your application:

```json
[
  {
    "licencePlate": "A",
    "size": "large",
    "fuel": {
      "capacity": 57,
      "level": 0.07
    }
  },
  {
    "licencePlate": "B",
    "size": "large",
    "fuel": {
      "capacity": 66,
      "level": 0.59
    }
  },
  {
    "licencePlate": "C",
    "size": "large",
    "fuel": {
      "capacity": 54,
      "level": 0.49
    }
  },
  {
    "licencePlate": "D",
    "size": "large",
    "fuel": {
      "capacity": 79,
      "level": 0.93
    }
  },
  {
    "licencePlate": "E",
    "size": "large",
    "fuel": {
      "capacity": 94,
      "level": 0.2
    }
  },
  {
    "licencePlate": "F",
    "size": "large",
    "fuel": {
      "capacity": 57,
      "level": 0.1
    }
  },
  {
    "licencePlate": "G",
    "size": "small",
    "fuel": {
      "capacity": 56,
      "level": 0.05
    }
  },
  {
    "licencePlate": "H",
    "size": "small",
    "fuel": {
      "capacity": 61,
      "level": 0.78
    }
  },
  {
    "licencePlate": "I",
    "size": "small",
    "fuel": {
      "capacity": 60,
      "level": 0.65
    }
  },
  {
    "licencePlate": "J",
    "size": "large",
    "fuel": {
      "capacity": 63,
      "level": 0.01
    }
  }
]
```
