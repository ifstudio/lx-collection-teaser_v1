import React from 'react'

$(function() {
  var text = $(".text");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      text.removeClass("hidden");
    } else {
      text.addClass("hidden");
    }
  });
});
export const Intro2 = () => (
  <div className="intro2">
    <ul className="text hidden">
  <li>L</li>
  <li>X</li>
  <li className="ghost">C</li>
  <li className="ghost">O</li>
  <li className="ghost">L</li>
  <li className="ghost">L</li>
  <li className="ghost">E</li>
  <li className="spaced">C</li>
  <li className="ghost">T</li>
  <li className="ghost">I</li>
  <li className="ghost">O</li>
  <li className="ghost">N</li>
</ul>
  </div>
)