const e=document.querySelector("body"),t=document.querySelector(".js-open"),n=document.querySelector(".js-close"),c=document.querySelector(".js-form"),o=document.querySelector(".js-modal");function s(){o.classList.remove("is-open"),e.classList.remove("hidden")}t.addEventListener("click",(function(){o.classList.add("is-open"),e.classList.add("hidden")})),n.addEventListener("click",s),c.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),s()})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&s()}));
//# sourceMappingURL=card_basket.db03c5f6.js.map