
$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('nav').addClass('nav-white');
    }
    else {
        $('nav').removeClass('nav-white');
    }
})

function toggleFunction() {
    if(document.getElementById('navmobile').style.display=="block") {
        document.getElementById('navmobile').style.display="none";
    }
    else {
        document.getElementById('navmobile').style.display="block";
    }
}

var elements = document.getElementsByTagName('a');
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {
    document.getElementById('navmobile').style.display="none";
  });
}