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
var isUpdating = false;  // New flag to prevent multiple updates

function updateNav() {
    if (isUpdating) return; // Exit if an update is already in progress

    isUpdating = true;  // Set flag to prevent further updates while in progress

    var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;
    var visibleWidth = $vlinks.width();
    var moveCount = 0; // To avoid infinite loops

    // Move items to the hidden list if visible list overflows
    while (visibleWidth > availableSpace && $vlinks.children().length > 0 && moveCount < 50) {
        breaks.push(visibleWidth);

        // Move the last visible item to the hidden list
        $vlinks.children().last().prependTo($hlinks);

        // Recalculate space
        availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;
        visibleWidth = $vlinks.width();

        // Show the dropdown button if it's hidden
        if ($btn.hasClass('hidden')) {
            $btn.removeClass('hidden');
        }

        moveCount++;
    }

    // Move items back to the visible list if there is enough space
    while (availableSpace > breaks[breaks.length - 1] && $hlinks.children().length > 0) {
        $hlinks.children().first().appendTo($vlinks);
        breaks.pop();

        // Recalculate space
        availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;
        visibleWidth = $vlinks.width();
    }

    // Hide the dropdown button if there are no items in the hidden list
    if ($hlinks.children().length === 0) {
        $btn.addClass('hidden');
        $hlinks.addClass('hidden');
    }

    // Keep the count of hidden items updated on the button (for accessibility)
    $btn.attr("count", breaks.length);

    isUpdating = false;  // Reset the flag after the update is complete
}

// Window listeners

$(window).resize(function() {
    setTimeout(updateNav, 100); // Throttle the resize handler with a delay
});

$btn.on('click', function() {
    $hlinks.toggleClass('hidden');
    $(this).toggleClass('close');
});

// Initialize the navigation update on page load
$(document).ready(function() {
    updateNav();
});
