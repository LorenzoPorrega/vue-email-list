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
      for(let i = 0; i < 10; i++){
      axios.get(url).then(function (axiosResponse){
        let randomEmails = [];
        let generatedEmail = axiosResponse.data.response;
        randomEmails.push(generatedEmail);
        console.log(randomEmails);
        });
      }
    }
  },
}).mount("#app");