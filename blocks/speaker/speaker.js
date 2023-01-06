export default function decorate(block) {
  fetch('/speaker/speaker.json')
  .then((response) => response.json())
  .then((data) => data.forEach( (speaker) => console.log(speaker.Page) ));
  
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  li.innerHTML = "hello world";
  ul.append(li);
  block.append(ul);
}
