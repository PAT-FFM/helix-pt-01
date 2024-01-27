export default function decorate(block) {
const path = location.pathname;
const sp = path.split('/')[2];
}
if (sp == null || sp.length < 2) {
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
              <a href="/speaker/?sp=${speaker.Id}">${speaker.Firstname} ${speaker.Lastname}</a>
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
    const speaker = x.data.find(element => element.Id === sp);      
    div1.innerHTML = `${speaker.Firstname} ${speaker.Lastname} (${speaker.Company})<img src="${speaker.Image}" alt=""/>`
    block.append(div1);
  
    const speakername = `${speaker.Firstname} ${speaker.Lastname}`; 
    const h4 = document.createElement('h4');
    h4.innerHTML="Talks by " + speakername; 
    block.append(h4);
    const ul = document.createElement('ul');
    
    fetch('/talks/talks-01.json')
    .then((response) => response.json())
    .then( x => {
    x.data.filter(t => t.speaker.includes(speakername)).forEach( (talk) => {
    const li = document.createElement('li');
    li.className="talk-item";
    li.innerHTML = `<a href="${talk.talk.split('|')[1]}">${talk.talk.split('|')[0]}</a> (${talk.year})`
    ul.append(li);
  });
  block.append(ul);
  });      
  });
}
}
