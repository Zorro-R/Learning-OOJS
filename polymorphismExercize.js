function HtmlElement() {
  this.click = function() {
    console.log("click");
  };
}

HtmlElement.prototype.focus = function() {
  console.log("focus");
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function(item) {
    this.items.push(item);
  };

  this.removeItem = function(item) {
    // Check if the item is in the items array
    const index = this.items.indexOf(item);
    if (index == -1) {
      throw new Error("Item not in items.");
    } else {
      // If so, remove it
      this.items.splice(index, 1);
    }
  };

  this.render = function() {
    // Assemble the select elements
    str = `<select>${this.items
      .map(item => `    <option>${item}</option>`)
      .join("\n")}
      </select>`;
    return str;
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

HtmlImageElement = function(src = undefined) {
  this.src = src;

  this.render = function() {
    return `<img src=${src} />`;
  };
};

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype = HtmlImageElement;

const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement("http://")
];

for (let elem of elements) {
  console.log(elem.render());
}
