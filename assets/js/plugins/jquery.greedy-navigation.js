/*
* Greedy Navigation with Robust Logic to Prevent Recursive Stack Overflow
*/
// Greedy Navigation with Fixed Recursion Protection
var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');
var breaks = [];
var isUpdating = false;
var previousWidth = -1;

function updateNav() {
    // Prevent recursive calls and unnecessary updates
    if (isUpdating || previousWidth === $nav.width()) return;
    
    isUpdating = true;
    previousWidth = $nav.width();
    
    // Cache initial measurements
    const navWidth = $nav.width();
    const btnWidth = $btn.outerWidth(true) || 0;
    const availableSpace = $btn.hasClass('hidden') ? navWidth : navWidth - btnWidth - 30;
    
    // Reset visible width calculation
    $vlinks.children().each(function() {
        $(this).css('display', '');  // Reset any display changes
    });
    
    let visibleWidth = $vlinks.outerWidth(true);
    let needsUpdate = false;
    
    // Move items to hidden list if overflowing
    while (visibleWidth > availableSpace && $vlinks.children().length > 0) {
        const $lastItem = $vlinks.children().last();
        needsUpdate = true;
        
        if (!$lastItem.length) break;  // Safety check
        
        breaks.push(visibleWidth);
        $lastItem.prependTo($hlinks);
        visibleWidth = $vlinks.outerWidth(true);
        
        if ($btn.hasClass('hidden')) {
            $btn.removeClass('hidden');
        }
    }
    
    // Move items back to visible list if space allows
    while (availableSpace > (breaks[breaks.length - 1] || 0) && $hlinks.children().length > 0) {
        const $firstHidden = $hlinks.children().first();
        needsUpdate = true;
        
        if (!$firstHidden.length) break;  // Safety check
        
        $firstHidden.appendTo($vlinks);
        breaks.pop();
    }
    
    // Update button visibility
    if ($hlinks.children().length === 0) {
        $btn.addClass('hidden');
        $hlinks.addClass('hidden');
    } else {
        $btn.removeClass('hidden');
    }
    
    // Update button count
    $btn.attr("count", $hlinks.children().length);
    
    isUpdating = false;
}

// Throttled resize handler
var resizeTimeout;
$(window).on('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        updateNav();
    }, 250);
});

// Toggle dropdown menu
$btn.on('click', function(e) {
    e.preventDefault();
    $hlinks.toggleClass('hidden');
    $(this).toggleClass('close');
});

// Initialize on document ready
$(document).ready(function() {
    updateNav();
    
    // Add mutation observer to handle dynamic content changes
    const observer = new MutationObserver(function(mutations) {
        if (!isUpdating) {
            updateNav();
        }
    });
    
    observer.observe($nav[0], {
        childList: true,
        subtree: true,
        characterData: true
    });
});