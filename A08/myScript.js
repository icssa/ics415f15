var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';

var i = 0;
var tempstring = "";
$(document).ready(function () {
  $("#firstitem").click(function () {
    $("#firstitem").text("Hello");

  });
});


$(document).ready(function () {
  $("#faqs dd").hide();
});

$(document).ready(function () {
  $("#faqs dt").click(function () {

    $(this).next("#faqs dd").slideToggle(500);
    $(this).toggleClass("expanded");


  });
});

function getACount() {
event.preventDefault();
  var url= document.getElementById("testurl").value;
//$("#testp").text(url);
    $.ajax({
      url: url,
      type: 'GET',
      success: function (data) {
        $('#testp').html("Links on that page: " + ($(data).find('a').length));
      }
    });

};




