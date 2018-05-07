FROM alpine:latest
MAINTAINER smccartney

# update alpine linux
RUN apk update && apk upgrade && \
    apk add nodejs && \
    apk add nodejs-npm && \
    npm install -g @angular/cli@latest

# add source code to images
ADD . /hockey-stats

# switch working directory
WORKDIR /hockey-stats

# install dependencies
RUN npm install

# expose port 4200
EXPOSE 4200

# run ng serve on localhost
CMD ["ng","serve", "--host", "0.0.0.0", "--disable-host-check"]
