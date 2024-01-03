
$(document).ready(function(){
  $.ajax({
   url:"se.csv",
   dataType:"text",
   success:function(data)
   {
    var sublimation_data = data.split(/\r?\n|\r/);
    var table_data = '<table class="tablebg">';
    for(var count = 0; count<sublimation_data.length; count++)
    {
     var cell_data = sublimation_data[count].split(";");
     table_data += '<tr>';
     for(var cell_count=0; cell_count<cell_data.length; cell_count++)
     {
      if(count === 0)
      {
       table_data += '<th>'+cell_data[cell_count]+'</th>';
      }
      else
      {
       table_data += '<td class="sublicell">'+cell_data[cell_count]+'</td>';
      }
     }
     table_data += '</tr>';
    }
    table_data += '</table>';
    $('#sublimationtable').html(table_data);
   }
  });

 
});
