/*
* Greedy Navigation with Direct DOM Manipulation and Optimized Layout Recalculation
*/
var $nav = document.getElementById('site-nav');
var $btn = $nav.querySelector('button');
var $vlinks = $nav.querySelector('.visible-links');
var $hlinks = $nav.querySelector('.hidden-links');
var breaks = [];
var isUpdating = false;

function updateNav() {
    if (isUpdating) return; // Prevent re-entry
    isUpdating = true;

    try {
        let availableSpace = $btn.classList.contains('hidden') 
            ? $nav.offsetWidth 
            : $nav.offsetWidth - $btn.offsetWidth - 30;
        let visibleWidth = $vlinks.offsetWidth;

        // Move items to hidden list if overflowing
        while (visibleWidth > availableSpace && $vlinks.children.length > 0) {
            breaks.push(visibleWidth);
            $hlinks.insertBefore($vlinks.lastElementChild, $hlinks.firstChild);
            visibleWidth = $vlinks.offsetWidth;

            if ($btn.classList.contains('hidden')) {
                $btn.classList.remove('hidden');
            }
        }

        // Move items back to visible list if there is space
        while (availableSpace > (breaks[breaks.length - 1] || 0) && $hlinks.children.length > 0) {
            $vlinks.appendChild($hlinks.firstElementChild);
            breaks.pop();
            visibleWidth = $vlinks.offsetWidth;
        }

        // Hide dropdown button if no items are in the hidden list
        if ($hlinks.children.length === 0) {
            $btn.classList.add('hidden');
            $hlinks.classList.add('hidden');
        }

        // Update button count for debugging/visibility purposes
        $btn.setAttribute("count", breaks.length);

    } catch (error) {
        console.error('Navigation update error:', error);
    } finally {
        isUpdating = false;
    }
}

// Throttled resize handler to reduce load on updateNav
var resizeTimeout = null;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateNav, 200); // 200 ms delay for throttling
});

// Button click handler for toggling visibility of hidden links
$btn.addEventListener('click', function(e) {
    e.preventDefault();
    $hlinks.classList.toggle('hidden');
    this.classList.toggle('close');
});

// Initialize updateNav on load
document.addEventListener('DOMContentLoaded', function() {
    updateNav();
});

// Reset navigation state if needed (optional function)
function resetNav() {
    while ($hlinks.firstChild) {
        $vlinks.appendChild($hlinks.firstChild);
    }
    breaks = [];
    updateNav();
}
