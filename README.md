<a name="Kdecole"></a>

## Kdecole
Support non-officiel de l'API Kdecole (Mon Bureau Numérique, Skolengo, etc.)

L'accès à l'API requiert une en-tête (header) avec la version de l'application en cours d'utilisation.

Les versions à utiliser lors de la création de l'instance `Kdecole` sont données ci-dessous.

|          Nom de l'ENT         | Version | URL de l'API                                            |
|:-----------------------------:|:-------:|---------------------------------------------------------|
|      Mon Bureau Numérique     |  3.7.14 | https://mobilite.monbureaunumerique.fr/mobilite         |
|       Mon ENT Occitanie       |  3.7.14 | https://mobilite.mon-ent-occitanie.fr/mobilite          |
|           Arsene 76           |  3.7.14 | https://mobilite.arsene76.fr/mobilite                   |
|             ENT27             |  3.7.14 | https://mobilite.ent27.fr/mobilite                      |
|           ENT Creuse          |  3.7.14 | https://mobilite.entcreuse.fr/mobilite                  |
|    ENT Auvergne-Rhône-Alpes   |  3.7.14 | https://mobilite.ent.auvergnerhonealpes.fr/mobilite     |
|     Savoirs Numériques 62     |  3.7.14 | https://mobilite.savoirsnumeriques62.fr/mobilite        |
|            Agora 06           |  3.7.14 | https://mobilite.agora06.fr/mobilite                    |
|        CyberCollèges 42       |  3.7.14 | https://mobilite.cybercolleges42.fr/mobilite            |
|   eCollège 31 Haute-Garonne   |  3.7.14 | https://mobilite.ecollege.haute-garonne.fr/mobilite     |
|   Mon collège en Val d'Oise   |  3.7.14 | https://mobilite.moncollege.valdoise.fr/mobilite        |
|  Webcollège Seine-Saint-Denis |  3.7.14 | https://mobilite.webcollege.seinesaintdenis.fr/mobilite |
|           Eclat-BFC           |  3.7.14 | https://mobilite.eclat-bfc.fr/mobilite                  |
|          @ucollège84          |  3.7.14 | https://mobilite.aucollege84.vaucluse.fr/mobilite       |
|         Skolengo Demo         |  3.7.14 | https://mobilite.demo.skolengo.com/mobilite             |
| Kosmos Éducation (aefe, etc.) |  3.7.14 | https://mobilite.kosmoseducation.com/mobilite           |

Une autre méthode pour obtenir un token est d'utiliser la ligne de commande.

```shell
npx kdecole-api -u USERNAME -p CODE -ent PROD_MON_BUREAU_NUMERIQUE
```

**Kind**: global class  

