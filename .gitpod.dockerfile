FROM gitpod/workspace-full:latest

USER gitpod

RUN npm i jest@25.4.0 @learnpack/learnpack -g && learnpack plugins:install @learnpack/react
