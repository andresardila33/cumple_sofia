const invitados = [
  "MAXIMILIANO",
  "ALEJANDRO",
  "VALENTINO",
  "JOSÉ ANGEL",
  "JOSÉ",
  "ALANA",
  "ANTONELLA",
  "MARIANA",
  "MARIAJOSE",
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

const { createApp } = Vue;

createApp({
  data() {
    return {
      invitado: "",
      message: false,
    };
  },
  methods: {
    findGuest() {
      for (let index = 0; index < invitados.length; index++) {
        if (this.invitado.toUpperCase() === invitados[index])
          this.showMessage();
        //const element = array[index];
      }
    },
    showMessage() {
      if (this.message === false) {
        this.message = true;
      } else {
        this.message = false;
      }
    },
  },
}).mount("#app");
