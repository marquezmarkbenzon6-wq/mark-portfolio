$(document).ready(function(){
    $("#title").text("jQueryyyy")

    $("p").css("color","white")
    
    $("#btn2").click(function(){
        $(this).css("background", "white")   
        $("#message").text("you clickled me")  
    })

    $("ul li:first-child").css("color", "white")

    $("[href]").css("color", "black")

    $("tr:odd").css("background", "lightblue")

    $("tr:even").css("background", "lightgreen")

    $("th").css("background", "white")

    $("#btn2").click(function(){
       $(this).css("background", "white")     
    })

    $("#btn2").dblclick(function(){
        $(this).css("background", "red")   
        $("#message").text("you double clickled me")  
    })

    $("#btn2").mouseenter(function(){
        $("#message").text("your mouse reach the button")
        $(this).css("background", "orange")
        $("body").css("background", "yellow")
    })
    
    $("#btn2").mouseout(function(){
        $("#message").text("your mouse left the button")
        $(this).css("background", "white")
        $("body").css("background", "black")
    })

    $("#btn2").mousedown(function(){
        $("#message").text("WAG MO AKONG HAWAKAN")
        $(this).css("background", "green")
        $("body").css("background", "yellow")
    })

    $("#name").focus(function(){
        $("#message").text("typingg....")
        $(this).css("background", "yellow")
    })

    $("#name").blur(function(){
        $("#message").text("output")
        $(this).css("background", "gray")
    })

    $("#course").change(function(){
        $("#message").text($(this).val())
    })
    
    $(".btn3").click(function(){
        $("#tbl").show(2000)
    })

    $(".btn4").click(function(){
        $("#tbl").hide("slow")
    })

})
