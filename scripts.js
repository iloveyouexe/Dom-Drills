document.addEventListener("DOMContentLoaded", function () {
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  let h1text = document.createTextNode("This is an H1");
  let h2 = document.createElement("h2");
  let h2text = document.createTextNode("This is an h2");
  let h3 = document.createElement("h3");
  let h3text = document.createTextNode("This is an h3");
  let h4 = document.createElement("h4");
  let h4text = document.createTextNode("This is an h4");
  let h5 = document.createElement("h5");
  let h5text = document.createTextNode("This is an h5");
  let h6 = document.createElement("h6");
  let h6text = document.createTextNode("This is an h6");
  let colors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
  ];
  let button = document.createElement("button");
  let btnTxt = document.createTextNode("Click to add new list item");
  let x = 1;

  div.classList.add("header-container");
  h1.classList.add("h1");
  h2.classList.add("h2");
  h3.classList.add("h3");
  h4.classList.add("h4");
  h5.classList.add("h5");
  h6.classList.add("h6");
  button.classList.add("list-button");

  document.body.appendChild(div);
  h1.appendChild(h1text);
  div.appendChild(h1);
  h2.appendChild(h2text);
  div.appendChild(h2);
  h3.appendChild(h3text);
  div.appendChild(h3);
  h4.appendChild(h4text);
  div.appendChild(h4);
  h5.appendChild(h5text);
  div.appendChild(h5);
  h6.appendChild(h6text);
  div.appendChild(h6);
  button.appendChild(btnTxt);
  div.appendChild(button);

  function getRandomColor() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  }

  function createList() {
    let newList = document.createElement("ul");
    let newListItem = document.createElement("li");
    let liText = document.createTextNode(`This is list item ${x}`);
    x += 1;
    div.appendChild(newList);
    newList.appendChild(newListItem);
    newListItem.appendChild(liText);

    newListItem.addEventListener("click", function () {
      let randomColor = getRandomColor();
      newListItem.style.color = randomColor;
    });

    newListItem.addEventListener("dblclick", function () {
      this.remove();
    });
  }

  h1.addEventListener("click", function () {
    let randomColor = getRandomColor();
    h1.style.color = randomColor;
  });

  h2.addEventListener("click", function () {
    let randomColor = getRandomColor();
    h2.style.color = randomColor;
  });

  h3.addEventListener("click", function () {
    let randomColor = getRandomColor();
    h3.style.color = randomColor;
  });

  h4.addEventListener("click", function () {
    let randomColor = getRandomColor();
    h4.style.color = randomColor;
  });

  h5.addEventListener("click", function () {
    let randomColor = getRandomColor();
    h5.style.color = randomColor;
  });

  h6.addEventListener("click", function () {
    let randomColor = getRandomColor();
    h6.style.color = randomColor;
  });

  button.addEventListener("click", createList);
});
