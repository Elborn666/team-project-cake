!function(){var e=document.querySelector("body"),t=document.querySelector(".js-open"),n=document.querySelector(".js-close"),c=document.querySelector(".js-form"),o=document.querySelector(".js-modal");function d(){o.classList.remove("is-open"),e.classList.remove("hidden")}t.addEventListener("click",(function(){o.classList.add("is-open"),e.classList.add("hidden")})),n.addEventListener("click",d),c.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),d()})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&d()}))}();
//# sourceMappingURL=card.a6f4cd32.js.map
