function nextSlide() {
  let focusPanel = $('.goober-slider li.focus');
  $(focusPanel).siblings().removeClass("left").addClass("right").css("visibility", "hidden");
  let prevPanel = focusPanel.prev().length ? focusPanel.prev() : $('.goober-slider li').last();
  let nextPanel = focusPanel.next().length ? focusPanel.next() : $('.goober-slider li').first();
  //prevPanel.removeClass("left").addClass("right").css("visibility", "hidden");
  focusPanel.removeClass("focus").addClass("left");
  nextPanel.addClass("focus").css("visibility", "visible");
  
  $('.goober-slider-prev').attr('disabled', true);
  $('.goober-slider-next').attr('disabled', true);
  setTimeout(function(){
        $('.goober-slider-prev').removeAttr('disabled');
        $('.goober-slider-next').removeAttr('disabled');
    }, 2000)
}

function prevSlide() {
  let focusPanel = $('.goober-slider li.focus');
  $(focusPanel).siblings().removeClass("right").addClass("left").css("visibility", "hidden");
  let prevPanel = focusPanel.prev().length ? focusPanel.prev() : $('.goober-slider li').last();
  let nextPanel = focusPanel.next().length ? focusPanel.next() : $('.goober-slider li').first();
  prevPanel.removeClass("left").addClass("focus").css("visibility", "visible");
  focusPanel.removeClass("focus").addClass("right");
  //nextPanel.removeClass("right").addClass("left").css("visibility", "hidden");

  $('.goober-slider-prev').attr('disabled', true);
  $('.goober-slider-next').attr('disabled', true);
  setTimeout(function(){
        $('.goober-slider-prev').removeAttr('disabled');
        $('.goober-slider-next').removeAttr('disabled');
    }, 2000)
}
