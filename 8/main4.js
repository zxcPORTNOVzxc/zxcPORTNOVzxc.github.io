$("#tuda").on("click", function(){
  var fio = $("#fio").val().trim();
  var email = $("#email").val().trim();
  var message = $("#message").val().trim();
  if (fio == "")
  {
    $("#result").text("Ашыбка");
    return false;
  } else 
    if (email == "")
    {
      $("#result").text("Ашыбка");
      return false;
    } else 
      if (message == "")
      {
        $("#result").text("Ашыбка");
        return false;
      }
  $("#result").text("");
  localStorage.setItem('email',email);
  localStorage.setItem('fio',fio);
  localStorage.setItem('message',message);
  $.ajax({
  method: "POST",
      url: "https://formcarry.com/s/xxHnF4-Er8F",
  data: { 'fio':fio, 'email':email, 'message':message }
  })
  $("#result").text("Форма отправлена успешно!");
  $("#email").val("");
  $("#fio").val("");
  $("#message").val("");
});