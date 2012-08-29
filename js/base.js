$("a.font-size").live('click', function(e) {
    if($(this).hasClass("larger")) {
        $(this).text("Smaller type").removeClass("larger").addClass("smaller");
        $("article.post").css("font-size", "16px");
    } else {
        $(this).text("Larger type").removeClass("smaller").addClass("larger");
        $("article.post").css("font-size", "14px");
    }
});