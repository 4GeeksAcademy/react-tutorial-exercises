FROM gitpod/workspace-full:latest

USER gitpod

RUN npm i jest@24.8.0 @learnpack/learnpack@2.1.26 -g && learnpack plugins:install learnpack-react
