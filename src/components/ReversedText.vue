<template>
    <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        
        <div class="absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 
        shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-2xl font-semibold">Pra você, mo</h1>
            </div>
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="relative">
                  <input
                    autocomplete="off"
                    id="texto"
                    name="texto"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    v-model="inputText"
                    placeholder="Digite o texto aqui"
                  />
                  <label
                    for="texto"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                  Digite o texto aqui
                  </label>
                </div>
                <div class="relative">
                  <button class="bg-green-500 text-white rounded-md px-2 py-1" @click="reverseTextAndSpeak">Reverter e Falar</button>
                </div>
                <div class="">
                    <h1 class="text-2xl font-semibold">{{reversedText}}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputText: '',
        reversedText: '',
      };
    },
    methods: {
      reverseText() {
        const reversed = this.inputText.split('').reverse().join('');
        this.reversedText = reversed;
      },
      reverseTextAndSpeak() {
        const reversed = this.inputText.split('').reverse().join('');
        this.reversedText = reversed;
        this.speak(reversed);
      },
      speak(text) {
        if ('speechSynthesis' in window) {
          const speech = new SpeechSynthesisUtterance(text);
          speech.lang = 'pt-BR';
          speechSynthesis.speak(speech);
        } else {
          console.log('Desculpe, seu navegador não suporta a síntese de fala.');
        }
      },
    },
  };
  </script>
  