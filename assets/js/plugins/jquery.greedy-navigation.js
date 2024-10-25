/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];
var moveCountLimit = 50; // A limit to avoid infinite loops

function updateNav() {
    var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;
    var visibleWidth = $vlinks.width();
    var moveCount = 0; // Counter for moves to prevent infinite recursion

    // Move items to the hidden list if visible list overflows
    while (visibleWidth > availableSpace && $vlinks.children().length > 0 && moveCount < moveCountLimit) {
        breaks.push(visibleWidth);

        // Move the last visible item to the hidden list
        $vlinks.children().last().prependTo($hlinks);

        // Recalculate space
        availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;
        visibleWidth = $vlinks.width();

        // Show the dropdown button
        if ($btn.hasClass('hidden')) {
            $btn.removeClass('hidden');
        }

        moveCount++;
    }

    // Move items back to the visible list if there is space
    while (availableSpace > breaks[breaks.length - 1] && $hlinks.children().length > 0) {
        $hlinks.children().first().appendTo($vlinks);
        breaks.pop();

        // Recalculate space
        availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;
        visibleWidth = $vlinks.width();
    }

    // Hide the dropdown button if there are no hidden items left
    if ($hlinks.children().length === 0) {
        $btn.addClass('hidden');
        $hlinks.addClass('hidden');
    }

    // Keep counter updated
    $btn.attr("count", breaks.length);
}

// Window listeners

$(window).resize(function() {
    setTimeout(updateNav, 100); // Throttle the resize handler with a small delay
});

$btn.on('click', function() {
    $hlinks.toggleClass('hidden');
    $(this).toggleClass('close');
});

// Initialize the navigation update on page load
$(document).ready(function() {
    updateNav();
});
