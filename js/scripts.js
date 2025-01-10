/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

$( document ).ready(function() {

    $("#submitButton").click(function(){
        var fname = $("#name").val();
        var mail = $("#email").val();
        var messages = $("#message").val();

        var form_data = {
            fullname : fname,
            email : mail,
            message: messages
        };  

        $.ajax({
        	url : "submitemail.php",
        	type : "POST",
        	data : form_data,
        	dataType: "json",
          success: function(response){
            console.log(success);
          }
        });
    });
});