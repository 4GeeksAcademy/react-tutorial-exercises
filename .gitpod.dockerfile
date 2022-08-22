FROM gitpod/workspace-full:latest

USER gitpod

RUN npm i jest@25.5.4 @learnpack/learnpack@2.1.18 -g && learnpack plugins:install @learnpack/react@1.1.5
