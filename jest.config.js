module.exports = {
    "roots": [
        "<rootDir>/specs"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    testEnvironment: 'node',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
