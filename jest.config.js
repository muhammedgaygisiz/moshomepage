// jest.config.ts
// import type {Config} from '@jest/types';

// Sync object
const config = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: [
    "<rootDir>/jest-config/setup.ts"
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(@storybook)/*)"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/storybook-static/",
    "<rootDir>/src/test.ts"
  ],
  coveragePathIgnorePatterns: [
    "/jest-config/",
    "/node_modules/"
  ],
  snapshotSerializers: [
    "<rootDir>/node_modules/jest-preset-angular/build/serializers/ng-snapshot.js",
    "<rootDir>/node_modules/jest-preset-angular/build/serializers/html-comment.js",
    "<rootDir>/node_modules/jest-preset-angular/build/serializers/no-ng-attributes.js"
  ],
  globals: {
    "ts-jest": {
      "tsconfig": "<rootDir>/tsconfig.spec.json",
      "stringifyContentPathRegex": "\\.html$",
      "diagnostics": false,
      "isolatedModules": true,
      "astTransformers": {
        "before": [
          '<rootDir>/node_modules/jest-preset-angular/build/InlineFilesTransformer.js',
          '<rootDir>/node_modules/jest-preset-angular/build/StripStylesTransformer.js'
        ]
      }
    }
  },
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/src/jest-config/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/jest-config/fileMock.js"
  },
  transform: {
    "^.+\\.(ts|html)$": "ts-jest",
    "^.+\\.js$": "babel-jest"
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node",
    ".html"
  ],
  verbose: true,
};

module.exports = config;

// Or async function
// export default async (): Promise<Config.InitialOptions> => {
//   return {
//     verbose: true,
//   };
// };
