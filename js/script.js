//Text Change
function textChange(){
    document.getElementById('t_change').innerHTML ="Here Is It....!";
}
function showDate(){
    document.getElementById('s_d').innerHTML=Date();
}

// jQ Templ
$(document).ready(function(){
// counter-up start

    $('.count').counterUp({
        delay: 10,
        time: 1000
    });

    // count2 test

    $("#counter").countMe(10,15);
    $("#num2").countMe(10,20);
    $("#num3").countMe(10,15);

    // countdown 
    
        
		   $("#countdown").countdown360({
       	 radius      : 60,
         seconds     : 60,
         fontColor   : '#FFFFFF',
         autostart   : false,
         onComplete  : function () { console.log('done') }
		   }).start()
		  

        //    image lightbox start

        

})