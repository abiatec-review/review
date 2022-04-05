import pictureReduser from 'redux/reducers/pictures';
import ActionType from 'redux/actions/actionType';
import { PictureType } from 'types';

const mockPicturesData = [
    {
        id: 14,
        name: 'Alien Morty',
        status: 'unknown',
        species: 'Alien',
        type: '',
        gender: 'Male',
        origin: {
            name: 'unknown',
            url: ''
        },
        location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
        episode: [
            'https://rickandmortyapi.com/api/episode/10'
        ],
        url: 'https://rickandmortyapi.com/api/character/14',
        created: '2017-11-04T20:51:31.373Z'
    },
    {
        id: 15,
        name: 'Alien Rick',
        status: 'unknown',
        species: 'Alien',
        type: '',
        gender: 'Male',
        origin: {
            name: 'unknown',
            url: ''
        },
        location: {
            name: 'Citadel of Ricks',
            url: 'https://rickandmortyapi.com/api/location/3'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
        episode: [
            'https://rickandmortyapi.com/api/episode/10'
        ],
        url: 'https://rickandmortyapi.com/api/character/15',
        created: '2017-11-04T20:56:13.215Z'
    },
    {
        id: 16,
        name: 'Amish Cyborg',
        status: 'Dead',
        species: 'Alien',
        type: 'Parasite',
        gender: 'Male',
        origin: {
            name: 'unknown',
            url: ''
        },
        location: {
            name: 'Earth (Replacement Dimension)',
            url: 'https://rickandmortyapi.com/api/location/20'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/16.jpeg',
        episode: [
            'https://rickandmortyapi.com/api/episode/15'
        ],
        url: 'https://rickandmortyapi.com/api/character/16',
        created: '2017-11-04T21:12:45.235Z'
    },
    {
        id: 17,
        name: 'Annie',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Female',
        origin: {
            name: 'Earth (C-137)',
            url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
            name: 'Anatomy Park',
            url: 'https://rickandmortyapi.com/api/location/5'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg',
        episode: [
            'https://rickandmortyapi.com/api/episode/3'
        ],
        url: 'https://rickandmortyapi.com/api/character/17',
        created: '2017-11-04T22:21:24.481Z'
    },
]
const initialState:PictureType[] = []

describe("Test info reducer", function () {
    test("set data", function () {
        const action = { type: ActionType.SetPictures, payload: mockPicturesData };

        expect(pictureReduser(initialState, action)).toEqual(mockPicturesData);
    });

    test("reset data", function () {
        const action = { type: ActionType.ResetPictures };

        expect(pictureReduser(mockPicturesData, action)).toEqual(initialState);
    });


})