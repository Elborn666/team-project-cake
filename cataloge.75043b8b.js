const e=document.querySelector("body"),c=document.querySelector(".js-open-feedback"),t=document.querySelector(".js-close-feedback"),n=document.querySelector(".js-form"),d=document.querySelector(".js-modal-feedback");function o(){d.classList.remove("is-open-feedback"),e.classList.remove("hidden")}c.addEventListener("click",(function(){d.classList.add("is-open-feedback"),e.classList.add("hidden"),console.log("HIIII")})),t.addEventListener("click",o),n.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),o()})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&o()}));
//# sourceMappingURL=cataloge.75043b8b.js.map