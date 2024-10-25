/*
* Greedy Navigation with Direct DOM Manipulation
*/
var $nav = document.getElementById('site-nav');
var $btn = $nav.querySelector('button');
var $vlinks = $nav.querySelector('.visible-links');
var $hlinks = $nav.querySelector('.hidden-links');
var breaks = [];
var isUpdating = false;

function updateNav() {
    if (isUpdating) return;
    isUpdating = true;
    
    try {
        // Get measurements
        var availableSpace = $btn.classList.contains('hidden') ? 
            $nav.offsetWidth : 
            $nav.offsetWidth - $btn.offsetWidth - 30;
        
        var visibleWidth = $vlinks.offsetWidth;
        
        // Handle overflow
        while (visibleWidth > availableSpace && $vlinks.children.length > 0) {
            breaks.push(visibleWidth);
            $hlinks.insertBefore($vlinks.lastElementChild, $hlinks.firstChild);
            visibleWidth = $vlinks.offsetWidth;
            
            if ($btn.classList.contains('hidden')) {
                $btn.classList.remove('hidden');
            }
        }
        
        // Handle underflow
        while (availableSpace > breaks[breaks.length - 1] && $hlinks.children.length > 0) {
            $vlinks.appendChild($hlinks.firstElementChild);
            breaks.pop();
            visibleWidth = $vlinks.offsetWidth;
        }
        
        // Update button and hidden links visibility
        if ($hlinks.children.length === 0) {
            $btn.classList.add('hidden');
            $hlinks.classList.add('hidden');
        }
        
        // Update count
        $btn.setAttribute("count", breaks.length);
        
    } catch (e) {
        console.error('Navigation update error:', e);
    } finally {
        isUpdating = false;
    }
}

// Throttled resize handler
var resizeTimeout = null;
window.addEventListener('resize', function() {
    if (resizeTimeout) {
        clearTimeout(resizeTimeout);
    }
    resizeTimeout = setTimeout(function() {
        updateNav();
    }, 200);
});

// Button click handler
$btn.addEventListener('click', function(e) {
    e.preventDefault();
    $hlinks.classList.toggle('hidden');
    this.classList.toggle('close');
});

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    updateNav();
});

// Optional: Reset navigation state if needed
function resetNav() {
    while ($hlinks.firstChild) {
        $vlinks.appendChild($hlinks.firstChild);
    }
    breaks = [];
    updateNav();
}