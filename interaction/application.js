//When document is ready, create 16 x 16 grid as default
$(document).ready( function() {
  $('table').append('<tbody></tbody>');
  
  for(var i = 0; i < 16; i++) {
    $('tbody').append('<tr></tr>');
  };

  for(var j = 0; j < 16; j++) {
    $('tr').append('<td></td>');
  };


  $('td').append('<div class="grid"></div>');

//When div is hovered, style it to the paint value
  $('.grid').hover( function() {
    $(this).addClass("painted");
  });
//Rescale button, removes styling of painted,
//Empties table body, prompts user for input
//Uses user input to create table again 
  $('.rescale').on('click', function() { 
    $('.grid').removeClass("painted");
    $('tbody').empty();
    var row = prompt("How many rows?", "Put your number here");
    var column = prompt("How many columns?", "Put your number here");
    for(var v = 0; v < row; v++){
      $('tbody').append('<tr></tr>');
    }
    for(var b = 0; b < column; b++) {
      $('tr').append('<td></td>');
    }

    $('td').append('<div class="grid"></div>');

    $('.grid').hover( function() {
      $(this).addClass("painted");
    });

  });
//Removes painted styling, keeps grid dimensions
  $('.reset').on('click', function() {
    $('.grid').removeClass("painted");
  });
}); 

