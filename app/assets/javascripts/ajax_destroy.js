$(document).on('turbolinks:load', function(){
  $('.destroy').on('click', function(){
    if(confirm ("Are you sure you wish to delete this location?")){
      $.ajax({
        url: '/locations/' + this.parentElement.id,
        type: 'DELETE',
        success: function(response){
          // console.log(response);
        }
      });
    }
  });
});
