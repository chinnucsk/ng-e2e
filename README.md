Angular E2E Example
===================

This is an example project that shows how to get end-to-end tests up
and running with Angular, Karma and Grunt.

How does it work?
-----------------

Right now we use
[grunt-scriptlinker](https://github.com/scott-laursen/grunt-scriptlinker)
to insert, and later remove, scripts in the `index.html` file.
However, it's possible that there is a more elegant solution. Other
approaches can be found here:

http://stackoverflow.com/questions/12401998/have-grunt-generate-index-html-for-different-setups

Running the tests
-----------------

Right now it is necessary to start the Grunt server first and then run
the tests separately:

    grunt server
    # Run this in a separate terminal:
    grunt test
