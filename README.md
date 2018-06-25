# Pixel Art Maker Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions

To get started, open `designs.js` and start building out the app's functionality.
For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

link to Abosedepixelartmaker
https://abosedeogunji.github.io/Abosedepixelartmaker/

the $('tr').remove(); method takes the elements out of the DOM. it is used to remove the element itself, as well as everything inside it.
after a nestted for loop was used with a starting point of 1 and an end point of row and column respectively.
for (var i = 1; i <= row; i++) {
     $('#pixelCanvas' ).append('<tr></tr>');
the first for loop inserts/adds the table row element as the last child in the jQuery collection.
while the second for loop 
for (var j = 1; j <=column; j++) {
         $('tr').filter('tr:last').append('<td></td>');
       }
selects the <tr> element by filtering the current jQuery collection and matching the last element within it and it adds the <td></td> element as the last child in the jQuery collection.
  the addColor function 
color = $('#colorPicker').val();
  allows you to set the value of each element in the set of matched elements and assigns it to the variable color the uses the if else statement to check if the value correspond
  The attr() method sets or returns the style attributes and values of the input element,
  if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
The removeAttr() removes style attributes from the selected elements.
  else it sets or returns these attributes plus and the color variale to the element .
  The event.preventDefault() Prevent the submit button from submitting the form, this method stops the default action of an element from happening.
  $('#sizePicker').submit(function (event) {
    event.preventDefault();
    row = $('#inputHeight').val();
    column = $('#inputWeight').val();
    makeGrid(row, column);
    addColor();
});
row = $('#inputHeight').val() allows you to set the value of the input element with id='inputHeight' in the set of matched elements and assigns it to the variable row.
  also does the same thing for  column = $('#inputWeight').val();
  
 after this we then call or invoke the function makeGrid(row, column); and addColor(); because if the functions are not invoked the function would not be executed. 

I also modified my html and css code for better presentation and testing of some of the thing learnt. 
  

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
