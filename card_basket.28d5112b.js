const e=document.querySelector("body"),n=document.querySelector(".js-modal"),o=document.querySelector(".js-modal-login"),t=document.querySelector(".js-open-login"),c=document.querySelector(".js-open-registr"),s=document.querySelector(".js-close-login"),d=document.querySelector(".js-form-login");function i(){o.classList.remove("open-login"),e.classList.remove("hidden")}t.addEventListener("click",(function(){o.classList.add("open-login"),e.classList.add("hidden")})),s.addEventListener("click",i),c.addEventListener("click",(function(){o.classList.remove("open-login"),n.classList.add("is-open")})),d.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),i()})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&i()}));
//# sourceMappingURL=card_basket.28d5112b.js.map