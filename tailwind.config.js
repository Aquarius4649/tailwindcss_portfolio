/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    // 他のプラグインがある場合はここに追加してください。
    // カスタムプラグインもここに追加します。
    function({ addUtilities }) {
      const newUtilities = {
        '.shadow-no-bottom': {
          'box-shadow': '0 -1px 2px 0 rgba(0, 0, 0, 0.05)',
        },
        '.shadow-no-top': {
          'box-shadow': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        },
        '.shadow-lg-no-top': {
          'box-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0)', // 上に影なし
        },
        '.shadow-lg-no-bottom': {
          'box-shadow': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0)',// 下に影なし
        },
      };

      addUtilities(newUtilities);
    },
    require('preline/plugin'),
  ],
}
