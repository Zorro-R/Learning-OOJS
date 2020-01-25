function HtmlElement() {
  this.click = function() {
    console.log("click");
  };
}

HtmlElement.prototype.focus = function() {
  console.log("focus");
};

function HtmlSelectElement(...items) {
  // Call parent object
  HtmlElement.call(this);

  this.items = [...items];

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
}

HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const c1 = new HtmlElement();
const c2 = new HtmlSelectElement();
