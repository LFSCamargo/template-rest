export default {
  testEnvironment: "node",
  collectCoverage: true,
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1",
  },
  globals: {
    "ts-jest": {
      tsConfigFile: "tsconfig.json",
    },
  },
  coverageThreshold: {
    global: {
      statements: 85,
      branches: 50,
      functions: 85,
      lines: 85,
    },
  },
  testMatch: ["**/__tests__/*.+(ts|tsx|js)"],
};
