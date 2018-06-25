// Select color input
// Select size input
var row, column, color;
function makeGrid(row, column) {

 // Your code goes here!

 $('tr').remove();
 for (var i = 1; i <= row; i++) {
     $('#pixelCanvas' ).append('<tr></tr>');
     for (var j = 1; j <=column; j++) {
         $('tr').filter('tr:last').append('<td></td>');
       }
   }

    $('td').click(function addColor(){
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    });

}
// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function (event) {
    event.preventDefault();
    row = $('#inputHeight').val();
    column = $('#inputWeight').val();
    makeGrid(row, column);
    addColor();
});
