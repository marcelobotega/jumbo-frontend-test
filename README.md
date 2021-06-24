# Jumbo Store List

This project takes stores and cities data from a json file and renders them.

On the stores page it is possible to search for them through a text field and 
the store closing time, it's also possible to see their location on Google Maps.

On the cities page it is possible to see the list of cities, sort them alphabetically,
search the cities through a text field and look at the stores in that city through a 
expansion panel in the city card.

The project is also fully responsive.

The project is running on [GitHub Pages](https://marcelobotega.github.io/jumbo-frontend-test/).


## Install and Running

1. Clone this repository:
```
git clone https://github.com/marcelobotega/jumbo-frontend-test.git
```
2. Install
```
npm install
```
3. Run
```
npm run serve
```
4. You can access the project via
```
http://localhost:8080/
```

## Unit tests

For the unit tests:
```
npm run test:unit
```
Code coverage report is located at ./coverage/lcov-report/index.html and 
can be re-generated via the command above

### Lints and fixes files
```
npm run lint
```
