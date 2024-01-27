module.exports = {
    content: ["./public/**/*.html"],
    theme: {
      extend: {
        container:{
            padding: 5
        }
      },
    },
    plugins: [
      require('@tailwindcss/forms')
    ],
  }