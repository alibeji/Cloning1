$("#yandereds").click(function(){
	$("#yansub").toggleClass("show")
})

$("#tsundereds").click(function(){
	$("#tsunsub").toggleClass("show")
})

$("#lolids").click(function(){
	$("#lolisub").toggleClass("show")
})

$("#empty").hover(function(){
	$(".sgb").css("display","block")
})

$(".sliding-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
});

$("#rias").click(function(){$(".bag").css("display","none");
	$("#riasd").css("display","block")
})

$("#rem").click(function(){$(".bag").css("display","none");
	$("#remd").css("display","block")
})

$("#shiro").click(function(){$(".bag").css("display","none");
	$("#shirod").css("display","block")
})

$("#mirai").click(function(){$(".bag").css("display","none");
	$("#miraid").css("display","block")
})

$("#rei").click(function(){$(".bag").css("display","none");
	$("#reid").css("display","block")
})

$("#rikka").click(function(){$(".bag").css("display","none");
	$("#rikkad").css("display","block")
})

$("#megumin").click(function(){$(".bag").css("display","none");
	$("#megumind").css("display","block")
})

$("#taiga").click(function(){$(".bag").css("display","none");
	$("#taigad").css("display","block")
})

$("#zero2").click(function(){$(".bag").css("display","none");
	$("#zero2d").css("display","block")
})

$(".waifu").click(function(){$(".bag").css("display","none");
})
