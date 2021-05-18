## Classes

<dl>
<dt><a href="#Kdecole">Kdecole</a></dt>
<dd><p>Support non-officiel de l&#39;API Kdecole (Mon Bureau Numérique, Skolengo, etc.)</p>
<p>L&#39;accès à l&#39;API requiert une en-tête avec la version de l&#39;application en cours d&#39;utilisation.
Les versions à utiliser lors de la création de l&#39;instance <code>Kdecole</code> sont données ci-dessous.</p>
<table>
<thead>
<tr>
<th align="center">Nom de l&#39;ENT</th>
<th align="center">Version</th>
<th>URL de l&#39;API</th>
</tr>
</thead>
<tbody><tr>
<td align="center">Mon Bureau Numérique</td>
<td align="center">3.4.14</td>
<td><a href="https://mobilite.monbureaunumerique.fr/mobilite">https://mobilite.monbureaunumerique.fr/mobilite</a></td>
</tr>
<tr>
<td align="center">Mon ENT Occitanie</td>
<td align="center">3.5.2</td>
<td><a href="https://mobilite.mon-ent-occitanie.fr/mobilite">https://mobilite.mon-ent-occitanie.fr/mobilite</a></td>
</tr>
<tr>
<td align="center">Arsene 76</td>
<td align="center">3.7.11</td>
<td><a href="https://mobilite.arsene76.fr/mobilite">https://mobilite.arsene76.fr/mobilite</a></td>
</tr>
<tr>
<td align="center">ENT27</td>
<td align="center">3.5.6</td>
<td><a href="https://mobilite.ent27.fr/mobilite">https://mobilite.ent27.fr/mobilite</a></td>
</tr>
<tr>
<td align="center">ENT Creuse</td>
<td align="center">3.5.6</td>
<td><a href="https://mobilite.entcreuse.fr/mobilite">https://mobilite.entcreuse.fr/mobilite</a></td>
</tr>
<tr>
<td align="center">ENT Auvergne-Rhône-Alpes</td>
<td align="center">3.7.11</td>
<td><a href="https://mobilite.ent.auvergnerhonealpes.fr/mobilite">https://mobilite.ent.auvergnerhonealpes.fr/mobilite</a></td>
</tr>
<tr>
<td align="center">Savoirs Numériques 62</td>
<td align="center">3.5.4</td>
<td><a href="https://mobilite.savoirsnumeriques62.fr/mobilite">https://mobilite.savoirsnumeriques62.fr/mobilite</a></td>
</tr>
<tr>
<td align="center">Agora 06</td>
<td align="center">3.7.14</td>
<td><a href="https://mobilite.agora06.fr/mobilite">https://mobilite.agora06.fr/mobilite</a></td>
</tr>
<tr>
<td align="center">CyberCollèges 42</td>
<td align="center">3.5.6</td>
<td><a href="https://mobilite.cybercolleges42.fr/mobilite">https://mobilite.cybercolleges42.fr/mobilite</a></td>
</tr>
<tr>
<td align="center">eCollège 31 Haute-Garonne</td>
<td align="center">3.1.15</td>
<td><a href="https://mobilite.ecollege.haute-garonne.fr/mobilite">https://mobilite.ecollege.haute-garonne.fr/mobilite</a></td>
</tr>
<tr>
<td align="center">Mon collège en Val d&#39;Oise</td>
<td align="center">3.4.11</td>
<td><a href="https://mobilite.moncollege.valdoise.fr/mobilite">https://mobilite.moncollege.valdoise.fr/mobilite</a></td>
</tr>
<tr>
<td align="center">Webcollège Seine-Saint-Denis</td>
<td align="center">3.7.14</td>
<td><a href="https://mobilite.webcollege.seinesaintdenis.fr/mobilite">https://mobilite.webcollege.seinesaintdenis.fr/mobilite</a></td>
</tr>
<tr>
<td align="center">Eclat-BFC</td>
<td align="center">3.5.3</td>
<td><a href="https://mobilite.eclat-bfc.fr/mobilite">https://mobilite.eclat-bfc.fr/mobilite</a></td>
</tr>
</tbody></table>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#cli">cli()</a></dt>
<dd><p>Pour obtenir un jeton d&#39;authentification, vous pouvez utiliser la ligne de commande</p>
</dd>
</dl>

