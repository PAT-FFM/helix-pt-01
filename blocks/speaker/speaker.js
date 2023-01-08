export default function decorate(block) {
if (location.hash == null || location.hash === "" ) {
  
  const div1 = document.createElement('div');
  div1.className="speaker-gallery";
  
  fetch('/speaker/speaker.json')
  .then((response) => response.json())
  .then((x) => { 
    x.data.forEach( (speaker) => {
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
            ${speaker.Twitter ? `
            <div class="speaker-twitter">
              <a href="https://www.twitter.com/${speaker.Twitter}" target="_blank">@${speaker.Twitter}</a>
            </div>` : `<!-- no twitter handle -->`}
            <div class="speaker-company">${speaker.Company}</div>
          </div>`
    div1.append(div2);
  });
  block.append(div1);
  });
}
else {
  
  const div1 = document.createElement('div');
  div1.className="speaker-item";
  
  fetch('/speaker/speaker.json')
  .then((response) => response.json())
  .then((x) => { 
    const speaker = x.data.find(element => element.Id === location.hash);      
    div1.innerHTML = `${speaker.Firstname} ${speaker.Lastname} (${speaker.Company})<img src="${speaker.Image}" alt=""/>`
  });
  block.append(div1);
  });
}
}
