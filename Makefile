.PHONY: lint test
.DEFAULT_GOAL=dist
PACKAGE_MANAGER=yarn

node_modules: package.json yarn.lock ## Installer les dépendances
	$(PACKAGE_MANAGER) install

dist: node_modules src tsconfig.json ## Construire les fichiers de distribution
	npx tsc -p tsconfig.json

test: node_modules tests ## Tester le fonctionnement du code
	npx jest

lint: node_modules .eslintrc .eslintignore ## Analyse statique du code
	npx eslint src tests --ext .ts

README.md: dist ## Construire le fichier de description du module
	npx jsdoc2md -f dist/Kdecole.js > README.md
