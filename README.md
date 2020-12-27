<a name="Kdecole"></a>

## Kdecole
Support non-officiel de l'API Kdecole (Mon Bureau Numérique, Skolengo, etc.)

**Kind**: global class  

* [Kdecole](#Kdecole)
    * [new Kdecole(authToken, appVersion, idEtablissement)](#new_Kdecole_new)
    * _instance_
        * [.logout()](#Kdecole+logout) ⇒ <code>Promise.&lt;(Desactivation\|Error)&gt;</code>
        * [.getReleve(idEleve)](#Kdecole+getReleve) ⇒ <code>Promise.&lt;Releve&gt;</code>
        * [.getActualites(idEleve)](#Kdecole+getActualites) ⇒ <code>Promise.&lt;Array.&lt;Actualite&gt;&gt;</code>
        * [.getContenuArticle(uid)](#Kdecole+getContenuArticle) ⇒ <code>Promise.&lt;ContenuArticle&gt;</code>
        * [.getTravailAFaire(idEleve)](#Kdecole+getTravailAFaire) ⇒ <code>Promise.&lt;TravailAFaire&gt;</code>
        * [.getContenuActivite(uidSeance, uid, idEleve)](#Kdecole+getContenuActivite) ⇒ <code>Promise.&lt;ContenuActivite&gt;</code>
        * [.setActiviteFinished(uidSeance, uid, flagRealise)](#Kdecole+setActiviteFinished)
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
        * [.kdecole()](#Kdecole+kdecole)
    * _static_
        * [.login(login, password)](#Kdecole.login) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.callAPI()](#Kdecole.callAPI)

<a name="new_Kdecole_new"></a>

### new Kdecole(authToken, appVersion, idEtablissement)

| Param | Type | Description |
| --- | --- | --- |
| authToken | <code>string</code> | Le jeton d'accès |
| appVersion | <code>string</code> | La version de l'API |
| idEtablissement | <code>number</code> | L'identifiant de l'établissement |

**Example**  
```jsconst Kdecole = require('kdecole-api').defaultconst user = new Kdecole(Kdecole.login(USERNAME, PASSWORD))// ou encore:const user = new Kdecole(AUTH_TOKEN)```
<a name="Kdecole+logout"></a>

### kdecole.logout() ⇒ <code>Promise.&lt;(Desactivation\|Error)&gt;</code>
Invalide le jeton d'accès

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  
**Example**  
```jsconst Kdecole = require('kdecole-api').defaultconst user = new Kdecole(AUTH_TOKEN)user.logout()```
<a name="Kdecole+getReleve"></a>

### kdecole.getReleve(idEleve) ⇒ <code>Promise.&lt;Releve&gt;</code>
Retourne le relevé des notes de l'élève

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| idEleve | <code>string</code> | Identifiant d'un élève |

**Example**  
```jskdecole.getReleve() //Retourne le relevé de l'élèvekdecole.getReleve(idEleve) //Retourne le relevé d'un élève précis```
**Example**  
```jsconst Kdecole = require('kdecole-api').defaultconst user = new Kdecole(AUTH_TOKEN)user.getReleve(idEleve).then((releve)=>{ // Votre code })```
<a name="Kdecole+getActualites"></a>

### kdecole.getActualites(idEleve) ⇒ <code>Promise.&lt;Array.&lt;Actualite&gt;&gt;</code>
Retourne un tableau des actualités de l'établissement de l'utilisateur

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| idEleve | <code>string</code> | Identifiant d'un élève |

**Example**  
```jsconst Kdecole = require('kdecole-api').defaultconst user = new Kdecole(AUTH_TOKEN)user.getActualites(idEleve).then((actualites)=>{ // Votre code })```
<a name="Kdecole+getContenuArticle"></a>

### kdecole.getContenuArticle(uid) ⇒ <code>Promise.&lt;ContenuArticle&gt;</code>
Retourne le contenu d'un article

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| uid | <code>string</code> | Identifiant unique de l'article |

**Example**  
```jsconst Kdecole = require('kdecole-api').defaultconst user = new Kdecole(AUTH_TOKEN)user.getContenuArticle(uid).then((contenuArticle)=>{ // Votre code })```
<a name="Kdecole+getTravailAFaire"></a>

### kdecole.getTravailAFaire(idEleve) ⇒ <code>Promise.&lt;TravailAFaire&gt;</code>
Retourne la liste des devoirs de l'élève

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| idEleve | <code>string</code> | Identifiant d'un élève |

**Example**  
```jsconst Kdecole = require('kdecole-api').defaultconst user = new Kdecole(AUTH_TOKEN)user.getTravailAFaire(idEleve).then((taf)=>{ // Votre code })```
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
```jsconst Kdecole = require('kdecole-api').defaultconst user = new Kdecole(AUTH_TOKEN)user.getContenuActivite(uidSeance, uid, idEleve).then((contenuActivite)=>{ // Votre code })```
<a name="Kdecole+setActiviteFinished"></a>

### kdecole.setActiviteFinished(uidSeance, uid, flagRealise)
Permet de marquer un devoir comme étant fait

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| uidSeance | <code>number</code> | Identifiant de la séance |
| uid | <code>number</code> | Identifiant du devoir |
| flagRealise | <code>boolean</code> | Statut du devoir |

**Example**  
```jsconst Kdecole = require('kdecole-api').defaultconst user = new Kdecole(AUTH_TOKEN)user.setActiviteFinished(uidSeance, uid, flagRealise)```
<a name="Kdecole+getAbsences"></a>

### kdecole.getAbsences(idEleve) ⇒ <code>Promise.&lt;AbsencesList&gt;</code>
Retourne la liste des absences d'un élève

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| idEleve | <code>string</code> | Identifiant d'un élève |

**Example**  
```jsconst Kdecole = require('kdecole-api').defaultconst user = new Kdecole(AUTH_TOKEN)user.getAbsences(idEleve).then((absences)=>{ // Votre code })```
<a name="Kdecole+getInfoUtilisateur"></a>

### kdecole.getInfoUtilisateur(idEleve) ⇒ <code>Promise.&lt;Utilisateur&gt;</code>
Retourne les informations d'un utilisateur (type de compte, nom complet, numéro de l'établiissement, etc.)

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| idEleve | <code>string</code> | Identifiant d'un élève |

**Example**  
```jsconst Kdecole = require('kdecole-api').defaultconst user = new Kdecole(AUTH_TOKEN)user.getInfoUtilisateur(idEleve).then((infoUtilisateur)=>{ // Votre code })```
<a name="Kdecole+getCalendrier"></a>

### kdecole.getCalendrier(idEleve) ⇒ <code>Promise.&lt;Calendrier&gt;</code>
Retourne l'emploi du temps de l'élève à J-7 et J+7

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| idEleve | <code>string</code> | Identifiant d'un élève |

**Example**  
```jsconst Kdecole = require('kdecole-api').defaultconst user = new Kdecole(AUTH_TOKEN)user.getCalendrier(idEleve).then((calendrier)=>{ // Votre code })```
<a name="Kdecole+getNotes"></a>

### kdecole.getNotes(idEleve) ⇒ <code>Promise.&lt;NotesList&gt;</code>
Retourne la liste des récentes notes de l'élève

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| idEleve | <code>string</code> | Identifiant d'un élève |

**Example**  
```jsconst Kdecole = require('kdecole-api').defaultconst user = new Kdecole(AUTH_TOKEN)user.getNotes(idEleve).then((notes)=>{ // Votre code })```
<a name="Kdecole+getMessagerieInfo"></a>

### kdecole.getMessagerieInfo() ⇒ <code>Promise.&lt;MessageInfo&gt;</code>
Retourne l'état de la messagerie de l'utilisateur (nombre de mails non lus)

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  
**Example**  
```jsconst Kdecole = require('kdecole-api').defaultconst user = new Kdecole(AUTH_TOKEN)user.getMessagerieInfo().then((messagerieInfo)=>{ // Votre code })```
<a name="Kdecole+getMessagerieBoiteReception"></a>

### kdecole.getMessagerieBoiteReception() ⇒ <code>Promise.&lt;MessageBoiteReception&gt;</code>
Retourne les mails présents dans la boîte mail

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  
**Example**  
```jsconst Kdecole = require('kdecole-api').defaultconst user = new Kdecole(AUTH_TOKEN)user.getMessagerieBoiteReception().then((messagerieBoiteReception)=>{ // Votre code })```
<a name="Kdecole+getCommunication"></a>

### kdecole.getCommunication(id) ⇒ <code>Promise.&lt;Communication&gt;</code>
Retourne les détails d'un fil de discussion

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Identifiant d'un fil de discussion |

**Example**  
```jsconst Kdecole = require('kdecole-api').defaultconst user = new Kdecole(AUTH_TOKEN)user.getCommunication(id).then((communication)=>{ // Votre code })```
<a name="Kdecole+reportCommunication"></a>

### kdecole.reportCommunication(id) ⇒ <code>Promise.&lt;void&gt;</code>
Permet de signaler une communication

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Identifiant d'un fil de discussion |

**Example**  
```jsconst Kdecole = require('kdecole-api').defaultconst user = new Kdecole(AUTH_TOKEN)user.reportCommunication(id)```
<a name="Kdecole+deleteCommunication"></a>

### kdecole.deleteCommunication(id) ⇒ <code>Promise.&lt;void&gt;</code>
Supprime la communication

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Identifiant d'un fil de discussion |

**Example**  
```jsconst Kdecole = require('kdecole-api').defaultconst user = new Kdecole(AUTH_TOKEN)user.deleteCommunication(id)```
<a name="Kdecole+setCommunicationLu"></a>

### kdecole.setCommunicationLu(id) ⇒ <code>Promise.&lt;void&gt;</code>
Marquer une communication lue

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Identifiant d'un fil de discussion |

**Example**  
```jsconst Kdecole = require('kdecole-api').defaultconst user = new Kdecole(AUTH_TOKEN)user.setCommunicationLu(id)```
<a name="Kdecole+sendMessage"></a>

### kdecole.sendMessage(id, corpsMessage) ⇒ <code>Promise.&lt;void&gt;</code>
Envoyer un message sur un fil de discussion

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Identifiant d'un fil de discussion |
| corpsMessage | <code>string</code> | Corps du message HTML |

**Example**  
```jsconst Kdecole = require('kdecole-api').defaultconst user = new Kdecole(AUTH_TOKEN)user.sendMessage(id, corpsMessage)```
<a name="Kdecole+kdecole"></a>

### kdecole.kdecole()
Effectue un premier traitement des données reçues en provenance de l'API et en retourne le résultat

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  
<a name="Kdecole.login"></a>

### Kdecole.login(login, password) ⇒ <code>Promise.&lt;string&gt;</code>
Retourne le jeton d'accès de l'utilisateur

**Kind**: static method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type | Description |
| --- | --- | --- |
| login | <code>string</code> | Le nom d'utilisateur |
| password | <code>string</code> | Le mot de passe à usage unique |

**Example**  
```jsconst Kdecole = require('kdecole-api').defaultconst AUTH_TOKEN = Kdecole.login(USERNAME, PASSWORD)```
<a name="Kdecole.callAPI"></a>

### Kdecole.callAPI()
Envoie les requêtes à l'APILes en-têtes qui doivent être présentes sont: - X-Kdecole-Vers  Version de l'application mobile - X-Kdecole-Auth  Jeton d'accès

**Kind**: static method of [<code>Kdecole</code>](#Kdecole)  
