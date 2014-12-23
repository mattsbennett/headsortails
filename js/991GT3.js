//==========================================================================
// 991 GT3 Page
//==========================================================================

$(document).ready(function() {
    $('#flip, #flip-footer').click(function() {
        if ($('#991GT3-heads').is(':visible')) {
            $('#991GT3-heads').toggle();
            $('#991GT3-tails').toggle();
        }
        else if ($('#991GT3-tails').is(':visible')) {
            $('#991GT3-tails').toggle();
            $('#991GT3-heads').toggle();
        }
        else if ($('#991GT3-heads-night').is(':visible')) {
            $('#991GT3-heads-night').toggle();
            $('#991GT3-tails-night').toggle();
        }
        else if ($('#991GT3-tails-night').is(':visible')) {
            $('#991GT3-tails-night').toggle();
            $('#991GT3-heads-night').toggle();
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

        if ($('#991GT3-heads').is(':visible')) {
            $('#991GT3-heads').toggle();
            $('#991GT3-heads-night').toggle();
            if (!$('#footer-wrap').hasClass("off")) {
                $('#footer-wrap').toggleClass("off");
            }
        }
        else if ($('#991GT3-tails').is(':visible')) {
            $('#991GT3-tails').toggle();
            $('#991GT3-tails-night').toggle();
            if (!$('#footer-wrap').hasClass("off")) {
                $('#footer-wrap').toggleClass("off");
            }
        }
        else if ($('#991GT3-heads-night').is(':visible')) {
            $('#991GT3-heads-night').toggle();
            $('#991GT3-heads').toggle();
            if ($('#footer-wrap').hasClass("off")) {
                $('#footer-wrap').toggleClass("off");
            }
        }
        else if ($('#991GT3-tails-night').is(':visible')) {
            $('#991GT3-tails-night').toggle();
            $('#991GT3-tails').toggle();
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