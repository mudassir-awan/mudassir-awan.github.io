/*
* Greedy Navigation with Refined Logic to Avoid Recursion and Stack Overflow
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];
var isUpdating = false;  // Flag to prevent multiple simultaneous updates

function updateNav() {
    // Exit if an update is already in progress to prevent re-entry
    if (isUpdating) return;

    isUpdating = true;  // Set flag to indicate an update is in progress

    var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;
    var visibleWidth = $vlinks.width();
    var moveCount = 0; // Prevent infinite loops by limiting moves

    // Move items to the hidden list if the visible list is overflowing
    while (visibleWidth > availableSpace && $vlinks.children().length > 0 && moveCount < 50) {
        // Record the width before moving
        breaks.push(visibleWidth);

        // Move the last visible item to the hidden list
        $vlinks.children().last().prependTo($hlinks);

        // Recalculate available space and visible width
        availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;
        visibleWidth = $vlinks.width();

        // Show the dropdown button if it is hidden
        if ($btn.hasClass('hidden')) {
            $btn.removeClass('hidden');
        }

        moveCount++;  // Limit loop iterations
    }

    // Move items back to the visible list if there is space
    while (availableSpace > (breaks[breaks.length - 1] || 0) && $hlinks.children().length > 0) {
        $hlinks.children().first().appendTo($vlinks);
        breaks.pop();

        // Recalculate available space and visible width
        availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;
        visibleWidth = $vlinks.width();
    }

    // Hide the dropdown button if no items are in the hidden list
    if ($hlinks.children().length === 0) {
        $btn.addClass('hidden');
        $hlinks.addClass('hidden');
    }

    // Update button count for feedback on navigation
    $btn.attr("count", breaks.length);

    // Reset the flag after completing the update
    isUpdating = false;
}

// Throttle window resize listener to reduce redundant calls
$(window).resize(function() {
    clearTimeout(window.updateNavTimeout);
    window.updateNavTimeout = setTimeout(updateNav, 200); // Throttle updates with a delay
});

$btn.on('click', function() {
    $hlinks.toggleClass('hidden');
    $(this).toggleClass('close');
});

// Initialize navigation updates on page load
$(document).ready(function() {
    updateNav();
});
