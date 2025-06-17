.PHONY: format lint test coverage clean

# Node modules path
NODE_MODULES = ./node_modules/.bin

# Format code using Prettier
format:
	$(NODE_MODULES)/prettier --write "src/**/*.{ts,tsx,js,jsx,json,css,md}"

# Lint code using ESLint
lint:
	$(NODE_MODULES)/eslint "src/**/*.{ts,tsx}" --max-warnings 0

# Run tests
test:
	$(NODE_MODULES)/jest

# Run tests with coverage
coverage:
	$(NODE_MODULES)/jest --coverage

# Clean build artifacts
clean:
	rm -rf .next
	rm -rf coverage
	rm -rf node_modules

# Install dependencies
install:
	npm install

# Build the project
build:
	npm run build

# Development server
dev:
	npm run dev

# Default target
all: format lint test coverage 