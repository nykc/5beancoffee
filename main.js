$("#logo-trigger").click(function () {
    $("li").toggleClass("visible");
});

function scrollTo(hash) {
    location.hash = "#" + hash;
}