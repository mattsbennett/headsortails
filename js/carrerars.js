//==========================================================================
// Carrera RS 2.7 Page
//==========================================================================

$(document).ready(function() {
    $('#flip, #flip-footer').click(function() {
        if ($('#carrerars-heads').is(':visible')) {
            $('#carrerars-heads').toggle();
            $('#carrerars-tails').toggle();
        }
        else if ($('#carrerars-tails').is(':visible')) {
            $('#carrerars-tails').toggle();
            $('#carrerars-heads').toggle();
        }
        else if ($('#carrerars-heads-night').is(':visible')) {
            $('#carrerars-heads-night').toggle();
            $('#carrerars-tails-night').toggle();
        }
        else if ($('#carrerars-tails-night').is(':visible')) {
            $('#carrerars-tails-night').toggle();
            $('#carrerars-heads-night').toggle();
        }
    });
});

$(document).ready(function() {
    $('#flip, #flip-footer').click(function() {
       $('#rotate-heads').toggle();
       $('#rotate-tails').toggle();
       $('#rotate-heads-footer').toggle();
       $('#rotate-tails-footer').toggle();
    });
});

$(document).ready(function() {
    $('#lightbulb, #lightbulb-footer').click(function() {

        if ($('#carrerars-heads').is(':visible')) {
            $('#carrerars-heads').toggle();
            $('#carrerars-heads-night').toggle();
            if (!$('#footer-wrap').hasClass("off")) {
                $('#footer-wrap').toggleClass("off");
            }
        }
        else if ($('#carrerars-tails').is(':visible')) {
            $('#carrerars-tails').toggle();
            $('#carrerars-tails-night').toggle();
            if (!$('#footer-wrap').hasClass("off")) {
                $('#footer-wrap').toggleClass("off");
            }
        }
        else if ($('#carrerars-heads-night').is(':visible')) {
            $('#carrerars-heads-night').toggle();
            $('#carrerars-heads').toggle();
            if ($('#footer-wrap').hasClass("off")) {
                $('#footer-wrap').toggleClass("off");
            }
        }
        else if ($('#carrerars-tails-night').is(':visible')) {
            $('#carrerars-tails-night').toggle();
            $('#carrerars-tails').toggle();
            if ($('#footer-wrap').hasClass("off")) {
                $('#footer-wrap').toggleClass("off");
            }
        }
    });
});

$(document).ready(function() {
    $('#lightbulb, #lightbulb-footer').click(function() {
       $('#lights-off').toggle();
       $('#lights-on').toggle();
       $('#lights-off-footer').toggle();
       $('#lights-on-footer').toggle();
    });
});

$(window).resize(function() {
        if ($(".title").css("display") == "none" ){
            $('#footer-toggles').css("display","block");
        } else if ($(".title").css("display") == "block" ){
            $('#footer-toggles').css("display","none");
        }
});
$(document).ready(function() {
        if ($(".title").css("display") == "none" ){
            $('#footer-toggles').css("display","block");
        } else if ($(".title").css("display") == "block" ){
            $('#footer-toggles').css("display","none");
        }
});