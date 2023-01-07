export default function decorate(block) {

  const speakername = document.getElementsByTagName("h1")[0].innerText;
  const h4 = document.createElement('h4');
  h4.innerHTML="Talks by " + speakername;
  block.append(h4);
  const ul = document.createElement('ul');
  
  fetch('/talks/talks-01.json')
  .then((response) => response.json())
  .then( x => x.data.filter(t => t.speaker === speakername).forEach( (talk) => {
    const li = document.createElement('li');
    li.className="talk-item";
    talk.year
    talk.talk.
    li.innerHTML = `<a href="${talk.talk.split('|')[1]}">${talk.talk.split('|')[0]}</a> ${talk.year}`
    ul.append(li);
 }));
  block.append(ul);
}
