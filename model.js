async function fetchUsers(){ //returns { user: {...}, friends: [...] }
    try{
        const response = await fetch(`https://randomuser.me/api/?inc=name,location,picture&results=7`);
        if (!response.ok) {
            throw new Error(response.error);
        }
        const users = await response.json();
        const main_user = users.results[0];
        const main_name = main_user.name.first + " " + main_user.name.last;
        const main_city = main_user.location.city;
        const main_state = main_user.location.state;
        const main_picture = main_user.picture.medium;
        let friends = users.results.slice(1);
        friends = friends.map(person => person.name.first + " " + person.name.last)
        return (
        {
            user: {
                name: main_name,
                city: main_city,
                state: main_state,
                picture: main_picture
            },
            friends: friends
        });
    }

    catch(error){
      console.log('Error fetching users:', error.message);
      return null;
    }
}


async function fetchQuote(){ //returns string
    try{
        const response = await fetch(`https://api.kanye.rest`);
        if (!response.ok) {
            throw new Error("failed to fetch quote");
        }
        const quoteObj = await response.json();
        return quoteObj.quote;
    }

    catch(error){
      console.log('Error fetching users:', error.message);
      return null;
    }
}

async function fetchIpsum(){ //returns {name: pokemon_name, picture: pokemon_picture}
    try{
        const randomId = Math.floor(Math.random() * 1025) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        if (!response.ok) {
            throw new Error("failed to fetch pokemon");
        }
        const pokemon = await response.json();
        const pokemon_name = pokemon.name;
        const pokemon_picture = pokemon.sprites.front_default;
        return ({name: pokemon_name, picture: pokemon_picture});
    }

    catch(error){
      console.log('Error fetching users:', error.message);
      return null;
    }
}

async function fetchIpsum(){ //returns string
    try{
        const response = await fetch(`https://baconipsum.com/api/?type=meat-and-filler&paras=1`);
        if (!response.ok) {
            throw new Error("failed to fetch ipsum");
        }
        const IpsumObj = await response.json();
        return IpsumObj[0];
    }

    catch(error){
      console.log('Error fetching users:', error.message);
      return null;
    }
}
