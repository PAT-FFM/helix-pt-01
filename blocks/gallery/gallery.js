export default function decorate(block) {
 
  const ul = document.createElement('ul');
  ul.className="gallery_thumb_list";

  fetch('/gallery/gallery.json')
  .then((response) => response.json())
  .then( x => x.data.forEach( (item) => {
    const li = document.createElement('li');
    li.className="gallery-item";
    li.innerHTML = `
        <a class="gallery_thumb" href="https://main--helix-pt-01--pat-ffm.hlx.page/${item.path}" 
            rel="gallery" data-overlay="https://main--helix-pt-01--pat-ffm.hlx.page/${item.path}">
        <img src="https://main--helix-pt-01--pat-ffm.hlx.page/${item.path}?width=200"/>
        </a>
    `;
    ul.append(li);
 }));
 
  block.innerHTML= `
    <section id="stage" class="col-3-4">
      <article class="box-padding">
      <div class="contentHeadline section"><h1 class="title title-section">Gallery</h1>
    </div>
      <div class="contentRichText section">
      <p>Photos from adaptTo() 2021 Online Conference - &quot;behind the scenes&quot;.<br />
    </p>
    </div>
      <div class="stagegallery section"><div class="stage">
      <div class="image_gallery">
        <div class="gallery_stage">
          <a class="gallery__prev">Previous</a>
          <div class="gallery_placeholder">
            <img class="gallery_image" src=""/>
          </div>
          <a class="gallery__next">Next</a>
          <a class="gallery_fullscreen_btn" href="" title="Fullscreen">Fullscreen</a>
        </div>
        ${ul.outerHTML}
      </div>
    </div>
    </div>
    </article>
    </section>
    `;
}
