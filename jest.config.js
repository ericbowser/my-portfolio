/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(js|jsx|mjs)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "mjs", "json"],
  transformIgnorePatterns: ["/node_modules/(?!axios)/"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "<rootDir>/test/__mocks__/styleMock.js",
  },
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.(test|spec).js?(x)",
    "<rootDir>/api/**/__tests__/**/*.(test|spec).js?(x)",
  ],
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "api/**/*.{js,mjs}",
    "!src/main.jsx",
  ],
};
