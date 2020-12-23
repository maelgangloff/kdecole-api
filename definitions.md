<a name="Kdecole"></a>

## Kdecole
Support de l'API Kdecole (Mon Bureau Numérique)

**Kind**: global class  

* [Kdecole](#Kdecole)
    * _instance_
        * [.logout()](#Kdecole+logout) ⇒ <code>Promise.&lt;(Desactivation\|Error)&gt;</code>
        * [.getReleve(idEleve)](#Kdecole+getReleve) ⇒ <code>Promise.&lt;Releve&gt;</code>
        * [.getActualites(idEleve)](#Kdecole+getActualites) ⇒ <code>Promise.&lt;Array.&lt;Actualite&gt;&gt;</code>
        * [.getContenuArticle(uid)](#Kdecole+getContenuArticle) ⇒ <code>Promise.&lt;ContenuArticle&gt;</code>
        * [.getTravailAFaire(idEleve)](#Kdecole+getTravailAFaire) ⇒ <code>Promise.&lt;TravailAFaire&gt;</code>
        * [.getContenuActivite(uidSeance, uid, idEleve)](#Kdecole+getContenuActivite) ⇒ <code>Promise.&lt;ContenuActivite&gt;</code>
        * [.getAbsences(idEleve)](#Kdecole+getAbsences) ⇒ <code>Promise.&lt;AbsencesList&gt;</code>
        * [.getInfoUtilisateur(idEleve)](#Kdecole+getInfoUtilisateur) ⇒ <code>Promise.&lt;Utilisateur&gt;</code>
        * [.getCalendrier(idEleve)](#Kdecole+getCalendrier) ⇒ <code>Promise.&lt;Calendrier&gt;</code>
        * [.getNotes(idEleve)](#Kdecole+getNotes) ⇒ <code>Promise.&lt;NotesList&gt;</code>
        * [.getMessagerieInfo()](#Kdecole+getMessagerieInfo) ⇒ <code>Promise.&lt;MessageInfo&gt;</code>
        * [.getMessagerieBoiteReception()](#Kdecole+getMessagerieBoiteReception) ⇒ <code>Promise.&lt;MessageBoiteReception&gt;</code>
        * [.getCommunication(id)](#Kdecole+getCommunication) ⇒ <code>Promise.&lt;Communication&gt;</code>
        * [.signalerCommunication(id)](#Kdecole+signalerCommunication) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.supprimerCommunication(id)](#Kdecole+supprimerCommunication) ⇒ <code>Promise.&lt;void&gt;</code>
        * [.getMoyenneGenerale(trimestre, idEleve)](#Kdecole+getMoyenneGenerale) ⇒ <code>Promise.&lt;number&gt;</code>
        * [.getMedianeGenerale(trimestre, idEleve)](#Kdecole+getMedianeGenerale) ⇒ <code>Promise.&lt;number&gt;</code>
        * [.kdecole()](#Kdecole+kdecole)
    * _static_
        * [.login(login, password)](#Kdecole.login) ⇒ <code>Promise.&lt;string&gt;</code>
        * [.callAPI()](#Kdecole.callAPI)

<a name="Kdecole+logout"></a>

### kdecole.logout() ⇒ <code>Promise.&lt;(Desactivation\|Error)&gt;</code>
Invalide le jeton d'accès

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  
<a name="Kdecole+getReleve"></a>

### kdecole.getReleve(idEleve) ⇒ <code>Promise.&lt;Releve&gt;</code>
Retourne le relevé des notes de l'élève

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type |
| --- | --- |
| idEleve | <code>string</code> | 

<a name="Kdecole+getActualites"></a>

### kdecole.getActualites(idEleve) ⇒ <code>Promise.&lt;Array.&lt;Actualite&gt;&gt;</code>
Retourne un tableau des actualités de l'établissement de l'utilisateur

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type |
| --- | --- |
| idEleve | <code>string</code> | 

<a name="Kdecole+getContenuArticle"></a>

### kdecole.getContenuArticle(uid) ⇒ <code>Promise.&lt;ContenuArticle&gt;</code>
Retourne le contenu d'un article

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type |
| --- | --- |
| uid | <code>string</code> | 

<a name="Kdecole+getTravailAFaire"></a>

### kdecole.getTravailAFaire(idEleve) ⇒ <code>Promise.&lt;TravailAFaire&gt;</code>
Retourne la liste des devoirs de l'élève

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type |
| --- | --- |
| idEleve | <code>string</code> | 

<a name="Kdecole+getContenuActivite"></a>

### kdecole.getContenuActivite(uidSeance, uid, idEleve) ⇒ <code>Promise.&lt;ContenuActivite&gt;</code>
Retourne les détails d'un devoir à faire

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type |
| --- | --- |
| uidSeance | <code>number</code> | 
| uid | <code>number</code> | 
| idEleve | <code>string</code> | 

<a name="Kdecole+getAbsences"></a>

### kdecole.getAbsences(idEleve) ⇒ <code>Promise.&lt;AbsencesList&gt;</code>
Retourne la liste des absences d'un élève

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type |
| --- | --- |
| idEleve | <code>string</code> | 

<a name="Kdecole+getInfoUtilisateur"></a>

### kdecole.getInfoUtilisateur(idEleve) ⇒ <code>Promise.&lt;Utilisateur&gt;</code>
Retourne les informations d'un utilisateur (type de compte, nom complet, numéro de l'établiissement, etc.)

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type |
| --- | --- |
| idEleve | <code>string</code> | 

<a name="Kdecole+getCalendrier"></a>

### kdecole.getCalendrier(idEleve) ⇒ <code>Promise.&lt;Calendrier&gt;</code>
Retourne l'emploi du temps de l'élève à J-7 et J+7

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type |
| --- | --- |
| idEleve | <code>string</code> | 

<a name="Kdecole+getNotes"></a>

### kdecole.getNotes(idEleve) ⇒ <code>Promise.&lt;NotesList&gt;</code>
Retourne la liste des récentes notes de l'élève

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type |
| --- | --- |
| idEleve | <code>string</code> | 

<a name="Kdecole+getMessagerieInfo"></a>

### kdecole.getMessagerieInfo() ⇒ <code>Promise.&lt;MessageInfo&gt;</code>
Retourne l'état de la messagerie de l'utilisateur (nombre de mails non lus)

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  
<a name="Kdecole+getMessagerieBoiteReception"></a>

### kdecole.getMessagerieBoiteReception() ⇒ <code>Promise.&lt;MessageBoiteReception&gt;</code>
Retorune les mails présents dans la boîte mail

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  
<a name="Kdecole+getCommunication"></a>

### kdecole.getCommunication(id) ⇒ <code>Promise.&lt;Communication&gt;</code>
Retorune les détails d'un fil de discussion

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type |
| --- | --- |
| id | <code>number</code> | 

<a name="Kdecole+signalerCommunication"></a>

### kdecole.signalerCommunication(id) ⇒ <code>Promise.&lt;void&gt;</code>
Permet de signaler une communication

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type |
| --- | --- |
| id | <code>number</code> | 

<a name="Kdecole+supprimerCommunication"></a>

### kdecole.supprimerCommunication(id) ⇒ <code>Promise.&lt;void&gt;</code>
Supprime la communication

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type |
| --- | --- |
| id | <code>number</code> | 

<a name="Kdecole+getMoyenneGenerale"></a>

### kdecole.getMoyenneGenerale(trimestre, idEleve) ⇒ <code>Promise.&lt;number&gt;</code>
Retourne la valeur exacte de la moyenne générale de l'élève

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type |
| --- | --- |
| trimestre | <code>number</code> | 
| idEleve | <code>string</code> | 

<a name="Kdecole+getMedianeGenerale"></a>

### kdecole.getMedianeGenerale(trimestre, idEleve) ⇒ <code>Promise.&lt;number&gt;</code>
Retourne la médiane des moyennes des matières de l'élève

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type |
| --- | --- |
| trimestre | <code>number</code> | 
| idEleve | <code>string</code> | 

<a name="Kdecole+kdecole"></a>

### kdecole.kdecole()
Effectue un premier traitement des données reçues en provenance de l'API et en retourne le résultat

**Kind**: instance method of [<code>Kdecole</code>](#Kdecole)  
<a name="Kdecole.login"></a>

### Kdecole.login(login, password) ⇒ <code>Promise.&lt;string&gt;</code>
Retourne le jeton d'accès de l'utilisateur

**Kind**: static method of [<code>Kdecole</code>](#Kdecole)  

| Param | Type |
| --- | --- |
| login | <code>string</code> | 
| password | <code>string</code> | 

<a name="Kdecole.callAPI"></a>

### Kdecole.callAPI()
Envoie les requêtes à l'APILes en-têtes qui doivent être présentes sont: - X-Kdecole-Vers  Version de l'application mobile - X-Kdecole-Auth  Jeton d'accès

**Kind**: static method of [<code>Kdecole</code>](#Kdecole)  
