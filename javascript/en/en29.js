// Example numero 29

const profileInfo = {
  firstName: 'John',
  lastName: 'Snow',
  picture: 'https://tele1.com.tr/wp-content/uploads/2019/05/john-snow.jpg',
  description: 'Jon Snow is a fictional character in the A Song of Ice and Fire series of fantasy novels by American author George R. R. Martin, and its television adaptation Game of Thrones, in which he is portrayed by English actor Kit Harington. In the novels, he is a prominent point of view character.'
}

// adding data to localstorage. jei be json.stringify - returns object object
localStorage.setItem('profile', JSON.stringify(profileInfo));

// defining a variable with a html div ID in which I want to store the data
const noHtmlWrapper2 = document.getElementById("noHtmlWrapper2");

const renderProfileCard = (profile) => {
    const img29 = document.createElement('img');
    img29.width = '200';
    img29.src = profile.picture;
    img29.alt = `${profile.firstName} ${profile.lastName} profile picture`;

    const name29 = document.createElement('h4');
    name29.innerText = `${profile.firstName} ${profile.firstName}`;

    const description29 = document.createElement('h5');
    description29.innerText = profile.description;


    const card29 = document.createElement('div');
    card29.append(img29, name29, description29);
    noHtmlWrapper2.append(card29);
};

const profileInfoFromLocalStorage = JSON.parse(localStorage.getItem('profile'));
renderProfileCard(profileInfoFromLocalStorage);
