!function(){var e=document.querySelector("body"),t=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]"),n="";function d(){var n="#".concat(Math.floor(16777215*Math.random()).toString(16));e.style.backgroundColor=n,t.disabled=!0,a.disabled=!1}t.addEventListener("click",(function(){n=setInterval(d,1e3)})),a.addEventListener("click",(function(){clearInterval(n),t.disabled=!1,a.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.7480089a.js.map
