

    $("#htmlButton").click(function(){
        $("#htmlText").toggleClass("background");
    })
    
    $("#cssButton").click(function(){
        $("#cssText").toggleClass("background");
    })
    
    $("#javaScriptButton").click(function(){
        $("#javaScriptText").toggleClass("background");
    })
    
    
     function outputLoad(){
        $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssText").val() + "</style></head><body>" + $("#htmlText").val() + "</body></html>");
            document.getElementById("outputText").contentWindow.eval($("#javaScriptText").val()); //this code evaluate js written in the js window into the iframe//
        };
     $(".myButton").hover(function(){
        $(this).addClass("highlighted");
            },function(){
        $(this).removeClass("highlighted");
    });
        $(".myButton").click(function(){
            $(this).toggleClass("active");
            $(this).removeClass("highlighted");
            
            
            });
                $("#htmlbutton").click(function(){
                $("#htmlText").toggle();
            var openedSlide = 4 - $(".slide").length;
         $(".slide").width($(window).width() / openedSlide)	
                
                });
            
        $(".slide").height($(window).height() - $("#topBar").height()-50);
         
        /*this code below updates the iframe with the text placed in the html text area as a live html file
        $("iframe").contents().find("html").html($("#htmlText").val());*/
        
        outputLoad();
        
        /*the code below updates the output as the textarea is filled with text without page refresh
        the code is updated and processed as a live html file i.e updating it with the correct properties.*/
        $("textarea").on("change keyup paste", function(){
            outputLoad();
        
        });
        
        $("#cssButton").click(function(){
            $("#cssText").toggleClass("hide");
            });
            
        $("#htmlButton").click(function(){
            $("#htmlText").toggleClass("hide");
            });
            
        $("#javaScriptButton").click(function(){
            $("#javaScriptText").toggleClass("hide");
            });
            
        $("#outputButton").click(function(){
            $("#outputText").toggleClass("hide");
            });
        
            
        
