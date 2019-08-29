FROM gitpod/workspace-full:latest

USER gitpod

RUN npm i jest@24.8.0 -g && npm i breathecode-cli@latest -g
