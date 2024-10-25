/*
* Greedy Navigation with Fixed Stack Overflow Prevention
*/
var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');
var breaks = [];
var isUpdating = false;

function calculateWidths() {
    // Calculate widths first, before any DOM changes
    var navWidth = $nav.width();
    var btnWidth = $btn.outerWidth(true);
    return {
        availableSpace: $btn.hasClass('hidden') ? navWidth : navWidth - btnWidth - 30,
        visibleWidth: $vlinks.outerWidth(true)
    };
}

function updateNav() {
    if (isUpdating) return;
    isUpdating = true;
    
    try {
        // Get initial measurements before making any changes
        var measurements = calculateWidths();
        var availableSpace = measurements.availableSpace;
        var visibleWidth = measurements.visibleWidth;
        
        // Move items to hidden list if overflowing
        while (visibleWidth > availableSpace && $vlinks.children().length > 0) {
            breaks.push(visibleWidth);
            $vlinks.children().last().prependTo($hlinks);
            
            // Recalculate after DOM change
            measurements = calculateWidths();
            availableSpace = measurements.availableSpace;
            visibleWidth = measurements.visibleWidth;
            
            if ($btn.hasClass('hidden')) {
                $btn.removeClass('hidden');
            }
        }
        
        // Move items back to visible list if space allows
        while (availableSpace > breaks[breaks.length - 1] && $hlinks.children().length > 0) {
            $hlinks.children().first().appendTo($vlinks);
            breaks.pop();
            
            // Recalculate after DOM change
            measurements = calculateWidths();
            availableSpace = measurements.availableSpace;
            visibleWidth = measurements.visibleWidth;
        }
        
        // Toggle dropdown visibility
        if ($hlinks.children().length === 0) {
            $btn.addClass('hidden');
            $hlinks.addClass('hidden');
        } else {
            $hlinks.removeClass('hidden');
        }
        
        $btn.attr("count", breaks.length);
    } finally {
        isUpdating = false;
    }
}

// Throttle resize events
var resizeTimeout;
$(window).resize(function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateNav, 200);
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