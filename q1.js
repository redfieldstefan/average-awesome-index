// Write a function that takes an array of data in the below format. 
// Assume that this function is run in a browser. It should update a 
//<p> tag with id="awesome-index" withthe average awesome-index of all programmers. 
// Your solution should continue to work even if more people 
// are added to the array. Write two versions, one using lodash 
// (or underscore) and jQuery, and one using only Javascript utilities native to the browser.

"use strict";

var _ = require('underscore'),
$ = require('jquery');

var programmerIndex = [
  {
    name: 'Bob',
    occupation: 'programmer',
    awesome_index: 34,
  },
  {
    name: 'Alice',
    occupation: 'programmer',
    awesome_index: 26,
  },
  {
    name: 'Zaphod',
    occupation: 'President of the Galaxy',
    awesome_index: 10
  },
   {
    name: 'Mitsy',
    occupation: 'Racecar Driver',
    awesome_index: 38
  },
    {
    name: 'Jimmy',
    occupation: 'Sandwich Chef',
    awesome_index: 88
  }
];

//LODASH + JQUERY
$(document).ready(function() {

  var lodashAverage = function(awesomeArray) {
    var awesomeSum = _.reduce(awesomeArray, function(accumulator, person) {
      return accumulator + person.awesome_index;
    }, 0);

    return awesomeSum / awesomeArray.length;
  };

  $('.average-index .lodash button').click(function(){
    $('.average-index .lodash p').replaceWith('<p> <em>_.</em> and <em>$</em> example: ' + lodashAverage(programmerIndex) + '</p>' );
  });

});


//NATIVE

// NOTE FOR REVIEW: I do know that forEach and .reduce exist, just used a for loop 
// for browser support/demonstrating how we would have solved it in foundtations 2

function nativeAverage(array) {
    
  var sum = 0;
  var average = 0;

  for(var i = 0; i < array.length; i++){
    sum = sum + array[i].awesome_index;
    average = sum/(i+1);
  }

  return average;
}

var nativeButton = document.querySelector('.native button');
var nativeP = document.querySelector('.native p');

nativeButton.addEventListener('click', function(){
  nativeP.innerHTML = '<em>Native JS</em> example: ' + nativeAverage(programmerIndex) ;
});