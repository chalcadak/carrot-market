/** @type {import("prettier").Config & import("prettier-plugin-tailwindcss").PluginOptions} */
const config = {
  printWidth: 120, // 한 줄 최대 글자 수
  semi: true, // 세미콜론 사용
  singleQuote: true, // 작은 따옴표 사용
  trailingComma: "all", // 여러 줄에서 마지막에도 콤마 추가
  tabWidth: 2, // 들여쓰기 스페이스 크기
  bracketSpacing: true, // { foo: bar } 스타일
  arrowParens: "always", // 화살표 함수 매개변수 괄호 항상 사용
  plugins: ["prettier-plugin-tailwindcss"], // Tailwind className 자동 정렬
};

export default config;
