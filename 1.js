 $(function(){
    
    $(".btnxuong, .kn").click(function() {
       $("body,html").animate({scrollTop:$('#khoiedu').offset().top}, 500); 
    });

    $(".sp").click(function() {
       $("body,html").animate({scrollTop:$('#khoisp').offset().top}, 500); 
    });
});  
 