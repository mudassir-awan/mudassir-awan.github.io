// Simplified Greedy Navigation
var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');
var numOfItems = 0;
var totalSpace = 0;
var windowWidth = $(window).width();
var breakWidths = [];

function recordWidths() {
    // Reset measurements
    totalSpace = $nav.outerWidth(true);
    numOfItems = $vlinks.children().length;
    breakWidths = [];
    
    // Measure each item only once
    $vlinks.children().each(function() {
        breakWidths.push($(this).outerWidth(true));
    });
}

function updateNav() {
    var availableSpace = $nav.outerWidth(true);
    
    // If window width hasn't changed, skip update
    if ($(window).width() === windowWidth) {
        return;
    }
    
    windowWidth = $(window).width();
    
    // Show all items for measurement
    $vlinks.children().each(function() {
        $(this).show();
    });
    $hlinks.empty();
    $btn.addClass('hidden');
    
    // If items total width > available space, start moving items
    var totalWidth = 0;
    var visibleItems = [];
    var hiddenItems = [];
    
    $vlinks.children().each(function() {
        totalWidth += $(this).outerWidth(true);
        if (totalWidth > availableSpace) {
            $(this).hide();
            hiddenItems.push($(this));
        } else {
            visibleItems.push($(this));
        }
    });
    
    // If we have hidden items, show the dropdown button
    if (hiddenItems.length > 0) {
        $btn.removeClass('hidden');
        // Move hidden items to hidden links
        hiddenItems.forEach(function($item) {
            $item.show();
            $item.appendTo($hlinks);
        });
    }
    
    // Update the button count
    $btn.attr("count", hiddenItems.length);
}

// Debounced resize handler
var resizeTimer;
$(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        updateNav();
    }, 250);
});

// Toggle dropdown menu
$btn.on('click', function(e) {
    e.preventDefault();
    $hlinks.toggleClass('hidden');
    $(this).toggleClass('close');
});

// Initialize
$(document).ready(function() {
    recordWidths();
    updateNav();
    
    // Optional: Update on dynamic content changes
    var navObserver = new MutationObserver(function(mutations) {
        recordWidths();
        updateNav();
    });
    
    navObserver.observe($nav[0], {
        childList: true,
        subtree: true,
        characterData: true
    });
});