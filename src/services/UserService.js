var users = [
    {
        name: "user1",
        coins: 100,
        moves: []
    }, {
        name: "user2",
        coins: 200,
        moves: []
    }, {
        name: "user3",
        coins: 300,
        moves: []
    }, {
        name: "user4",
        coins: 400,
        moves: []
    }
]

function getUser() {
    // return users[0];
    return Promise.resolve(users[0]);
}

function signup(name){

}

function addMove(contact, amount){

}

export default {
    getUser,
    signup,
    addMove
}