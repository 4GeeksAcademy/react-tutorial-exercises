FROM gitpod/workspace-full:latest

USER gitpod

RUN npm i jest@29.7.0 -g && npm i jest-environment-jsdom@29.7.0 -g && npm i @learnpack/learnpack@2.1.47 -g && learnpack plugins:install @learnpack/react@1.1.14
