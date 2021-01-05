import axios from 'axios'
import NotesList from "../dist/entities/Note/NotesList.js"
import {APP_VERSION, BASE_URL} from "../dist/Kdecole";

const Kdecole = require('../dist/Kdecole.js').default

const authToken = '0AnemIFGvcORx88ESDrvIflY0qRV2ussl0n31tC5Sh2U6xDZJ0E3VrD1RYzrWGX3rYUZK4nI3wLnbxZYQi2sKXMrGbgxIuq2ewjOpRYfWLSP0mLFK3D3CZVu7Ev2s'
const user = new Kdecole(authToken, APP_VERSION, 10485)

jest.mock('axios')
axios.request.mockResolvedValue({
    data: require('./fakeData/fakeNotes.json')
})

describe('Test Notes', () => {
    beforeEach(() => {
        axios.mockClear()
    })
    it('should call the right url and return notes', async () => {
        expect(await user.getNotes()).toBeInstanceOf(NotesList)
        expect(axios.request).toBeCalledWith({
            "baseURL": BASE_URL,
            "data": undefined,
            "headers": {"X-Kdecole-Auth": authToken, "X-Kdecole-Vers": APP_VERSION},
            "method": "get",
            "responseType": "json",
            "url": "/consulterNotes/idetablissement/10485/"
        })
    })
    it('should call the right url and return notes of a specific student', async () => {
        await user.getNotes('AAP05567')
        expect(axios.request).toBeCalledWith({
            "baseURL": BASE_URL,
            "data": undefined,
            "headers": {"X-Kdecole-Auth": authToken, "X-Kdecole-Vers": APP_VERSION},
            "method": "get",
            "responseType": "json",
            "url": "/consulterNotes/ideleve/AAP05567/"
        })
    })
})
