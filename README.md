# Microfrontend Project

## Introduction
React component library.
This project is intended for building a design system using React components.

## Getting started
1. Clone the repository: `git clone git@github.com:CorreiosPortugal/pt.galaxy.fe.git`
2. Navigate to directory:`cd <project-root-directory>`
3. Install dependencies: `sh cli/setup.sh`

## Running the Project
To visualize the final result in the host, all microfrontends need to be running simultaneously.

1. Navigate to the `mfe.host` directory and start the project in development mode:
    ```bash
    cd mfe.host
    npm run dev
    ```
2. Open a new terminal, navigate to the `mfe.assistant` directory and start the project in development mode:
    ```bash
    cd mfe.assistant
    npm run dev
    ```
3. To preview the project in production mode, use the following commands:
    ```bash
    cd mfe.host
    npm run prod-preview

    cd mfe.assistant
    npm run prod-preview
    ```

## Usage
Once both projects are running, you can access the application by navigating to `http://localhost:5000` in your web browser. The `mfe.host` will handle the routing and integration of the `mfe.assistant`.