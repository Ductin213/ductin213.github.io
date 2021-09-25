 $(function(){
    
    $(".btnxuong, .kn").click(function() {
       $("body,html").animate({scrollTop:$('#khoiedu').offset().top}, 500);
       return false; 
    });

    $(".sp").click(function() {
       $("body,html").animate({scrollTop:$('#khoisp').offset().top}, 500); 
       return false;
    });
    $(".cm").click(function() {
       $("body,html").animate({scrollTop:$('#khoicomment').offset().top}, 500); 
       return false;
    });
});  
 