* [Kdecole](#Kdecole)
    * [new Kdecole(authToken, appVersion, idEtablissement, apiURL)](#new_Kdecole_new)
    * _instance_
        * [.logout()](#Kdecole+logout) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.starting()](#Kdecole+starting) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.getReleve(idEleve)](#Kdecole+getReleve) ⇒ <code>Promise.&lt;Releve&gt;</code>
        * [.getActualites(idEleve)](#Kdecole+getActualites) ⇒ <code>Promise.&lt;Array.&lt;Actualite&gt;&gt;</code>
        * [.getContenuArticle(uid)](#Kdecole+getContenuArticle) ⇒ <code>Promise.&lt;ContenuArticle&gt;</code>
        * [.getTravailAFaire(idEleve)](#Kdecole+getTravailAFaire) ⇒ <code>Promise.&lt;TravailAFaire&gt;</code>
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
        * [.login(username, password, appVersion, apiUrl)](#Kdecole.login) ⇒ <code>Promise.&lt;string&gt;</code>

<a name="new_Kdecole_new"></a>

### new Kdecole(authToken, appVersion, idEtablissement, apiURL)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| authToken | <code>string</code> |  | Le jeton d'accès |
| appVersion | <code>ApiVersion</code> \| <code>string</code> |  | La version de l'application mobile autorisée par l'API |
| idEtablissement | <code>number</code> | <code>0</code> | L'identifiant de l'établissement |
| apiURL | <code>ApiUrl</code> \| <code>string</code> |  | L'URL de l'API Kdecole |

**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(Kdecole.login(USERNAME, PASSWORD))
// ou encore:
const user = new Kdecole(AUTH_TOKEN)
```
<a name="Kdecole+logout"></a>

### kdecole.logout() ⇒ <code>Promise.&lt;void&gt;</code>
Invalide le jeton d'accès

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
user.getReleve(idEleve).then((releve)=>{
 // Votre code
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
user.getActualites(idEleve).then((actualites)=>{
 // Votre code
 })
```
<a name="Kdecole+getContenuArticle"></a>

### kdecole.getContenuArticle(uid) ⇒ <code>Promise.&lt;ContenuArticle&gt;</code>
Retourne le contenu d'un article

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| uid | <code>string</code> | Identifiant unique de l'article |

**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(AUTH_TOKEN)
user.getContenuArticle(uid).then((contenuArticle)=>{
 // Votre code
 })
```
<a name="Kdecole+getTravailAFaire"></a>

### kdecole.getTravailAFaire(idEleve) ⇒ <code>Promise.&lt;TravailAFaire&gt;</code>
Retourne la liste des devoirs de l'élève

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| idEleve | <code>string</code> | Identifiant d'un élève |

**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(AUTH_TOKEN)
user.getTravailAFaire(idEleve).then((taf)=>{
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
user.getContenuActivite(uidSeance, uid, idEleve).then((contenuActivite)=>{
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
user.getAbsences(idEleve).then((absences)=>{
 // Votre code
 })
```
<a name="Kdecole+getInfoUtilisateur"></a>

### kdecole.getInfoUtilisateur(idEleve) ⇒ <code>Promise.&lt;Utilisateur&gt;</code>
Retourne les informations d'un utilisateur (type de compte, nom complet, numéro de l'établiissement, etc.)

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| idEleve | <code>string</code> | Identifiant d'un élève |

**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(AUTH_TOKEN)
user.getInfoUtilisateur(idEleve).then((infoUtilisateur)=>{
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
user.getCalendrier(idEleve).then((calendrier)=>{
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
user.getNotes(idEleve).then((notes)=>{
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
user.getMessagerieInfo().then((messagerieInfo)=>{
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
user.getMessagerieBoiteReception().then((messagerieBoiteReception)=>{
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
user.getCommunication(id).then((communication)=>{
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
Retourne les feuilles d'appel.

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  
**Returns**: <code>Promise.&lt;GestionAppels&gt;</code> - Les feuilles d'appel.  
**Example**  
```js
const { Kdecole } = require('kdecole-api')

const user = new Kdecole(AUTH_TOKEN)
user.gestionAppels().then((gestionAppels)=>{
 // Votre code
 })
```
<a name="Kdecole+validerAppel"></a>

### kdecole.validerAppel(appel) ⇒ <code>Promise.&lt;void&gt;</code>
Valide l'appel de la classe.

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

### Kdecole.login(username, password, appVersion, apiUrl) ⇒ <code>Promise.&lt;string&gt;</code>
Retourne le jeton d'accès de l'utilisateur

**Kind**: static method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | Le nom d'utilisateur |
| password | <code>string</code> | Le mot de passe à usage unique |
| appVersion | <code>ApiVersion</code> \| <code>string</code> | La version de l'application mobile autorisée par l'API |
| apiUrl | <code>apiURL</code> \| <code>string</code> | L'URL de l'API Kdecole |

**Example**  
```js
const { Kdecole, ApiUrl, ApiVersion } = require('kdecole-api')
Kdecole.login(username, uniquePassword, ApiVersion.PROD_MON_BUREAU_NUMERIQUE, ApiUrl.PROD_MON_BUREAU_NUMERIQUE).then(token => console.log(token)) // Affiche son token dans la console
```
