# MFE HOST

## Introduction

This project is a microfrontend host (shell) project that has access to all the files exposed by the other microfrontends. It is responsible for the primary routing and integrates all the other microfrontends.

## Installation

### Steps to Clone the Repository

1. Clone the repository:

    ```bash
    git clone git@github.com:CorreiosPortugal/pt.galaxy.fe.git
    ```

## Running the Application

### Development Server

1. Necessary Dependencies
    Navigate to the project directory and install the dependencies:
    ```bash
    cd mfe.host
    npm install
    ```

2. To start the development server, run:

```bash
npm run dev
```

This will start the application at `http://localhost:5000/`.

### Production Preview

To preview the production build, run:

```bash
npm run prod-preview
```
