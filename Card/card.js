(function() {
  var Card,
      card = Object.create(HTMLElement.prototype),
      _doc = (document._currentScript || document.currentScript).ownerDocument,
      _template = _doc.querySelector('template');

  card.createdCallback = function() {
    console.log('card created');
  };
  card.attachedCallback = function() {
    this.innerHTML = _template.innerHTML;
    this.render();

    // make draggable
    var draggable = new Draggabilly(this.querySelector('.face'), {});

    // flip card on click
    function flipCard() {
      var faceUp = thisCard.getAttribute('face-up');

      if (faceUp === "true")
        return thisCard.setAttribute('face-up', "false");

      return thisCard.setAttribute('face-up', "true");
    }
  };
  card.attributeChangedCallback = function(name, oldVal, newVal) {
    this.render();
  };
  card.detachedCallback = function() {
    this.removeEventListener('click', handler);
  };

  card.render = function() {
    var face = this.getAttribute('face'),
        suit = this.getAttribute('suit'),
        faceUp = this.getAttribute('face-up'),
        faceValues = this.querySelectorAll('.face-value');

    if (faceUp === "true") {
      this.querySelector('.face').className = "face";
    } else {
      this.querySelector('.face').className = 'face down';
    }

    for (var i in faceValues) {
      faceValues[i].textContent = face;
    }

    this.querySelector('.suit').textContent = suit;
  };

  document.registerElement('ryan-card', { prototype: card });
}());
