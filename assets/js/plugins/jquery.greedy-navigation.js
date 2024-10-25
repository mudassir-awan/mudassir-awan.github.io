/*
* Greedy Navigation with Robust Logic to Prevent Recursive Stack Overflow
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];
var isUpdating = false;  // Prevents recursive updates

function updateNav() {
    if (isUpdating) return; // Avoid recursion if function is already running
    isUpdating = true;

    let availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.outerWidth(true) - 30;
    let visibleWidth = $vlinks.outerWidth(true);
    let moveCount = 0;

    // Move items to hidden list if overflowing
    while (visibleWidth > availableSpace && $vlinks.children().length > 0 && moveCount < 50) {
        breaks.push(visibleWidth);
        $vlinks.children().last().prependTo($hlinks); // Move last visible to hidden

        availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.outerWidth(true) - 30;
        visibleWidth = $vlinks.outerWidth(true);

        if ($btn.hasClass('hidden')) {
            $btn.removeClass('hidden');
        }
        moveCount++;  // Limits loop iterations
    }

    // Move items back to visible list if space allows
    while (availableSpace > (breaks[breaks.length - 1] || 0) && $hlinks.children().length > 0) {
        $hlinks.children().first().appendTo($vlinks);
        breaks.pop();

        availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.outerWidth(true) - 30;
        visibleWidth = $vlinks.outerWidth(true);
    }

    // Toggle dropdown visibility
    if ($hlinks.children().length === 0) {
        $btn.addClass('hidden');
        $hlinks.addClass('hidden');
    }

    // Update button count for visible items
    $btn.attr("count", breaks.length);

    isUpdating = false; // Reset flag after update
}

// Throttle resize events
$(window).resize(function() {
    clearTimeout(window.updateNavTimeout);
    window.updateNavTimeout = setTimeout(updateNav, 200); 
});

// Toggle dropdown menu on button click
$btn.on('click', function() {
    $hlinks.toggleClass('hidden');
    $(this).toggleClass('close');
});

// Initialize on page load
$(document).ready(function() {
    updateNav();
});
