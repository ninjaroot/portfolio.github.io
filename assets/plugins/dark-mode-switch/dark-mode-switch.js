/*!
 * Dark Mode Switch v1.0.1 (https://github.com/coliff/dark-mode-switch)
 * Copyright 2021 C.Oliff
 * Licensed under MIT (https://github.com/coliff/dark-mode-switch/blob/main/LICENSE)
 */

// Force dark theme early before page render to avoid flash of light
(function () {
  const userPref = localStorage.getItem("darkSwitch");

  if (userPref === "dark" || !userPref) {
    localStorage.setItem("darkSwitch", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
})();

window.addEventListener("DOMContentLoaded", function () {
  var darkSwitch = document.getElementById("darkSwitch");

  if (!darkSwitch) return;

  // ✅ Initialize theme and checkbox state
  initTheme(darkSwitch);

  // ✅ Listen for user toggle
  darkSwitch.addEventListener("change", function () {
    resetTheme(darkSwitch);
  });
});

/**
 * Summary: function that adds or removes the attribute 'data-theme' depending if
 * the switch is 'on' or 'off'.
 *
 * Description: initTheme is a function that uses localStorage from JavaScript DOM,
 * to store the value of the HTML switch. If the switch was already switched to
 * 'on' it will set an HTML attribute to the body named: 'data-theme' to a 'dark'
 * value. If it is the first time opening the page, or if the switch was off the
 * 'data-theme' attribute will not be set.
 * @return {void}
 */
function initTheme(darkSwitch) {
  const isDark = localStorage.getItem("darkSwitch") === "dark";
  darkSwitch.checked = isDark;

  if (isDark) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}

/**
 * Summary: resetTheme checks if the switch is 'on' or 'off' and if it is toggled
 * on it will set the HTML attribute 'data-theme' to dark so the dark-theme CSS is
 * applied.
 * @return {void}
 */
function resetTheme(darkSwitch) {
  if (darkSwitch.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("darkSwitch", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("darkSwitch", "light");
  }
}
