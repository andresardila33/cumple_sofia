const invitados = [
  "MAXIMILIANO",
  "ALEJANDRO",
  "VALENTINO",
  "JOSÉ ANGEL",
  "JOSÉ",
  "JOSE ANGEL",
  "JOSE",
  "ALANA",
  "ANTONELLA",
  "MARIANA",
  "MARIAJOSE",
  "MARIA JOSE",
  "MARÍAJOSÉ",
  "MARÍA JOSÉ",
  "MARÍA",
  "MÍA",
  "MIA",
  "LUCIANA",
  "SOFIA",
  "SOFÍA",
  "PROFE SOL",
  "PROFE",
  "EILIN",
  "VALERIA",
  "EILIN VALERIA",
];

function playAudio() {
  document.getElementById("music1").play();
}

const { createApp } = Vue;

createApp({
  data() {
    return {
      invitado: "",
      genero1: false,
      genero2: false,
      songs: [
        {
          title: "Atrapalos ya",
          author: "Oscar Roa",
          src: "./assets/pokemon.mp3",
        },
      ],
      player: new Audio(),
    };
  },
  methods: {
    findGuest() {
      if (this.genero1 === true) {
        this.showMessage1();
      }
      if (this.genero2 === true) {
        this.showMessage2();
      }
      for (let index = 0; index < invitados.length; index++) {
        if (this.invitado.toUpperCase() === invitados[index]) {
          this.invitado = this.invitado.toUpperCase();
          const elemento = this.invitado;
          if (
            elemento === "MAXIMILIANO" ||
            elemento === "ALEJANDRO" ||
            elemento === "VALENTINO" ||
            elemento === "JOSÉ ANGEL" ||
            elemento === "JOSÉ" ||
            elemento === "JOSE ANGEL" ||
            elemento === "JOSE"
          ) {
            this.showMessage1();
          }

          if (
            elemento === "ALANA" ||
            elemento === "ANTONELLA" ||
            elemento === "MARIANA" ||
            elemento === "MARIANA" ||
            elemento === "MARIAJOSE" ||
            elemento === "MARIA JOSE" ||
            elemento === "MARÍAJOSÉ" ||
            elemento === "MARÍA JOSÉ" ||
            elemento === "MARÍA" ||
            elemento === "MÍA" ||
            elemento === "MIA" ||
            elemento === "LUCIANA" ||
            elemento === "SOFIA" ||
            elemento === "SOFÍA" ||
            elemento === "PROFE SOL" ||
            elemento === "PROFE" ||
            elemento === "EILIN" ||
            elemento === "VALERIA" ||
            elemento === "EILIN VALERIA"
          ) {
            this.showMessage2();
          }
        }
      }
    },
    showMessage1() {
      if (this.genero1 === false) {
        this.genero1 = true;
      } else {
        this.genero1 = false;
      }
    },
    showMessage2() {
      if (this.genero2 === false) {
        this.genero2 = true;
      } else {
        this.genero2 = false;
      }
    },
  },
}).mount("#app");
