$(document).ready(function() {
  $(function() {
    $("#dialog").dialog({
      autoOpen: false
    });
  });
// Validating Form Fields.....
$("#submit").click(function(e) {
  var name = $("#name").val();
  if (name === '') {
    alert("Please enter a name");
    e.preventDefault();
  } else {
    e.preventDefault();
    // var levelChange = function() {
    // window.location.replace("http://reincarnage.herokuapp.com/scores")};

    data = {
      player: name,
      level1: parseInt(sessionStorage.getItem("firstLevelTime")),
      level2: parseInt(sessionStorage.getItem("secondLevelTime")),
      level3: parseInt(sessionStorage.getItem("thirdLevelTime")),
      level4: parseInt(sessionStorage.getItem("fourthLevelTime")),
      total: parseInt(sessionStorage.getItem("totalTimeMS"))
    }
    $.ajax({ url: '/save',
      type: 'POST',
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
      data: data
    });
    $('body').fadeOut(3800, function(){window.location.replace("http://reincarnage.herokuapp.com")});
  }
});
$("#cancel").click(function(e) {
  e.preventDefault();

  $('body').fadeOut(3800, function(){window.location.replace("http://reincarnage.herokuapp.com")});
});

$("#mask").fadeOut(1);

$("#best-times").hover(
  function() {
    console.log('on')
    $("#mask").fadeIn(600);
  },
    function() {
      console.log('off')
      $("#mask").fadeOut(600);}
      );

});
