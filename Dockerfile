FROM node:16

ENV NODE_ENV development

WORKDIR /Volumes/kdk/portfoliowebsite

COPY . . 

RUN npm install 
RUN npm run build 

EXPOSE 80

CMD [ "./build/index.js" ]
