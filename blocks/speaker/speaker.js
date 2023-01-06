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
    div3.className="speaker-gallery-item";
    div3.innerHTML = `<div class="box-padding">
          <div class="speaker-image">
            <a href="/speaker/${speaker.Page}">
            <img src="${speaker.Image}?width=400" alt="${speaker.Firstname} ${speaker.Lastname}" 
            </a>
          </div>
          <div class="speaker-data">
            <div class="speaker-name">
            <a href="/speaker/${speaker.Page}">${speaker.Firstname} ${speaker.Lastname}</a>
            </div>
            <div class="speaker-company">${speaker.Company}</div>
          </div>
        </div>`
    div2.append(div3);
  }));
  block.append(div2);
}
