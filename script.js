// $(document).ready(function() {
//     /* Every time the window is scrolled ... */
//     $(window).scroll( function(){
    
//         /* Check the location of each desired element */
//         $('fadeincontent').each( function(i){
            
//             var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
            
//             /* If the object is completely visible in the window, fade it it */
//             if( bottom_of_window > bottom_of_object ){
                
//                 $(this).animate({'opacity':'1'},400);
                    
//             }
            
//         }); 
    
//     });
    
//     $("#logo").mouseenter(function(){
//         $("span").slidedown();
//     })
// });


$(document).ready(function(){
    // var stopAutohide;
function showWindow(){
    $('#pop-up').show();
    document.getElementById("main").style.backgroundColor="#0008";
    //stop scroll
    // $("html body").css("overflow","hidden");
    //auto hide
    // stopAutohide = setTimeout(hideWindow,5000);
}
//showWindow()

function hideWindow(){
    $("#pop-up").hide();
    //on scroll
    $("html body").css("overflow","scroll");
    document.getElementById("main").style.backgroundColor="#fff";
}
//hideWindow

//now call function auto after some time 
    setTimeout(showWindow,9000);

    //close after click
    $("#close-btn").click(function(){
        hideWindow();
        // clearTimeout(stopAutohide);
    })

    $(".logbtn").click(function(){
        $(".login").show();
    })
})