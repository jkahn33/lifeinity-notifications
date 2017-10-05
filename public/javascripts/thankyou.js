function thankYou(){
   var facebook = "https://www.facebook.com/Lifeinity/";
   var instagram = "https://www.instagram.com/lifeinity/";
   var currentBuild = $('<div id="thanks" style="padding-top:160px"/>');
   currentBuild.append('<h1 id="thanksHeader">Thank You for Registering!</h1>')
               .append('<h3 id="moreInfo">More Info Will Come Soon!</h3>');
   currentBuild.appendTo($("body"));
   currentBuild = $('<form action="/" method="get"><button type="submit" id="goBack" class="btn btn-danger">Click here to register a new name or number!</button></form>');
   currentBuild.appendTo($("body"));
   $('#goBack').css({'margin':'auto auto 20px',
                     'display':'block'});
   $('#thanksHeader').css({'color':'white',
                           'text-align':'center',
                           'font-family':'\'Questrial\', sans-serif',
                           'font-weight':'100'});
   $('#moreInfo').css({'color':'white',
                           'text-align':'center',
                           'font-family':'\'Questrial\', sans-serif',
                           'font-weight':'100'});
   currentBuild = $('<table id="socialTable" align="center"/>')
           .append($("<tr/>")
           .append('<a class="btn btn-social-icon btn-twitter" id="twLink"><span class="fa fa-twitter"></span></a>')
           .append('<a class="btn btn-social-icon btn-facebook" href=' + facebook + ' id="faLink"><span class="fa fa-facebook"></span></a>')
           .append('<a class="btn btn-social-icon btn-instagram" href=' + instagram + ' id="inLink"><span class="fa fa-instagram"></span></a>'));
   currentBuild.appendTo($("body"));
   $('#twLink').css({'margin-left':'10px', 'margin-bottom':'5px'});
   $('#faLink').css({'margin-left':'10px', 'margin-bottom':'5px'});
   $('#inLink').css({'margin-left':'10px', 'margin-bottom':'5px'});
}
