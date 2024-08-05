<template>
    <div class="my-quotes bg-neutral-light dark:bg-neutral-dark text-gray-800 p-8 rounded-lg shadow-md">
      <p class="text-lg text-gray-800 font-semibold mb-4">
        "{{ currentQuote }}"
      </p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        quotes: [
          "There are no limits to what you can accomplish except the limits you place on your own thinking.",
          "The only way to do great work is to love what you do.",
          "Believe you can and you're halfway there.",
          "Don't watch the clock; do what it does. Keep going.",
          "Success is not final, failure is not fatal: it is the courage to continue that counts."
        ],
        currentQuote: ""
      };
    },
    mounted() {
      this.getRandomQuote();
    },
    methods: {
      getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * this.quotes.length);
        this.currentQuote = this.quotes[randomIndex];
      }
    }
  };
  </script>
  