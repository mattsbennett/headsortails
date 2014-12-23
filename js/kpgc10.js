//==========================================================================
// KPGC10 GTR Page
//==========================================================================

$(document).ready(function() {
    $('#flip, #flip-footer').click(function() {
        if ($('#kpgc10-heads').is(':visible')) {
            $('#kpgc10-heads').toggle();
            $('#kpgc10-tails').toggle();
        }
        else if ($('#kpgc10-tails').is(':visible')) {
            $('#kpgc10-tails').toggle();
            $('#kpgc10-heads').toggle();
        }
        else if ($('#kpgc10-heads-night').is(':visible')) {
            $('#kpgc10-heads-night').toggle();
            $('#kpgc10-tails-night').toggle();
        }
        else if ($('#kpgc10-tails-night').is(':visible')) {
            $('#kpgc10-tails-night').toggle();
            $('#kpgc10-heads-night').toggle();
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

        if ($('#kpgc10-heads').is(':visible')) {
            $('#kpgc10-heads').toggle();
            $('#kpgc10-heads-night').toggle();
            if (!$('#footer-wrap').hasClass("off")) {
                $('#footer-wrap').toggleClass("off");
            }
        }
        else if ($('#kpgc10-tails').is(':visible')) {
            $('#kpgc10-tails').toggle();
            $('#kpgc10-tails-night').toggle();
            if (!$('#footer-wrap').hasClass("off")) {
                $('#footer-wrap').toggleClass("off");
            }
        }
        else if ($('#kpgc10-heads-night').is(':visible')) {
            $('#kpgc10-heads-night').toggle();
            $('#kpgc10-heads').toggle();
            if ($('#footer-wrap').hasClass("off")) {
                $('#footer-wrap').toggleClass("off");
            }
        }
        else if ($('#kpgc10-tails-night').is(':visible')) {
            $('#kpgc10-tails-night').toggle();
            $('#kpgc10-tails').toggle();
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