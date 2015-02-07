$(document).ready( function() {
  $('table').append('<tbody></tbody>');
  
  for(var i = 0; i < 16; i++) {
    $('tbody').append('<tr></tr>');
  };

  for(var j = 0; j < 16; j++) {
    $('tr').append('<td></td>');
  };


  $('td').append('<div class="grid"></div>');

  $('.grid').hover( function() {
    $(this).addClass("painted");
  });

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

  $('.reset').on('click', function() {
    $('.grid').removeClass("painted");
  });
}); 