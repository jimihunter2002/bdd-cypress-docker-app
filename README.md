# CREW APPLICATION

Simple application which represents dashboard with candidates.

### Running app and test locally

1. `yarn install`

2. `yarn start`

App will be available on http://localhost:3000

after steps 1 and 2
run `yarn cypress` from `e2e` directory to see tests running in browser

after steps 1 and 2
run `yarn test:all` from `e2e` directory to run tests on cli

### Running in docker

`docker build -t crew-app .`

`docker run -it --rm -p 5000:5000 --name crew-container crew-app`

App will be available on http://localhost:5000

### Running tests in docker

from project root run command `yarn docker:e2e`
