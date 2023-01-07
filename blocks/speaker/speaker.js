export default function decorate(block) {
 
  const div1 = document.createElement('div');
  div1.className="speaker-gallery";
  
  fetch('/speaker/speaker.json')
  .then((response) => response.json())
  .then((data) => data.data.forEach( (speaker) => {
  
    const div2 = document.createElement('div');
    div2.className="speaker-gallery-item";
    div2.innerHTML = `<div class="speaker-image">
            <a href="/speaker/${speaker.Id}">
              <img src="${speaker.Image}?width=400" alt="${speaker.Firstname} ${speaker.Lastname}"/>
            </a>
          </div>
          <div class="speaker-data">
            <div class="speaker-name">
              <a href="/speaker/${speaker.Id}">${speaker.Firstname} ${speaker.Lastname}</a>
            </div>
            <div class="speaker-twitter">
              <a href="https://www.twitter.com/${speaker.Twitter}" target="_blank">@${speaker.Twitter}</a>
            </div>
            <div class="speaker-company">${speaker.Company}</div>
          </div>`
    div1.append(div2);
  }));
  block.append(div1);
}
