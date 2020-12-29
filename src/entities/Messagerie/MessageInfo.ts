export default class MessageInfo {
    public nbMessagesNonLus: number

    constructor (messageInfo: {
        nbMessagesNonLus: number
    }) {
      this.nbMessagesNonLus = messageInfo.nbMessagesNonLus
    }
}
