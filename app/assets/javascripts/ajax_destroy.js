// ajax impimentation of destroy
$(document).on('turbolinks:load', function(){
  $('.destroy').on('click', function(){
    if(confirm ("Are you sure you wish to delete this location?")){
      $.ajax({
      // if just a button and not a drop down
        // url: '/locations/' + this.parentElement.id,
      // if in a bootstrap dropdown menu
        url: '/locations/' + this.parentElement.parentElement.parentElement.id,
        type: 'DELETE',
        success: function(response){
          // console.log(response);
        }
      });
    }
  });
});
