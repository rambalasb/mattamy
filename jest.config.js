module.exports = {
	modulePaths: ['<rootDir>'],
	roots: ['<rootDir>/src/components', '<rootDir>/src/utils'],
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
	moduleNameMapper: {
		'\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
	},
	transform: {
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
	coverageReporters: ['html', 'text', 'text-summary'],
	collectCoverageFrom: [
		'src/**/*.{js,jsx}',
		'!**/*.stories.{js,jsx}',
		'!src/assets/svgs/*.{js,jsx}',
		'!**/node_modules/**',
		'!**/coverage/**',
		'!**/storybook/**',
		'!jest.config.js',
	],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
}
