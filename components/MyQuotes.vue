<template>
  <div class="bg-neutral-light dark:bg-neutral-dark text-gray-800 dark:text-white px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20">
    <div class="max-w-xl mb-10 mx-auto text-center lg:max-w-2xl md:mb-12">
      <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-800 dark:text-white sm:text-4xl mx-auto">
        <span class="relative inline-block">
          <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
            <defs>
              <pattern id="4314d5df-c4ea-4854-be21-f1fdbb6fe951" x="0" y="0" width=".135" height=".30">
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect fill="url(#4314d5df-c4ea-4854-be21-f1fdbb6fe951)" width="52" height="24"></rect>
          </svg>
        </span>
        "{{ currentQuote.text }}"
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        -- {{ currentQuote.author }} --
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quotes: [
        { text: "There are no limits to what you can accomplish except the limits you place on your own thinking.", author: "Brian Tracy" },
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
        { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "It's never too late to become whatever you want to be.", author: "George Eliot" }
      ],
      currentQuote: { text: "", author: "" }
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

<style scoped>
/* Add any custom styles here if needed */
</style>
