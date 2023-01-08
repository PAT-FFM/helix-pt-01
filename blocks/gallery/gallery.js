export default function decorate(block) {
  
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
    <ul class="gallery_thumb_list">
      <li><a class="gallery_thumb" href="https://adapt.to/content/dam/adaptto/production/gallery/2021/210928_AdaptTo_3231.jpg/_jcr_content/renditions/original.image_file.980.490.file/210928_AdaptTo_3231.jpg" 
        rel="gallery" data-overlay="https://adapt.to/2021/en/conference/gallery/_jcr_content/content/stagegallery.galleryOverlay.html/210928_AdaptTo_3231.jpg.html">
        <img src="https://adapt.to/content/dam/adaptto/production/gallery/2021/210928_AdaptTo_3231.jpg/_jcr_content/renditions/original.image_file.100.50.file/210928_AdaptTo_3231.jpg"/></a></li>
      <li><a class="gallery_thumb" href="https://adapt.to/content/dam/adaptto/production/gallery/2021/210928_AdaptTo_3909.jpg/_jcr_content/renditions/original.image_file.980.490.file/210928_AdaptTo_3909.jpg" 
        rel="gallery" data-overlay="https://adapt.to/2021/en/conference/gallery/_jcr_content/content/stagegallery.galleryOverlay.html/210928_AdaptTo_3909.jpg.html">
        <img src="https://adapt.to/content/dam/adaptto/production/gallery/2021/210928_AdaptTo_3909.jpg/_jcr_content/renditions/original.image_file.100.50.file/210928_AdaptTo_3909.jpg"/></a></li>
    </ul>
  </div>
</div>
</div>
</article>
</section>
`;
}
