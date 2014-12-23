
//==========================================================================
// R35 GTR Page
//==========================================================================

$(document).ready(function() {
    $('#flip, #flip-footer').click(function() {
        if ($('#r35gtr-heads').is(':visible')) {
            $('#r35gtr-heads').toggle();
            $('#r35gtr-tails').toggle();
        }
        else if ($('#r35gtr-tails').is(':visible')) {
            $('#r35gtr-tails').toggle();
            $('#r35gtr-heads').toggle();
        }
        else if ($('#r35gtr-heads-night').is(':visible')) {
            $('#r35gtr-heads-night').toggle();
            $('#r35gtr-tails-night').toggle();
        }
        else if ($('#r35gtr-tails-night').is(':visible')) {
            $('#r35gtr-tails-night').toggle();
            $('#r35gtr-heads-night').toggle();
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

        if ($('#r35gtr-heads').is(':visible')) {
            $('#r35gtr-heads').toggle();
            $('#r35gtr-heads-night').toggle();
            if (!$('#footer-wrap').hasClass("off")) {
                $('#footer-wrap').toggleClass("off");
            }
        }
        else if ($('#r35gtr-tails').is(':visible')) {
            $('#r35gtr-tails').toggle();
            $('#r35gtr-tails-night').toggle();
            if (!$('#footer-wrap').hasClass("off")) {
                $('#footer-wrap').toggleClass("off");
            }
        }
        else if ($('#r35gtr-heads-night').is(':visible')) {
            $('#r35gtr-heads-night').toggle();
            $('#r35gtr-heads').toggle();
            if ($('#footer-wrap').hasClass("off")) {
                $('#footer-wrap').toggleClass("off");
            }
        }
        else if ($('#r35gtr-tails-night').is(':visible')) {
            $('#r35gtr-tails-night').toggle();
            $('#r35gtr-tails').toggle();
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