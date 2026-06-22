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
        console.log(friends);
        return (
        {
            user: {
                Name: main_name,
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
        console.log(quoteObj.quote);
        return quoteObj.quote;
    }

    catch(error){
      console.log('Error fetching users:', error.message);
      return null;
    }
}

