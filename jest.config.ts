import type { Config } from "jest";
import nextJest from "next/jest.js";

const customJestConfig = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  // 	// Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  verbose: true,
};

const createJestConfig = nextJest({
  dir: "./",
})(customJestConfig);

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = async () => {
  const jestConfig = await createJestConfig();
  const moduleNameMapper = {
    ...jestConfig.moduleNameMapper,
    "^components/(.*)$": "<rootDir>/components/$1",
    "^utils/*": "<rootDir>/utils/$1",
    "^connections/*": "<rootDir>/connections/$1",
  };
  return { ...jestConfig, moduleNameMapper };
};
