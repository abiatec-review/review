import { PictureType } from 'types';

export const mockPicturesData = [
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
];

export const initialPituresState: PictureType[] = [];

export const mockInfoData = {
    count: 826,
    pages: 42,
    next: 'https://rickandmortyapi.com/api/character/?page=2',
    prev: null
};

export const initialInfoState = {
    count: 0,
    pages: null,
    next: null,
    prev: null
}

export const initialDetailsState = {
    isLoaded: false,
    loadedWithError: false
};

export const mockDetailsData = {

    isLoaded: true,
    loadedWithError: false,
    charactersPictures: {
        'https://rickandmortyapi.com/api/character/1': 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        'https://rickandmortyapi.com/api/character/2': 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        'https://rickandmortyapi.com/api/character/3': 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
    },
    episodesInfo: {
        'https://rickandmortyapi.com/api/episode/12': {
            url: 'https://rickandmortyapi.com/api/episode/12',
            name: 'A Rickle in Time',
            date: 'July 26, 2015',
            characters: [
                'https://rickandmortyapi.com/api/character/1',
                'https://rickandmortyapi.com/api/character/2',
                'https://rickandmortyapi.com/api/character/3'
            ]
        }
    }
};
