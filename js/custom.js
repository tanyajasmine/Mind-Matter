


$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});


	
$("button#add").click(function() {
    var html = "<button class='alert'>Alert!</button>";
    $("button.alert:last").parent().append(html);
});