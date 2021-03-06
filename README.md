[![Build Status](https://travis-ci.org/joejknowles/Open-Up.svg?branch=master)](https://travis-ci.org/joejknowles/Open-Up)
[![Coverage Status](https://coveralls.io/repos/github/joejknowles/Open-Up/badge.svg?branch=master)](https://coveralls.io/github/joejknowles/Open-Up?branch=master)
[![Dependency Status](https://gemnasium.com/badges/github.com/joejknowles/Open-Up.svg)](https://gemnasium.com/github.com/joejknowles/Open-Up)
[![Code Climate](https://codeclimate.com/github/joejknowles/Open-Up/badges/gpa.svg)](https://codeclimate.com/github/joejknowles/Open-Up)
[![Issue Count](https://codeclimate.com/github/joejknowles/Open-Up/badges/issue_count.svg)](https://codeclimate.com/github/joejknowles/Open-Up)

# Open-Up
Booking platform

Master branch hosted on heroku: [here](http://open-up.herokuapp.com/)

Work in progress booking platform. Written in React with a Rails api, fully tested with unit tests [for the front end](https://github.com/joejknowles/Open-Up/tree/master/client/src/__tests__) in jest and [for the backend](https://github.com/joejknowles/Open-Up/tree/master/spec/models) with Rspec and [end to end integration tests](https://github.com/joejknowles/Open-Up/tree/master/spec/features) using a headless browser with capybara.

#Running

###rails

run server with: rails s
run tests with: rspec

###react client

  from client directory:

  `npm start`
    Starts the development server.

  `npm run build`
    Bundles the app into static files for production.

  `npm test`
    Starts the test runner.

  `npm run eject`
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd client
  npm start

###Automated tasks

  `rake refresh`
    deletes all bookings and creates new slots

  `rake test`
    builds the js then runs all tests - node and ruby

  `rake push`
    runs `rake test` then adds, commits and pushes to default git remote if the tests pass
