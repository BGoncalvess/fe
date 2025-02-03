# mfe.host

## Introduction

This directory contains all the test files for the microfrontends in this repository. The tests are organized into three main categories:

- **Unit Tests**: Validate the functionality of individual components or modules.
- **Integration Tests**: Test the interaction between multiple components or modules within a single microfrontend.
- **Cross-MFE Tests**: Ensure proper communication and interaction between different microfrontends.

## Installation

1. Necessary Dependencies
    Navigate to the project directory and install the dependencies:
    ```bash
    cd tests
    npm install
    ```

## Running the Application

### Run all tests

To execute all tests:
```bash
npm run test
```

### Run specific tests

1. Run unit tests
    ```bash
    npm run test -- tests/unit
    ```
2. Run integration tests
    ```bash
    npm run test -- tests/integration
    ```
2. Run cross microfrontend tests
    ```bash
    npm run test -- tests/cross
    ```
