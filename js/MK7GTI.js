//==========================================================================
// MK7 GTI Page
//==========================================================================

$(document).ready(function() {
    $('#flip, #flip-footer').click(function() {
        if ($('#MK7GTI-heads').is(':visible')) {
            $('#MK7GTI-heads').toggle();
            $('#MK7GTI-tails').toggle();
        }
        else if ($('#MK7GTI-tails').is(':visible')) {
            $('#MK7GTI-tails').toggle();
            $('#MK7GTI-heads').toggle();
        }
        else if ($('#MK7GTI-heads-night').is(':visible')) {
            $('#MK7GTI-heads-night').toggle();
            $('#MK7GTI-tails-night').toggle();
        }
        else if ($('#MK7GTI-tails-night').is(':visible')) {
            $('#MK7GTI-tails-night').toggle();
            $('#MK7GTI-heads-night').toggle();
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

        if ($('#MK7GTI-heads').is(':visible')) {
            $('#MK7GTI-heads').toggle();
            $('#MK7GTI-heads-night').toggle();
            if (!$('#footer-wrap').hasClass("off")) {
                $('#footer-wrap').toggleClass("off");
            }
        }
        else if ($('#MK7GTI-tails').is(':visible')) {
            $('#MK7GTI-tails').toggle();
            $('#MK7GTI-tails-night').toggle();
            if (!$('#footer-wrap').hasClass("off")) {
                $('#footer-wrap').toggleClass("off");
            }
        }
        else if ($('#MK7GTI-heads-night').is(':visible')) {
            $('#MK7GTI-heads-night').toggle();
            $('#MK7GTI-heads').toggle();
            if ($('#footer-wrap').hasClass("off")) {
                $('#footer-wrap').toggleClass("off");
            }
        }
        else if ($('#MK7GTI-tails-night').is(':visible')) {
            $('#MK7GTI-tails-night').toggle();
            $('#MK7GTI-tails').toggle();
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