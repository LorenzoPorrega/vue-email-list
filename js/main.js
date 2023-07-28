'use strict'

const url = "https://flynn.boolean.careers/exercises/api/random/mail";

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
    randomEmails: [],
    }
  },
  methods: {
    btnClick(){
      this.randomEmails = [];
      for(let i = 0; i < 10; i++){
      axios
        .get(url)
        .then((axiosResponse) => {
          let generatedEmail = axiosResponse.data.response;
          console.log(generatedEmail)
          this.randomEmails.push(generatedEmail);
          });
      }
    }
  },
}).mount("#app");
