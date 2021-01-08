import { User } from 'lib/graphql/types';

const createdAt = String(new Date()),
    updatedAt = String(new Date());

export const UsersMockData: User[] = [
    {
        id: '1',
        name: 'Test',
        surname: 'User1',
        email: 'testuser1@mail.com',
        avatar: '',
        createdAt,
        updatedAt,
    },
    {
        id: '2',
        name: 'Test',
        surname: 'User2',
        email: 'testuser2@mail.com',
        avatar: '',
        createdAt,
        updatedAt,
    },
    {
        id: '3',
        name: 'Test',
        surname: 'User3',
        email: 'testuser3@mail.com',
        avatar: '',
        createdAt,
        updatedAt,
    },
    {
        id: '4',
        name: 'Test',
        surname: 'User4',
        email: 'testuser4@mail.com',
        avatar: '',
        createdAt,
        updatedAt,
    },
];
