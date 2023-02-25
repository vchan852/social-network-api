// Array of usernames and emails
const users = [
    {
        username: 'taehyung-kim',
        email: 'tkim@email.com'
    },
    {
        username: 'joshua-hong',
        email: 'jhong@email.com'
    },
    {
        username: 'dk',
        email: 'dk@email.com'
    },
    {
        username: 'bongie-bong',
        email: 'bongie@email.com'
    },
    {
        username: 'vernon',
        email: 'vchoi@email.com'
    },
    {
        username: 'woo-young',
        email: 'wyoung@email.com'
    },
    {
        username: 'harry',
        email: 'harry@email.com'
    },
    {
        username: 'jung-ho',
        email: 'jho@email.com'
    },
    {
        username: 'seonghwa',
        email: 'shwa@email.com'
    },
    {
        username: 'mingyu',
        email: 'myu@email.com'
    },
];

// Array of thoughts
const thoughts = [
    {
        thoughtText: 'What time is lunch?'
    },
    {
        thoughtText: 'Chicken and waffles!'
    },
    {
        thoughtText: 'Stream BSS!'
    },
    {
        thoughtText: 'What is the title of the comeback?'
    },
    {
        thoughtText: 'I wonder if it is general.'
    },
    {
        thoughtText: 'Track 3 is my favourite!'
    },
    {
        thoughtText: 'Pizza with pineapples!'
    },
    {
        thoughtText: 'Send help I am tired.'
    },
    {
        thoughtText: 'With what money.'
    },
    {
        thoughtText: 'Lets go again!'
    }
];

// Array of reactions
const reactions = [
    {
        reactionBody: 'I do not like it.'
    },
    {
        reactionBody: 'Same!'
    },
    {
        reactionBody: 'Maybe.'
    },
    {
        reactionBody: 'Do I?'
    },
    {
        reactionBody: 'No thanks.'
    },
    {
        reactionBody: 'I am good.'
    },
    {
        reactionBody: 'I would rather not.'
    },
    {
        reactionBody: 'Thanks a lot!'
    },
    {
        reactionBody: 'You think so?'
    },
    {
        reactionBody: 'I love it!'
    }
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomName = () =>
    getRandomArrItem(users).username;

// Function to generate random thoughts and reactions to add to db
const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: getRandomArrItem(thoughts).thoughtText,
            username: getRandomName(),
            reactions: [...getReactions(2)],
        });
    }
    return results;
};

// Create the reactions that will be added to each thought
const getReactions = (int) => {
    if (int === 1) {
        return getRandomArrItem(reactions);
    }
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            reactionBody: getRandomArrItem(reactions).reactionBody,
            username: getRandomName(),
        });
    }
    return results;
};

// Export users array and getRandomThoughts()
module.exports = { users, getRandomThoughts }