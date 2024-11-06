export interface Options {
	totalLength: number // Total length of the password
	maxNumberLength: number // Max number of numbers in the password
	maxSymbolLength: number // Max number of symbols in the password
}

function generatePassword(options: Options): string {
	const { totalLength, maxNumberLength, maxSymbolLength } = options

	// Define character sets
	const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const numbers = '0123456789'
	const symbols = '!@#$%^&*()-_=+[]{}|;:,.<>?'

	// Function to get random characters from a string
	function getRandomChar(set: string): string {
		return set[Math.floor(Math.random() * set.length)]
	}

	// Ensure we don't exceed the max limits for numbers and symbols
	const numNumbers = Math.min(maxNumberLength, totalLength)
	const numSymbols = Math.min(maxSymbolLength, totalLength - numNumbers)

	// The remaining characters will be filled with random letters
	const numLetters = totalLength - numNumbers - numSymbols

	// Create arrays to hold each character type
	let passwordChars: string[] = []

	// Add letters
	for (let i = 0; i < numLetters; i++) {
		passwordChars.push(getRandomChar(letters))
	}

	// Add numbers
	for (let i = 0; i < numNumbers; i++) {
		passwordChars.push(getRandomChar(numbers))
	}

	// Add symbols
	for (let i = 0; i < numSymbols; i++) {
		passwordChars.push(getRandomChar(symbols))
	}

	// If there's still space, fill it with random letters, numbers, or symbols
	while (passwordChars.length < totalLength) {
		const choice = Math.floor(Math.random() * 3)
		if (choice === 0 && passwordChars.length < totalLength) {
			passwordChars.push(getRandomChar(letters))
		} else if (choice === 1 && passwordChars.length < totalLength) {
			passwordChars.push(getRandomChar(numbers))
		} else if (choice === 2 && passwordChars.length < totalLength) {
			passwordChars.push(getRandomChar(symbols))
		}
	}

	// Shuffle the array to randomize the order
	for (let i = passwordChars.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[passwordChars[i], passwordChars[j]] = [passwordChars[j], passwordChars[i]] // Swap
	}

	// Join the array into a string and return the password
	return passwordChars.join('')
}

export default generatePassword
