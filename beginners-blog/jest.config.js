module.exports = {

    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
        "axios": "axios/dist/node/axios.cjs"
    },
    transformIgnorePatterns: ['node_modules/(?!(sucrase)/)', 'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?|@react-navigation|@rneui)/)'],
    extensionsToTreatAsEsm: ['.jsx', '.ts'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
        '^.+\\.[t|j]sx?$': 'babel-jest'
    },


};