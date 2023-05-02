// console.log("hello world");

$(document).ready(function(){
    // console.log("hello jquery");
    // Start Nav bar
    $(".nav-item").click(function(e){
        $(this).children().addClass("active");
        $(this).siblings().children().removeClass("active");
    })

    $(window).scroll(function(e){
        console.log($(this).scrollTop())
        let scrollVal = $(this).scrollTop();
        if(scrollVal > 300) {
            $(".navbar").addClass("active");
        }else {
            $(".navbar").removeClass("active");
        }
    })

    // End Nav Bar

    // Start Sweet Message Section
    $("#sweet_message_carousel").owlCarousel({
        items: 3,
        nav : false,
        dots : true,
        loop : true,
        responsive : {

            480 : {
                items : 1,
              
            },
            // breakpoint from 768 up
            768 : {
                items : 2,
                
            },
            991 :{
                items : 3
            }
        },
        autoplay : true
    });
    // End Sweet Message Section

    // Start Friend And Family Section
    $("#friend_family_carouse").owlCarousel({
        items : 5, 
        nav : false,
        dots : true,
        loop : true,
        responsive : {
            0 : {
                items : 1,
            },  

            480 : {
                items : 2,
              
            },
            // breakpoint from 768 up
            768 : {
                items : 3,
                
            },
            991 :{
                items : 5
            }
        },
        autoplay : true
    })
    // End Friend And Family Section

    $('.gallery_img').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery : {
            enabled : true,
        },
      
        zoom: {
          enabled: true, 
      
          duration: 500, 
          easing: 'ease-in-out',

          opener: function(openerElement) {
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
        }
      
      });
      

})

$(window).on("load",function(){
    $("#preloader").delay("1000").fadeOut("1100");
})

// Start Nav bar
// let getNavItems = document.querySelectorAll('.nav-item');

// getNavItems.forEach(function(getNavItem){
//     getNavItem.addEventListener("click",function(e){
//         getNavItems.forEach(function(getNavItem){
//             getNavItem.children[0].classList.remove("active");
//         })
//         this.children[0].classList.add("active");
//     })
// })
// End Nav Bar


// Start Day Counter

var day = document.getElementById("day");
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

var countDownInt ;



function getdiftime(){
    var getdate = new Date();
    // console.log(getdate.getTime());
    // console.log(getdate.getTime());
    let curyear = getdate.getUTCFullYear();
    let curmonth = getdate.getMonth()+1;
    let curdate = getdate.getDate();
    // console.log(curyear,curmonth,curdate);
    let curhour = getdate.getHours();
    let curminute = getdate.getMinutes();
    let cursecond = getdate.getSeconds();
    // console.log(month[curmonth]);
    let curDay = new Date(curmonth + "-" + curdate + "-" +curyear + " " + curhour + ":" + curminute + ":" + cursecond );
    // console.log(curDay.getTime());
    
    // console.log(curyear,curmonth,curdate,curhour,curminute,cursecond);
    
    var findate = new Date("4-29-2023 8:00:00");
    // console.log(finaltime);
    
    if(findate.getTime() === curDay.getTime() ) {
        // console.log("hello stop");
        document.querySelector(".aniversity").classList.add("active");
        second.textContent = "00";
        // clearInterval(countDownInt);
        // setInterval(curtime,1000);
        console.log("hi");
    }else if(findate.getTime() < curDay.getTime()){
        document.querySelector(".aniversity").classList.add("active");
        var difdate = curDay.getTime() - findate.getTime()  ;
        let gettime = difdate;
    
        // console.log(getsecond)
        // console.log(getsecond%3600)
        showdate(gettime);
        
    }else {
        // clearInterval(countDownInt);

        var difdate = findate.getTime() - curDay.getTime()  ;
        // console.log(difdate);
        // console.log(Math.floor(difdate/3600))
        
        let gettime = difdate;
        showdate(gettime);
    }

}

countDownInt = setInterval(getdiftime,1000);

function showdate(mili){
    let getsecond = Math.floor((mili/1000) % 60)
    let getminute =Math.floor((mili/1000/60) % 60 )
    let gethour = Math.floor((mili / (1000 * 60 * 60)) % 24);
    let getday = Math.floor(mili / (24*60*60*1000));
    day.textContent =  getday < 10 ? "0"+ getday : getday  ;
    hour.textContent = gethour < 10 ? "0"+ gethour : gethour  ;
    minute.textContent = getminute < 10 ? "0"+ getminute : getminute  ;
    second.textContent = getsecond < 10 ? "0"+ getsecond : getsecond  ;
}


// End Day Counter


// Start place and time modal 
// let getreceptionbtn = document.querySelector("#reception_modal");
// getreceptionbtn.addEventListener("click",function(){
//     document.querySelector(".reception_modal").classList.add("active");
// })
// document.querySelector(".reception_modal").addEventListener("click",function(e){
//     if(e.target.classList.contains("active")){
//         document.querySelector(".reception_modal").classList.remove("active");
//     }
// })

function modalboxopen(btn,ele){
    document.querySelector(btn).addEventListener("click",function(){
        document.querySelector(ele).classList.add("active");
    })
}
function modalboxclose(ele){
    document.querySelector(ele).addEventListener("click",function(e){
        if(e.target.classList.contains("active")){
            document.querySelector(ele).classList.remove("active");
        }
    })
}

modalboxopen("#reception_modal",".reception_modal");
modalboxopen("#ceremony_modal",".ceremony_modal");
modalboxopen("#party_modal",".party_modal");


modalboxclose(".reception_modal");
modalboxclose(".ceremony_modal");
modalboxclose(".party_modal");



let getmodelclosebtns = document.querySelectorAll(".modal_close_btn");
getmodelclosebtns.forEach(function(getmodelclosebtn){
    getmodelclosebtn.addEventListener("click",function(e){
        console.log(this);
        this.parentElement.classList.remove("active");
    })
})



// End Place and time modal


// Start Wow Animaiton
new WOW().init();
// End Wow Animation

