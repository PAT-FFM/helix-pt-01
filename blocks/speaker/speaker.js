export default function decorate(block) {
  const div = document.createElement('div');
  div.innerHTML = `<a href="/speaker/speaker.json" target="_blank">Speaker Database</a>`;
  block.append(div);
  const ul = document.createElement('ul');
  fetch('/speaker/speaker.json')
  .then((response) => response.json())
  .then((data) => data.data.forEach( (speaker) => {
    const li = document.createElement('li');
    li.innerHTML = speaker.Page + `<img src="${speaker.Image}?width=400">`
    ul.append(li);
  }));
  block.append(ul);
}