<a name="Kdecole"></a>

## Kdecole
Support non-officiel de l'API Kdecole (Mon Bureau Numérique, Skolengo, etc.)

L'accès à l'API requiert une en-tête avec la version de l'application en cours d'utilisation.
Les versions à utiliser lors de la création de l'instance `Kdecole` sont données ci-dessous.

|         Nom de l'ENT           | Version   | URL de l'API                                              |
|:----------------------------:  |:-------:  |---------------------------------------------------------  |
|     Mon Bureau Numérique       |  3.4.14   | https://mobilite.monbureaunumerique.fr/mobilite           |
|       Mon ENT Occitanie        |  3.5.2    | https://mobilite.mon-ent-occitanie.fr/mobilite            |
|           Arsene 76            |  3.7.11   | https://mobilite.arsene76.fr/mobilite                     |
|             ENT27              |  3.5.6    | https://mobilite.ent27.fr/mobilite                        |
|          ENT Creuse            |  3.5.6    | https://mobilite.entcreuse.fr/mobilite                    |
|   ENT Auvergne-Rhône-Alpes     |  3.7.11   | https://mobilite.ent.auvergnerhonealpes.fr/mobilite       |
|     Savoirs Numériques 62      |  3.5.4    | https://mobilite.savoirsnumeriques62.fr/mobilite          |
|           Agora 06             |  3.7.14   | https://mobilite.agora06.fr/mobilite                      |
|       CyberCollèges 42         |  3.5.6    | https://mobilite.cybercolleges42.fr/mobilite              |
|    eCollège 31 Haute-Garonne   |  3.1.15   | https://mobilite.ecollege.haute-garonne.fr/mobilite       |
|   Mon collège en Val d'Oise    |  3.4.11   | https://mobilite.moncollege.valdoise.fr/mobilite          |
| Webcollège Seine-Saint-Denis   |  3.7.14   | https://mobilite.webcollege.seinesaintdenis.fr/mobilite   |
|           Eclat-BFC            |  3.5.3    | https://mobilite.eclat-bfc.fr/mobilite                    |

**Kind**: global class  

* [Kdecole](#Kdecole)
    * [new Kdecole(authToken, appVersion, idEtablissement, apiURL)](#new_Kdecole_new)
    * _instance_
        * [.logout()](#Kdecole+logout) ⇒ <code>Promise.&lt;Desactivation&gt;</code>
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
        * [.getMessagerieBoiteReception()](#Kdecole+getMessagerieBoiteReception) ⇒ <code>Promise.&lt;MessageBoiteReception&gt;</code>
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
| appVersion | <code>string</code> |  | La version de l'application mobile autorisée par l'API |
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

### kdecole.logout() ⇒ <code>Promise.&lt;Desactivation&gt;</code>
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

### kdecole.getMessagerieBoiteReception() ⇒ <code>Promise.&lt;MessageBoiteReception&gt;</code>
Retourne les mails présents dans la boîte mail

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  
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
| appVersion | <code>string</code> | La version de l'application mobile autorisée par l'API |
| apiUrl | <code>apiURL</code> | L'URL de l'API Kdecole |

**Example**  
```js
const { Kdecole } = require('kdecole-api')

const authToken = Kdecole.login(username, password)
console.log(authToken) //Afficher son token d'authentification
```
<a name="cli"></a>

## cli()
Pour obtenir un jeton d'authentification, vous pouvez utiliser la ligne de commande

**Kind**: global function  
**Example**  
```bash
npx kdecole <identifiant> <code_activation_mobile>
```
