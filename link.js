function mySearch() {
    if (document.getElementById("search_input").value !== "") {
        window.location.href = "https://www.google.com/search?q=" + document.getElementById("search_input").value;
        document.getElementById("search_input").value = "";
        console.log(document.getElementById("search_input").value);
    }
    return 0
}
$(function(){
    $(window).resize();
});
