/* 
This file contains a list of all the episodes that will appear in the app
Each episodes needs the following fields:
    id: integer
    title: string
    link-to-spotify: string with https link
    tags: list of strings (keywords)
    guests: list of strings (names)
    short-description: string (max 100 char)
    long-description: string
*/
const episodes = [
    {
        "id": 1,
        "title": "This is episode 1",
        "short-description": "This is a short description",
        "long-description": "This is a longer description. This is a longer description. This is a longer description.",
        "link-to-spotify": "https://example.com",
        "tags": ["aero", "w1", "w2"],
        "guests": ["Person 1"],
    },
    {
        "id": 2,
        "title": "This is episode 2",
        "short-description": "This is a short description",
        "long-description": "This is a longer description. This is a longer description. This is a longer description.",
        "link-to-spotify": "https://example.com",
        "tags": ["tyres", "w1", "w2"],
        "guests": ["Person 2"],
    },
    {
        "id": 3,
        "title": "This is episode 3",
        "short-description": "This is a short description",
        "long-description": "This is a longer description. This is a longer description. This is a longer description.",
        "link-to-spotify": "https://example.com",
        "tags": ["tech", "w1", "w2"],
        "guests": ["Person 3"],
    },
]

export default episodes;