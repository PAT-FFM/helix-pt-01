export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  li.innerHTML = "hello world";
  ul.append(li);
  block.append(ul);
}
