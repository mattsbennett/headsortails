//==========================================================================
// MK1 GTI Page
//==========================================================================

$(document).ready(function() {
    $('#flip, #flip-footer').click(function() {
        if ($('#MK1GTI-heads').is(':visible')) {
            $('#MK1GTI-heads').toggle();
            $('#MK1GTI-tails').toggle();
        }
        else if ($('#MK1GTI-tails').is(':visible')) {
            $('#MK1GTI-tails').toggle();
            $('#MK1GTI-heads').toggle();
        }
        else if ($('#MK1GTI-heads-night').is(':visible')) {
            $('#MK1GTI-heads-night').toggle();
            $('#MK1GTI-tails-night').toggle();
        }
        else if ($('#MK1GTI-tails-night').is(':visible')) {
            $('#MK1GTI-tails-night').toggle();
            $('#MK1GTI-heads-night').toggle();
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

        if ($('#MK1GTI-heads').is(':visible')) {
            $('#MK1GTI-heads').toggle();
            $('#MK1GTI-heads-night').toggle();
            if (!$('#footer-wrap').hasClass("off")) {
                $('#footer-wrap').toggleClass("off");
            }
        }
        else if ($('#MK1GTI-tails').is(':visible')) {
            $('#MK1GTI-tails').toggle();
            $('#MK1GTI-tails-night').toggle();
            if (!$('#footer-wrap').hasClass("off")) {
                $('#footer-wrap').toggleClass("off");
            }
        }
        else if ($('#MK1GTI-heads-night').is(':visible')) {
            $('#MK1GTI-heads-night').toggle();
            $('#MK1GTI-heads').toggle();
            if ($('#footer-wrap').hasClass("off")) {
                $('#footer-wrap').toggleClass("off");
            }
        }
        else if ($('#MK1GTI-tails-night').is(':visible')) {
            $('#MK1GTI-tails-night').toggle();
            $('#MK1GTI-tails').toggle();
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