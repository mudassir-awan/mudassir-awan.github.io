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

function updateNav() {
    var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;
    var moveCount = 0;  // Add a counter to limit the number of moves to avoid infinite loop

    // Keep moving items until there's enough space or no more items to move
    while ($vlinks.width() > availableSpace && $vlinks.children().length > 0 && moveCount < 50) {  // Added moveCount to avoid infinite loop
        // Record the width of the list
        breaks.push($vlinks.width());

        // Move item to the hidden list
        $vlinks.children().last().prependTo($hlinks);

        // Show the dropdown button
        if ($btn.hasClass('hidden')) {
            $btn.removeClass('hidden');
        }

        // Recalculate available space after each move
        availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;
        moveCount++;  // Increment the move counter
    }

    // Move items back to the visible list if there is space
    while (availableSpace > breaks[breaks.length - 1] && $hlinks.children().length > 0) {
        // Move the item to the visible list
        $hlinks.children().first().appendTo($vlinks);
        breaks.pop();

        // Recalculate available space after each move
        availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;
    }

    // Hide the dropdown button if the hidden list is empty
    if (breaks.length < 1) {
        $btn.addClass('hidden');
        $hlinks.addClass('hidden');
    }

    // Keep counter updated
    $btn.attr("count", breaks.length);
}

// Window listeners

$(window).resize(function() {
    updateNav();
});

$btn.on('click', function() {
    $hlinks.toggleClass('hidden');
    $(this).toggleClass('close');
});

// Initialize the navigation update on page load
updateNav();
