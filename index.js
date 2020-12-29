$(function(){
    let $mainMenuItems = $("#mainMenu ul").children("li"),
    totalMainMenuItems = $mainMenuItems.lenght,
    openedIndex = 2,
        
    init = function(){
        bindEvents();        
        if(validIndex){
            animateItem($mainMenuItems.eq(openedIndex), true, 700);
        }
    },
        
    bindEvents = function(){
        $mainMenuItems.children(".images").click(function(){
            let newIndex = $(this).parent().index();
            checkAndAnimateItem(newIndex);
        });
        /* -- HOVER -- */
        $(".button").hover(function(){
            $(this).addClass("hovered");
        },
        function(){
            $(this).removeClass("hovered");
        }
        );
        
        $(".button").click(function(){
            let newIndex = $(this).index();
            checkAndAnimateItem(newIndex);
        });
    },
    
    validIndex = function(indexToCheck){
        return(indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
    },
    
    animateItem = function($item, toOpen, speed){
        let $colorImage = $item.find(".color"),
        itemParam = toOpen ? {width: "420px"}:{width: "140px"},
        colorImageParam = toOpen ? {left: "0px"}:{left: "140px"};
        $colorImage.animate(colorImageParam,speed);
        $item.animate(itemParam,speed, function(){
            if(!toOpen){
                $item.find(".p1, .p2, .p3").css("opacity", "0");
            }
            else{
                $item.find(".p1").animate({opacity: 1}, 500, function(){
                    $item.find(".p2").animate({opacity: 1}, 500, function(){
                        $item.find(".p3").animate({opacity: 1}, 500);
                    });
                });
            }
        });
    },
        
    checkAndAnimateItem = function(indexToCheckAndAnimate){
        if(openedIndex === indexToCheckAndAnimate){
                animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
                openedIndex = -1;
            }
            else{
                if(validIndex){
                    animateItem($mainMenuItems.eq(openedIndex), false, 250);
                    openedIndex = indexToCheckAndAnimate;
                    animateItem($mainMenuItems.eq(openedIndex), true, 250);
                }
            }
    };
    
    init();
});