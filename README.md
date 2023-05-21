# kdecole-api

[![view on npm](http://img.shields.io/npm/v/kdecole-api.svg?style=flat-square)](https://www.npmjs.org/package/kdecole-api)
![GitHub CI](https://github.com/maelgangloff/kdecole-api/actions/workflows/CI.yml/badge.svg)
[![Discord](https://img.shields.io/discord/1095829734211977276?label=Discord&style=flat-square)](https://discord.gg/9u69mxsFT6)
[![npm](https://img.shields.io/npm/dm/kdecole-api?style=flat-square)](https://npm-stat.com/charts.html?package=kdecole-api)

<p align="center">
  <img src="https://github.com/The-Rabbit-Team/.github/blob/master/banners/kdecole-api.png?raw=true" />
</p>

Support non officiel de l'API Kdecole  (Mon Bureau Numérique, Skolengo, etc.).

Ce module permet de récupérer les données de l'ENT de manière automatique. De plus, certaines fonctions implémentées permettent de prétraiter les données (conversion de l'emploi du temps au format iCalendar, export du relevé de notes au format CSV par exemple).

Cette librairie est destinée à être dépréciée au profit de [scolengo-api](https://github.com/maelgangloff/scolengo-api) dans l'éventualité où l'accès à l'ancienne API est définitivement clos.  

Pour participer et se tenir informé, **rejoins le serveur Discord: https://discord.gg/9u69mxsFT6**  


## Remarques importantes:
- Il est clairement mentionné que cette librairie est n'est pas officielle.
- Ce module n'est pas une contrefaçon car il n'existe pas de module similaire édité officiellement.
- Les utilisateurs ne peuvent accéder qu'à leurs propres données. Ils sont soumis au même processus d'authentification que celui implémenté dans l'application.
- Les données des utilisateurs ne sont pas davantage exposées puisqu'un utilisateur ne peut accéder qu'à ses propres données. Personne n'a le contrôle sur cette limitation qui est inhérente au fonctionnement de l'API des serveurs de Skolengo.
- Cette librairie ne se suffit pas à elle-même pour fonctionner. Il est nécessaire de l'importer dans un projet et l'utilisateur est le seul responsable de son code et des éventuelles conséquences.
- Tout utilisateur de cette librairie a *a priori* lu l'entièreté du fichier de licence GPLv3 disponible publiquement [LICENSE](https://github.com/maelgangloff/kdecole-api/blob/master/LICENSE) ainsi que de ce présent fichier de présentation.
- Tout utilisateur de cette librairie a *a priori* lu l'entièreté du code de ce projet avant toute utilisation.
- Eu égard l'ensemble de ces remarques, les contributeurs et *a fortiori* l'auteur du projet ne peuvent être tenus comme responsables de tout dommage potentiel.  

L'accès à l'API requiert une en-tête (header) avec la version de l'application en cours d'utilisation.

Le terme "code" ou "password" ne réfère pas ici à votre mot de passe, mais à un code temporaire généré par votre ENT (dans paramètres > application mobile). C'est comme cela que fonctionne l'authentification à l'API.

## Liste des ENT supportés :
| Nom usuel de l'ENT           | Identifiant interne librairie      | URL de l'API mobilité                                     |
|------------------------------|------------------------------------|-----------------------------------------------------------|
| Mon Bureau Numérique         | PROD_MON_BUREAU_NUMERIQUE          | https://mobilite.monbureaunumerique.fr/mobilite           |
| Mon ENT Occitanie            | PROD_MON_ENT_OCCITANIE             | https://mobilite.mon-ent-occitanie.fr/mobilite            |
| Arsène 76                    | PROD_ARSENE76                      | https://mobilite.arsene76.fr/mobilite                     |
| ENT27                        | PROD_ENT27                         | https://mobilite.ent27.fr/mobilite                        |
| ENT Creuse                   | PROD_ENTCREUSE                     | https://mobilite.entcreuse.fr/mobilite                    |
| ENT Auvergne-Rhône-Alpes     | PROD_AUVERGNERHONEALPES            | https://mobilite.ent.auvergnerhonealpes.fr/mobilite       |
| Agora 06                     | PROD_AGORA06                       | https://mobilite.agora06.fr/mobilite                      |
| CyberCollèges 42             | PROD_CYBERCOLLEGES42               | https://mobilite.cybercolleges42.fr/mobilite              |
| eCollège 31 Haute-Garonne    | PROD_ECOLLEGE_HAUTE_GARONNE        | https://mobilite.ecollege.haute-garonne.fr/mobilite       |
| Mon collège en Val d'Oise    | PROD_MONCOLLEGE_VALDOISE           | https://mobilite.moncollege.valdoise.fr/mobilite          |
| Webcollège Seine-Saint-Denis | PROD_WEBCOLLEGE_SEINESAINTDENIS    | https://mobilite.webcollege.seinesaintdenis.fr/mobilite   |
| Eclat-BFC                    | PROD_ECLAT_BFC                     | https://mobilite.eclat-bfc.fr/mobilite                    |
| @ucollège84                  | PROD_AUCOLLEGE84_VAUCLUSE          | https://mobilite.aucollege84.vaucluse.fr/mobilite         |
| ENT Val de Marne             | PROD_ENT_VAL_DE_MARNE              | https://mobilite.entvaldemarne.skolengo.com/mobilite      |
| Skolengo                     | PROD_SKOLENGO                      | https://mobilite.skolengo.com/mobilite                    |
| Kosmos Éducation             | PROD_KOSMOS_EDUCATION              | https://mobilite.kosmoseducation.com/mobilite             |
| Skolengo-Collèges et Lycées  | PROD_KOSMOS_EDUCATION_PDL          | https://mobilite.pdl.kosmoseducation.com/mobilite         |
| Schulportal Ostbelgien       | PROD_SCHULPORTAL_OSTBELGIEN        | https://mobilite.schulen.be/mobilite                      |

Une autre méthode pour obtenir un token est d'utiliser la ligne de commande:
```shell
npx kdecole-api -u USERNAME -p CODE --ent PROD_MON_BUREAU_NUMERIQUE
```

<a name="Kdecole"></a>

## Kdecole
**Kind**: global class  

* [Kdecole](#Kdecole)
    * [new Kdecole(authToken, apiVersion, idEtablissement, apiURL)](#new_Kdecole_new)
    * _instance_
        * [.logout()](#Kdecole+logout) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.starting()](#Kdecole+starting) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.getReleve(idEleve)](#Kdecole+getReleve) ⇒ <code>Promise.&lt;Releve&gt;</code>
        * [.getActualites(idEleve)](#Kdecole+getActualites) ⇒ <code>Promise.&lt;Array.&lt;Actualite&gt;&gt;</code>
        * [.getContenuArticle(uid)](#Kdecole+getContenuArticle) ⇒ <code>Promise.&lt;ContenuArticle&gt;</code>
        * [.getContenuInformation(uid)](#Kdecole+getContenuInformation) ⇒ <code>Promise.&lt;ContenuArticle&gt;</code>
        * [.getTravailAFaire(idEleve, notBeforeDate)](#Kdecole+getTravailAFaire) ⇒ <code>Promise.&lt;TravailAFaire&gt;</code>
        * [.getContenuActivite(uidSeance, uid, idEleve)](#Kdecole+getContenuActivite) ⇒ <code>Promise.&lt;ContenuActivite&gt;</code>
        * [.setActiviteFinished(uidSeance, uid, flagRealise)](#Kdecole+setActiviteFinished) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.getAbsences(idEleve)](#Kdecole+getAbsences) ⇒ <code>Promise.&lt;AbsencesList&gt;</code>
        * [.getInfoUtilisateur(idEleve)](#Kdecole+getInfoUtilisateur) ⇒ <code>Promise.&lt;Utilisateur&gt;</code>
        * [.getCalendrier(idEleve)](#Kdecole+getCalendrier) ⇒ <code>Promise.&lt;Calendrier&gt;</code>
        * [.getNotes(idEleve)](#Kdecole+getNotes) ⇒ <code>Promise.&lt;NotesList&gt;</code>
        * [.getMessagerieInfo()](#Kdecole+getMessagerieInfo) ⇒ <code>Promise.&lt;MessageInfo&gt;</code>
        * [.getMessagerieBoiteReception(pagination)](#Kdecole+getMessagerieBoiteReception) ⇒ <code>Promise.&lt;MessageBoiteReception&gt;</code>
        * [.getCommunication(id)](#Kdecole+getCommunication) ⇒ <code>Promise.&lt;Communication&gt;</code>
        * [.reportCommunication(id)](#Kdecole+reportCommunication) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.deleteCommunication(id)](#Kdecole+deleteCommunication) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.setCommunicationLu(id)](#Kdecole+setCommunicationLu) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.sendMessage(id, corpsMessage)](#Kdecole+sendMessage) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.gestionAppels()](#Kdecole+gestionAppels) ⇒ <code>Promise.&lt;GestionAppels&gt;</code>
        * [.validerAppel(appel)](#Kdecole+validerAppel) ⇒ <code>Promise.&lt;void&gt;</code>
    * _static_
        * [.login(username, password, apiVersion, apiUrl)](#Kdecole.login) ⇒ <code>Promise.&lt;string&gt;</code>

<a name="new_Kdecole_new"></a>

### new Kdecole(authToken, apiVersion, idEtablissement, apiURL)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| authToken | <code>string</code> |  | Le jeton d'accès |
| apiVersion | <code>ApiVersion</code> \| <code>string</code> |  | La version de l'application mobile autorisée par l'API |
| idEtablissement | <code>number</code> | <code>0</code> | L'identifiant de l'établissement |
| apiURL | <code>ApiUrl</code> \| <code>string</code> |  | L'URL de l'API Kdecole |

**Example**  
```js
const { Kdecole, ApiVersion, ApiUrl } = require('kdecole-api');

const token = 'azertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazert'
const user = new Kdecole(token, ApiVersion.PROD_MON_BUREAU_NUMERIQUE, 0, ApiUrl.PROD_MON_BUREAU_NUMERIQUE)
user.getInfoUtilisateur().then(infoUser => {
  console.log(`Jeton valide, connecté en tant que ${infoUser.nom}.`)
})
```
<a name="Kdecole+logout"></a>

### kdecole.logout() ⇒ <code>Promise.&lt;void&gt;</code>
Révoque le jeton d'accès

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  
**Example**  
```js
const { Kdecole } = require('kdecole-api')
const user = new Kdecole(authToken)
user.logout()
```
<a name="Kdecole+starting"></a>

### kdecole.starting() ⇒ <code>Promise.&lt;void&gt;</code>
Ping à l'API.
Cet appel est initialement réalisé par l'application mobile pour vérifier si le token et la version de l'app sont valides.
Le serveur retourne un code de statut `HTTP 204 No Content` si l'utilisateur est correctement authentifié.

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  
**Example**  
```js
const { Kdecole } = require('kdecole-api')
const user = new Kdecole(authToken)
try {
  user.starting()
}
catch (e) {
  // Une exception est levée si l'utilisateur n'est pas correctement authentifié
}
```
<a name="Kdecole+getReleve"></a>

### kdecole.getReleve(idEleve) ⇒ <code>Promise.&lt;Releve&gt;</code>
Retourne le relevé de notes de l'élève

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| idEleve | <code>string</code> | Identifiant d'un élève |

**Example**  
```js
kdecole.getReleve() //Retourne le relevé de l'élève
kdecole.getReleve(idEleve) //Retourne le relevé d'un élève précis
```
**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(AUTH_TOKEN)
user.getReleve(idEleve).then(releve => {
 // Votre code
 releve.toCSV() // Exporter son relevé des notes dans un objet contenant les devoirs au format CSV
 })
```
<a name="Kdecole+getActualites"></a>

### kdecole.getActualites(idEleve) ⇒ <code>Promise.&lt;Array.&lt;Actualite&gt;&gt;</code>
Retourne un tableau des actualités de l'établissement de l'utilisateur

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| idEleve | <code>string</code> | Identifiant d'un élève |

**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(AUTH_TOKEN)
user.getActualites(idEleve).then(actualites => {
 // Votre code
 })
```
<a name="Kdecole+getContenuArticle"></a>

### kdecole.getContenuArticle(uid) ⇒ <code>Promise.&lt;ContenuArticle&gt;</code>
Retourne le contenu d'un article
Un article est publié par l'établissement.

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| uid | <code>string</code> | Identifiant unique de l'article |

**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(AUTH_TOKEN)
user.getContenuArticle(uid).then(contenuArticle => {
 // Votre code
 })
```
<a name="Kdecole+getContenuInformation"></a>

### kdecole.getContenuInformation(uid) ⇒ <code>Promise.&lt;ContenuArticle&gt;</code>
Retourne le contenu d'une information
Une information est publiée par la plateforme EMS.

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| uid | <code>string</code> | Identifiant unique de l'information |

**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(AUTH_TOKEN)
user.getContenuInformation(uid).then(contenuInformation => {
 // Votre code
 })
```
<a name="Kdecole+getTravailAFaire"></a>

### kdecole.getTravailAFaire(idEleve, notBeforeDate) ⇒ <code>Promise.&lt;TravailAFaire&gt;</code>
Retourne la liste des devoirs de l'élève

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| idEleve | <code>string</code> | Identifiant d'un élève |
| notBeforeDate | <code>Date</code> | Un objet Date pour ne sélectionner que les devoirs postérieurs à une date |

**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(AUTH_TOKEN)
user.getTravailAFaire(idEleve).then(taf => {
 // Votre code
 })
```
<a name="Kdecole+getContenuActivite"></a>

### kdecole.getContenuActivite(uidSeance, uid, idEleve) ⇒ <code>Promise.&lt;ContenuActivite&gt;</code>
Retourne les détails d'un devoir à faire

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| uidSeance | <code>number</code> | Identifiant de la séance |
| uid | <code>number</code> | Identifiant du devoir à faire |
| idEleve | <code>string</code> | Identifiant d'un élève |

**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(AUTH_TOKEN)
user.getContenuActivite(uidSeance, uid, idEleve).then(contenuActivite => {
 // Votre code
 })
```
<a name="Kdecole+setActiviteFinished"></a>

### kdecole.setActiviteFinished(uidSeance, uid, flagRealise) ⇒ <code>Promise.&lt;void&gt;</code>
Permet de marquer un devoir comme étant fait

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| uidSeance | <code>number</code> | Identifiant de la séance |
| uid | <code>number</code> | Identifiant du devoir |
| flagRealise | <code>boolean</code> | Statut du devoir |

**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(AUTH_TOKEN)
user.setActiviteFinished(uidSeance, uid, flagRealise)
```
<a name="Kdecole+getAbsences"></a>

### kdecole.getAbsences(idEleve) ⇒ <code>Promise.&lt;AbsencesList&gt;</code>
Retourne la liste des absences d'un élève

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| idEleve | <code>string</code> | Identifiant d'un élève |

**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(AUTH_TOKEN)
user.getAbsences(idEleve).then(absences => {
 // Votre code
 })
```
<a name="Kdecole+getInfoUtilisateur"></a>

### kdecole.getInfoUtilisateur(idEleve) ⇒ <code>Promise.&lt;Utilisateur&gt;</code>
Retourne les informations d'un utilisateur (type de compte, nom complet, numéro de l'établissement, etc.)

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| idEleve | <code>string</code> | Identifiant d'un élève |

**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(AUTH_TOKEN)
user.getInfoUtilisateur(idEleve).then(infoUtilisateur => {
 // Votre code
 })
```
<a name="Kdecole+getCalendrier"></a>

### kdecole.getCalendrier(idEleve) ⇒ <code>Promise.&lt;Calendrier&gt;</code>
Retourne l'emploi du temps de l'élève à J-7 et J+7

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| idEleve | <code>string</code> | Identifiant d'un élève |

**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(AUTH_TOKEN)
user.getCalendrier(idEleve).then(calendrier => {
 // Votre code
 })
```
<a name="Kdecole+getNotes"></a>

### kdecole.getNotes(idEleve) ⇒ <code>Promise.&lt;NotesList&gt;</code>
Retourne la liste des récentes notes de l'élève

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| idEleve | <code>string</code> | Identifiant d'un élève |

**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(AUTH_TOKEN)
user.getNotes(idEleve).then(notes => {
 // Votre code
 })
```
<a name="Kdecole+getMessagerieInfo"></a>

### kdecole.getMessagerieInfo() ⇒ <code>Promise.&lt;MessageInfo&gt;</code>
Retourne l'état de la messagerie de l'utilisateur (nombre de mails non lus)

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  
**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(AUTH_TOKEN)
user.getMessagerieInfo().then(messagerieInfo => {
 // Votre code
 })
```
<a name="Kdecole+getMessagerieBoiteReception"></a>

### kdecole.getMessagerieBoiteReception(pagination) ⇒ <code>Promise.&lt;MessageBoiteReception&gt;</code>
Retourne les mails présents dans la boîte mail
Le paramètre `pagination` permet de remonter dans le passé dans la liste des fils de discussions

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| pagination | <code>number</code> | <code>0</code> | Le nombre de fils de discussion à tronquer (système de pagination) |

**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(AUTH_TOKEN)
user.getMessagerieBoiteReception().then(messagerieBoiteReception => {
 // Votre code
 })
```
<a name="Kdecole+getCommunication"></a>

### kdecole.getCommunication(id) ⇒ <code>Promise.&lt;Communication&gt;</code>
Retourne les détails d'un fil de discussion

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Identifiant d'un fil de discussion |

**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(AUTH_TOKEN)
user.getCommunication(id).then(communication => {
 // Votre code
 })
```
<a name="Kdecole+reportCommunication"></a>

### kdecole.reportCommunication(id) ⇒ <code>Promise.&lt;void&gt;</code>
Permet de signaler une communication

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Identifiant d'un fil de discussion |

**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(AUTH_TOKEN)
user.reportCommunication(id)
```
<a name="Kdecole+deleteCommunication"></a>

### kdecole.deleteCommunication(id) ⇒ <code>Promise.&lt;void&gt;</code>
Supprime la communication

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Identifiant d'un fil de discussion |

**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(AUTH_TOKEN)
user.deleteCommunication(id)
```
<a name="Kdecole+setCommunicationLu"></a>

### kdecole.setCommunicationLu(id) ⇒ <code>Promise.&lt;void&gt;</code>
Marquer une communication lue

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Identifiant d'un fil de discussion |

**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(AUTH_TOKEN)
user.setCommunicationLu(id)
```
<a name="Kdecole+sendMessage"></a>

### kdecole.sendMessage(id, corpsMessage) ⇒ <code>Promise.&lt;void&gt;</code>
Envoyer un message sur un fil de discussion

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Identifiant d'un fil de discussion |
| corpsMessage | <code>string</code> | Corps du message HTML |

**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(AUTH_TOKEN)
user.sendMessage(id, corpsMessage)
```
<a name="Kdecole+gestionAppels"></a>

### kdecole.gestionAppels() ⇒ <code>Promise.&lt;GestionAppels&gt;</code>
Retourne les feuilles d'appel

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  
**Returns**: <code>Promise.&lt;GestionAppels&gt;</code> - Les feuilles d'appel.  
**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(AUTH_TOKEN)
user.gestionAppels().then(gestionAppels => {
 // Votre code
 })
```
<a name="Kdecole+validerAppel"></a>

### kdecole.validerAppel(appel) ⇒ <code>Promise.&lt;void&gt;</code>
Valide l'appel de la classe

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Description |
| --- | --- |
| appel | L'appel à valider |

**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(AUTH_TOKEN)
const appel = {
  "idEtab": 10485,
  "idAppel": 534552,
  "listeAbsencesAppel": [
    {
      "idEleve": "AAP05567",
      "type": "absence",
      "dateDebut": 1609259443000,
      "dateFin": 1609263043000,
      "modifiable": true
    }
  ]
}
user.validerAppel(appel)
```
<a name="Kdecole.login"></a>

### Kdecole.login(username, password, apiVersion, apiUrl) ⇒ <code>Promise.&lt;string&gt;</code>
Demande à l'API de générer un nouveau jeton pour l'utilisateur

**Kind**: static method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | Le nom d'utilisateur |
| password | <code>string</code> | Le mot de passe à usage unique |
| apiVersion | <code>ApiVersion</code> \| <code>string</code> | La version de l'application mobile autorisée par l'API |
| apiUrl | <code>apiURL</code> \| <code>string</code> | L'URL de l'API Kdecole |

**Example**  
```js
const { Kdecole, ApiUrl, ApiVersion } = require('kdecole-api')
Kdecole.login(username, uniquePassword, ApiVersion.PROD_MON_BUREAU_NUMERIQUE, ApiUrl.PROD_MON_BUREAU_NUMERIQUE).then(token => console.log(token)) // Affiche son token dans la console
```
