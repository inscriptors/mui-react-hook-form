module.exports = {
	env: {
		node: true
	},
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 2015 // or 6, or higher
	},
	rules: {
		'no-debugger': 'warn',
		'no-alert': 'warn',
		'no-await-in-loop': 'off',
		'arrow-body-style': ['error', 'as-needed'],
		'prefer-destructuring': [
			'error',
			{
				object: true,
				array: false
			}
		],
		'no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_'
			}
		]
	}
};