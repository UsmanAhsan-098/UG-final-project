const cards = [
  {
    front: " How many noses does a slug have",
    back: "Four",
    flipped: false,
  },
  {
    front:"Name a mammal that can’t jump",
    back: "Elephant, sloth, hippo, rhino",
    flipped: false,
  },
  {
    front: "What is the fastest land animal?",
    back: "The cheetah",
    flipped: false,
  },
  {
    front: "What is the fastest aquatic animal?",
    back: "The sailfish",
    flipped: false,
  },
];

new Vue({
  el: "#flashcard-app",
  data: {
    cards: cards,
    newFront: "",
    newBack: "",
    error: false,
  },
  methods: {
    toggleCard: function (card) {
      card.flipped = !card.flipped;
    },
    addNew: function () {
      if (this.newFront.length == 0 && this.newBack.length == 0) {
        this.error = true;
      } else {
        this.cards.push({
          front: this.newFront,
          back: this.newBack,
          flipped: false,
        });
        this.newFront = "";
        this.newBack = "";
        this.error = false;
      }
    },
    editCard: function (card) {
      var fixedfront = prompt("Edit Front");
      var fixedback = prompt("Edit Back");
      if (fixedfront.length > 0 && fixedback.length > 0) {
        card.front = fixedfront;
        card.back = fixedback;
      } else {
        alert("Invalid...");
      }
      //console.log(front, back);
    },
  },
});
