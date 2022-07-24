FROM gitpod/workspace-full:latest

USER gitpod

RUN npm i jest@26 @learnpack/learnpack -g && learnpack plugins:install @learnpack/react
