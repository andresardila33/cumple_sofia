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
      for (let index = 0; index < invitados.length; index++) {
        if (this.invitado.toUpperCase() === invitados[index]) {
          this.invitado = this.invitado.toUpperCase();
          this.showMessage();
          //const element = array[index];
        }
      }
    },
    showMessage() {
      if (this.genero1 === false) {
        this.genero1 = true;
      } else {
        this.genero1 = false;
      }
    },
  },
}).mount("#app");
