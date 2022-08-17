FROM gitpod/workspace-full:latest

USER gitpod

RUN npm i jest@26.6.3 @learnpack/learnpack@2.1.18 -g && learnpack plugins:install @learnpack/react
