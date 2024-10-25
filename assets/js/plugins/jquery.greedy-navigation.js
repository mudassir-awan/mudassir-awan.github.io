function updateNav() {
  let availableSpace = $btn.hasClass("hidden") ? $nav.width() : $nav.width() - $btn.width() - 30;
  let visibleWidth = $vlinks.width();
  let maxMoves = 50; // Limit moves to avoid endless adjustments

  // Move items to hidden list if overflowing
  while (visibleWidth > availableSpace && $vlinks.children().length > 0 && maxMoves > 0) {
      breaks.push(visibleWidth);
      $vlinks.children().last().prependTo($hlinks);
      availableSpace = $btn.hasClass("hidden") ? $nav.width() : $nav.width() - $btn.width() - 30;
      visibleWidth = $vlinks.width();

      if ($btn.hasClass("hidden")) {
          $btn.removeClass("hidden");
      }
      maxMoves--;
  }

  // Move items back to visible list if there is space
  while (availableSpace > (breaks[breaks.length - 1] || 0) && $hlinks.children().length > 0 && maxMoves > 0) {
      $hlinks.children().first().appendTo($vlinks);
      breaks.pop();
      availableSpace = $btn.hasClass("hidden") ? $nav.width() : $nav.width() - $btn.width() - 30;
      visibleWidth = $vlinks.width();
      maxMoves--;
  }

  // Hide dropdown button if no items are in the hidden list
  if ($hlinks.children().length === 0) {
      $btn.addClass("hidden");
      $hlinks.addClass("hidden");
  }

  // Update button count for feedback
  $btn.attr("count", breaks.length);
}
