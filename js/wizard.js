/**
 * Created by Baek-Home on 2017-01-02.
 */

var client_id = "51b41a41b65fd9c234a9";

function init_datepicker() {
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
}

var positionTpl = $("#position-tpl").html();
//var repositoryTpl = $("#repository-tpl").html();
var blogTpl = $("#blog-tpl").html();

$('.step-profile .add-btn').on("click", function(){
    $("#position-box").append(positionTpl);
    init_datepicker();
});

$('.step-blog .add-btn').on("click", function(){
    $("#blog-box").append(blogTpl);
});

$(document).on('click', '.del-btn', '.step-position', function(e){
    $(this).parents(".position-row").remove();
    e.preventDefault();
});
$(document).on('click', '.del-btn', 'step-blog', function(e){
    $(this).parents(".blog-row").remove();
    e.preventDefault();
});

$("#profile-git-btn").on("click", function(){
    var scopes = ["user", "read:org"];
    var param = {"client_id": client_id, "redirect_uri": "http://bdh92123.iptime.org:88/token.php?api=github&type=profile", "scope": scopes.join(" ")}
    window.open("https://github.com/login/oauth/authorize?" + $.param(param), "auth-window");
});

$("#profile-linkedin-btn").on("click", function(){
    //https://github.com/login/oauth/authorize
});

$("#repo-git-btn").on("click", function(){
    var scopes = ["repo"];
    var param = {"client_id": client_id, "redirect_uri": "http://bdh92123.iptime.org:88/token.php?api=github&type=repo", "scope": scopes.join(" ")}
    window.open("https://github.com/login/oauth/authorize?" + $.param(param), "auth-window");
});

var auth_callback = function(api, type, token) {
    console.log(arguments);
};

init_datepicker();