FROM gitpod/workspace-full:latest

USER gitpod

RUN npm i jest@24.8.0 learnpack@0.0.97 -g && learnpack plugins:install learnpack-react@0.0.13
