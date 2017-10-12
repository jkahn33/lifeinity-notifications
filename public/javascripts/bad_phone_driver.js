/*globals jQuery */
var dName;
var dNum;
var cName;
var cNum;
function checkDPhone(){
   console.log("inside checkDPhone");
   if(isNaN(document.dTelInput.value) === true){
      console.log("false");
      return false;
   }
   else{
      console.log("true");
      return true;
   }
}
function checkUPhone(){
   if(isNaN(document.uTelInput.value) === true){
      return false;
   }
   else{
      return true;
   }
}
function createInfoTable()
{

   dName = false;
   var box;
   currentBuild = $("<table id='theTable'/>");
   currentBuild.append($("<tr/>")
           .append($("<th id='driverHead'>Notifications for Drivers</th>"))
           .append($("<th id='userHead'>Notifications for Users</th>")));
   currentBuild.appendTo($("body"));
   var currentBuild = $('<div class="alert alert-danger"id="dBadPhone"role="alert"/>');
   currentBuild.append($('<strong>Please make sure you have entered a valid phone number.</strong>'));
   $(currentBuild).insertAfter('#theTable');
   $('#theTable').css({'width':'100%'});
   $("#driverHead").css({'color':'white',
                         'font-family':'\'Questrial\', sans-serif',
                         'text-align':'center',
                         'font-weight':'100',
                         'font-size':'25px',
                         'padding-bottom':'40px'});
   $("#userHead").css({'color':'white',
                       'font-family':'\'Questrial\', sans-serif',
                       'text-align':'center',
                       'font-weight':'100',
                       'font-size':'25px',
                       'padding-bottom':'40px'});
   currentBuild = $("<tr id='inputs'/>");
   currentBuild.append($("<td id='dInput'/>"));
   $("#theTable").append(currentBuild);
   currentBuild = '<form id="dForm" action="/addDriver" method="post"><div class="form-group">';
   currentBuild += '<label id="dNameLabel" for="name">Name:</label>';
   currentBuild += '<input class="form-control" id="dNameInput" placeholder="Enter name" name="name">';
   currentBuild += '</div>';
   currentBuild += '<div class="form-group">';
   currentBuild += '<label id="dTelLabel" for="phone">Phone Number:</label>';
   currentBuild += '<input type="tel" class="form-control" id="dTelInput" placeholder="Enter phone number" name="phone">';
   currentBuild += '</div><button type="submit" id="dSubmit" class="btn btn-primary">Submit</button></form>';
   $("#dInput").append(currentBuild);
   $('#dForm').submit(function(){
      console.log("inside check");
   });
   $("#dInput").css({'width':'40%','padding':'10px'});
   $("#dNameLabel").css({'color':'white',
                       'font-family':'\'Questrial\', sans-serif',
                       'font-weight':'100',
                       'font-size':'15px'});
   $("#dTelLabel").css({'color':'white',
                       'font-family':'\'Questrial\', sans-serif',
                       'font-weight':'100',
                       'font-size':'15px'});
   currentBuild = $("<td id='uInput'/>");
   $("#inputs").append(currentBuild);
    currentBuild = '<form action="/addUser" method="post"><div class="form-group">';
    currentBuild += '<label id="uNameLabel" for="name">Name:</label>';
    currentBuild += '<input class="form-control" id="uNameInput" placeholder="Enter name" name="name"></div>';
    currentBuild += '<div class="form-group">';
    currentBuild += '<label id="uTelLabel" for="phone">Phone Number:</label>';
    currentBuild += '<input type="tel" class="form-control" id="uTelInput" placeholder="Enter phone number" name="phone"></div>';
    currentBuild += '<button type="submit" id="uSubmit" class="btn btn-primary" onSubmit="checkUPhone();">Submit</button></form>';
    $("#uInput").append(currentBuild);
    $("#uInput").css({'width':'40%','padding':'10px'});
    $("#uNameLabel").css({'color':'white',
                        'font-family':'\'Questrial\', sans-serif',
                        'font-weight':'100',
                        'font-size':'15px'});
    $("#uTelLabel").css({'color':'white',
                        'font-family':'\'Questrial\', sans-serif',
                        'font-weight':'100',
                        'font-size':'15px'});
    $('#dInput').css({'border-right':'5px solid white'});
}

var currentBuild = $("<div class='footer'/>");
currentBuild.append($('<table id="socialTable" style="position:absolute;bottom:0px;"/>')
        .append($("<tr id='iconId'/>")));
currentBuild.appendTo($("body"));
currentBuild = $("<a class='btn btn-block btn-social btn-twitter'/>")
         .append($("<span class='fa fa-twitter'/>"));
currentBuild.appendTo($("iconId"));

function createSocialTable()
{
   var facebook = "https://www.facebook.com/Lifeinity/";
   var instagram = "https://www.instagram.com/lifeinity/";
   var currentBuild = $('<table id="socialTable" style="position:absolute;bottom:0px;margin:0px auto;"/>')
           .append($("<tr/>")
           .append('<a class="btn btn-social-icon btn-twitter" id="twLink"><span class="fa fa-twitter"></span></a>')
           .append('<a class="btn btn-social-icon btn-facebook" href=' + facebook + ' id="faLink"><span class="fa fa-facebook"></span></a>')
           .append('<a class="btn btn-social-icon btn-instagram" href=' + instagram + ' id="inLink"><span class="fa fa-instagram"></span></a>'));
   currentBuild.appendTo($("body"));
   $('#twLink').css({'margin-left':'10px', 'margin-bottom':'5px'});
   $('#faLink').css({'margin-left':'10px', 'margin-bottom':'5px'});
   $('#inLink').css({'margin-left':'10px', 'margin-bottom':'5px'});
}
