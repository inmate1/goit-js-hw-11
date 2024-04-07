import{i as p,S as d}from"./assets/vendor-f33cd494.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();const g="43226276-a07a0c17e428cfffb021b9b05",y=new URLSearchParams({key:g,image_type:"photo",orientation:"horizontal",safesearch:!0});function w(t){const s=`https://pixabay.com/api/?${y}&q=${encodeURIComponent(t)}`;return fetch(s).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(r.hits.length===0)throw new Error(response.status);return r.hits})}function v(t){return t.map(({id:s,largeImageURL:r,previewURL:o,webformatURL:e,tags:i,likes:n,views:m,comments:f,downloads:h})=>`<li class="list-item">
          <a href="${r}" class="list-link">
          <img src="${e}" alt="${i}" class="item-img" width="360" height="160">
          </a>
         <ul class="list-review">
           <li class="review-item">
              <h3 class="review-title">likes</h3>
              <p class="review-text">${n}</p></li>
           <li class="review-item">
              <h3 class="review-title">views</h3>
              <p class="review-text">${m}</p></li>
           <li class="review-item">
              <h3 class="review-title">comments</h3>
              <p class="review-text">${f}</p></li>
           <li class="review-item">
              <h3 class="review-title">downloads</h3>
              <p class="review-text">${h}</p></li>
            </ul>
          </li>`).join("")}a();function b(){const t=document.querySelector(".loader");t.style.display="block"}function a(){const t=document.querySelector(".loader");t.style.display="none"}const l=document.querySelector(".img-list"),c=document.querySelector(".search-form");c.addEventListener("submit",L);function L(t){t.preventDefault(),l.innerHTML="";const r=t.target.elements.images.value.trim();r!==""&&(b(),w(r).then(o=>{l.insertAdjacentHTML("beforeend",v(o)),u.refresh()}).catch(o=>{p.show({titleColor:"#fff",message:"Sorry, there are no images matching<br>your search query.Please try again!",messageColor:"#fff",messageSize:"16px",messageLineHeight:"150%",backgroundColor:" #ef4040",position:"topRight",close:!0,closeOnEscape:!1,closeOnClick:!1,timeout:5e3,resetOnHover:!0,icon:"img/error.svg",transitionIn:"flipInX",transitionOut:"flipOutX"})}).finally(()=>{a()}),c.reset())}let u=new d(".img-list .list-link",{overlayOpacity:.8,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});u.on("shown.simplelightbox",function(){const t=document.querySelector(".sl-image > img");t.style.width="100%",t.style.maxHeight="100%"});
//# sourceMappingURL=commonHelpers.js.map
