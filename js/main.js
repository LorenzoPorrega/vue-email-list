'use strict'

const url = "https://flynn.boolean.careers/exercises/api/random/mail";

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
    randomEmail: [],
    }
  },
  methods: {
    btnClick(){
      axios.get(url).then(function (axiosResponse){
        let randomEmail = [];
        for(let i = 0; i < 10; i++){
          let generatedEmail = axiosResponse.data.response;
          randomEmail.push(generatedEmail);
        }
        console.log(randomEmail);
      });
    },
  },
}).mount("#app");