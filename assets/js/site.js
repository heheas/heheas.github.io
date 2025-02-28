function nextSlide() {
  let focusPanel = $('.goober-slider li.focus');
  let prevPanel = focusPanel.prev().length ? focusPanel.prev() : $('.goober-slider li').last();
  let nextPanel = focusPanel.next().length ? focusPanel.next() : $('.goober-slider li').first();
  prevPanel.removeClass("left").addClass("right").css("visibility", "hidden");
  focusPanel.removeClass("focus").addClass("left")
  nextPanel.removeClass("right").addClass("focus").css("visibility", "visible");
  
  $('.goober-slider-prev').setAttribute('disabled', true);
  $('.goober-slider-next').setAttribute('disabled', true);
  setTimeout(function(){
        $('.goober-slider-prev').removeAttribute('disabled');
        $('.goober-slider-next').removeAttribute('disabled');
    }, 2000)
}

function prevSlide() {
  let focusPanel = $('.goober-slider li.focus');
  let prevPanel = focusPanel.prev().length ? focusPanel.prev() : $('.goober-slider li').last();
  let nextPanel = focusPanel.next().length ? focusPanel.next() : $('.goober-slider li').first();
  prevPanel.removeClass("left").addClass("focus").css("visibility", "visible");
  focusPanel.removeClass("focus").addClass("right");
  nextPanel.removeClass("right").addClass("left").css("visibility", "hidden");

  $('.goober-slider-prev').setAttribute('disabled', true);
  $('.goober-slider-next').setAttribute('disabled', true);
  setTimeout(function(){
        $('.goober-slider-prev').removeAttribute('disabled');
        $('.goober-slider-next').removeAttribute('disabled');
    }, 2000)
}
