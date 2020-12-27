# Contributing

## Soumettre une pull request

1. [Fork][fork] le projet
2. Installer son environnement de travail
3. Créer une branche `git checkout -b ma-branche`
4. Procéder aux améliorations
5. Envoyez vos changements sur github et soumettez une [pull request][pr]

### Installer son environnement de travail
Vous devez disposer de Node.js ainsi que d'un IDE sur votre système.  
Une fois votre fork cloné ainsi qu'en étant sur une nouvelle branche, lancez :  
```
yarn install #ou: npm install
```

Le projet a maintenant ses dépendances installées mais il n'est pas encore compilé.  
Nous utilisons typescript car il possède un typage des variables plus fort que le javascript ce qui permet déjà de se prémunir de certaines erreurs de typage.  
Pour compiler le typescript, il faut lancer :
```
npx gulp
```
Cette commande lancera alors la compilation ainsi que les tests.  
Les tests sont écrits pour fonctionner avec le framework Jest et sont disponibles dans le répertoire `tests`.  
Pour rendre plus lisible le code, ce projet intègre ESLint qui permet de se fixer un standard d'écriture.  
Ce projet intègre également jsdoc-to-markdown. C'est une librairie qui lit et interprète le JSDoc et écrit le fichier README.md.

### Procéder aux améliorations
Pour améliorer ce projet, vous devrez vous conformer au [code de conduite](https://www.contributor-covenant.org/version/1/4/code-of-conduct/).  
Une fois vos changements effectués, vous lancez `git add .` puis `git commit -m "Description de l'amélioration"`.  
Ensuite, vous effectuerez une [pull request][pr] pour en faire profiter toute la communauté qui vous en sera reconnaissante.
