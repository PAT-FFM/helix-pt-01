export default function decorate(block) {
  const div1 = document.createElement('div');
  div1.innerHTML = `<a href="/speaker/speaker.json" target="_blank">Speaker Database</a>`;
  block.append(div1);

  const div2 = document.createElement('div');
  div2.className="speaker-gallery";
  
  fetch('/speaker/speaker.json')
  .then((response) => response.json())
  .then((data) => data.data.forEach( (speaker) => {
  
    const div3 = document.createElement('div');
    div3.innerHTML = `<div class="speaker-gallery-item">
        <div class="box-padding">
          <div class="speaker-image">
            <a href="https://adapt.to/2021/en/conference/speaker.detail.suffix.html/alexander-saar.html">
            <img src="/content/dam/adaptto/production/speaker-portraits/2020-Alexander-Saar.jpg/_jcr_content/renditions/original./2020-Alexander-Saar.jpg" alt="Alexander Saar" 
            </a>
          </div>
          <div class="speaker-data">
            <div class="speaker-name">
            <a href="https://adapt.to/2021/en/conference/speaker.detail.suffix.html/alexander-saar.html">Alexander Saar</a>
            </div>
            <div class="speaker-company">Adobe</div>
          </div>
        </div>
        </div>`
    div2.append(div3);
  }));
  block.append(div2);
}
