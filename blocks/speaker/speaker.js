export default function decorate(block) {
  const ul = document.createElement('ul');
  fetch('/speaker/speaker.json')
  .then((response) => response.json())
  .then((data) => data.data.forEach( (speaker) => {
    const li = document.createElement('li');
    li.innerHTML = speaker.Page + `<img src="${speaker.Image}?width=100">`
    ul.append(li);
  }));
  block.append(ul);
}
