function updateNav() {
  // Avoid calling updateNav again while it’s already running
  if (isUpdating) return;
  isUpdating = true;

  let availableSpace = $btn.hasClass("hidden") ? $nav.offsetWidth : $nav.offsetWidth - $btn.offsetWidth - 30;
  let visibleWidth = $vlinks.offsetWidth;
  let moveCount = 0;

  try {
      // Move items to hidden list if overflowing
      while (visibleWidth > availableSpace && $vlinks.children.length > 0 && moveCount < 50) {
          breaks.push(visibleWidth);
          $hlinks.insertBefore($vlinks.lastElementChild, $hlinks.firstChild);
          availableSpace = $btn.hasClass("hidden") ? $nav.offsetWidth : $nav.offsetWidth - $btn.offsetWidth - 30;
          visibleWidth = $vlinks.offsetWidth;
          if ($btn.classList.contains("hidden")) $btn.classList.remove("hidden");
          moveCount++;
      }

      // Move items back to visible list if there is space
      while (availableSpace > (breaks[breaks.length - 1] || 0) && $hlinks.children.length > 0 && moveCount < 50) {
          $vlinks.appendChild($hlinks.firstElementChild);
          breaks.pop();
          availableSpace = $btn.hasClass("hidden") ? $nav.offsetWidth : $nav.offsetWidth - $btn.offsetWidth - 30;
          visibleWidth = $vlinks.offsetWidth;
          moveCount++;
      }

      // Hide the dropdown if there are no hidden items
      if ($hlinks.children.length === 0) {
          $btn.classList.add("hidden");
          $hlinks.classList.add("hidden");
      }

      // Update button count for debugging/feedback
      $btn.setAttribute("count", breaks.length);
  } catch (error) {
      console.error("Error in updateNav:", error);
  } finally {
      isUpdating = false; // Allow future calls
  }
}

// Throttled resize handler to reduce load on updateNav
var resizeTimeout = null;
window.addEventListener("resize", function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(updateNav, 200);
});

// Toggle dropdown on button click
$btn.addEventListener("click", function (e) {
  e.preventDefault();
  $hlinks.classList.toggle("hidden");
  this.classList.toggle("close");
});

// Initialize on load
document.addEventListener("DOMContentLoaded", function () {
  updateNav();
});
