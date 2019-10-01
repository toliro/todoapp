const userData = [
    {
        id: "1",
        firstname: "Rolito",
        lastname: "Valles",
        occupation:"Web Developer",
        profile_picture: "https://unsplash.com/photos/P2FNYWOlgZs"
    },
    {
        id: "2",
        firstname: "Riche",
        lastname: "Jimenez",
        occupation:"Web Developer",
        profile_picture: "https://unsplash.com/photos/JAkWUtmsFXM"
    },
    {
        id: "3",
        firstname: "Karen",
        lastname: "Carabuena",
        occupation:"Software Engineer",
        profile_picture: "https://unsplash.com/photos/4Qa0A7o8Wsg"
    },
    {
        id: "4",
        firstname: "Vannessa",
        lastname: "Pasaan",
        occupation:"Software Test Engineer",
        profile_picture: "https://unsplash.com/photos/pNrMhpntZFM"
    },
    {
        id: "5",
        firstname: "Adrian",
        lastname: "Sumagang",
        occupation:"Web Developer",
        profile_picture: "https://unsplash.com/photos/NorYfP4rwmQ"
    },
    {
        id: "6",
        firstname: "Jayson",
        lastname: "Custodio",
        occupation:"Software Developer",
        profile_picture: "https://unsplash.com/photos/XxJ_HIXw25M"
    },
    {
        id: "7",
        firstname: "Jan Carlo",
        lastname: "Nabaja",
        occupation:"Web Developer",
        profile_picture: "https://unsplash.com/photos/sRYaHTzPGfU"
    },
    {
        id: "8",
        firstname: "Winzel",
        lastname: "Del Rosario",
        occupation:"Software Developer",
        profile_picture: "https://unsplash.com/photos/X2YO8KFxgEM"
    },
    {
        id: "9",
        firstname: "Lovely",
        lastname: "Canales",
        occupation:"Web Developer",
        profile_picture: "https://unsplash.com/photos/dLFgkoUuoac"
    },
    {
        id: "10",
        firstname: "Jemalyn",
        lastname: "Goyo",
        occupation:"Web Developer",
        profile_picture: "https://unsplash.com/photos/ua9bUXzUUpw"
    }
]

const tableElement = document.getElementById('users');

const searchInput = document.getElementById('search');

searchInput.addEventListener('keyup',(event =>{
    const searchText = searchInput.value.toLowerCase();

    console.log(searchText);

    if(!searchText){
        
        const tbody = tableElement.children[1];
        Array.from(tbody.children).forEach((row)=>{
            row.remove();
        })
        addRows(userData);
    }else{

        const filterUsers = userData.filter((users) =>{
            return users.firstname.toLowerCase() === searchText || 
            users.lastname.toLowerCase() === searchText ||
            users.occupation.toLowerCase() ==  searchText

        });
        console.log(filterUsers);

        const clearRows = ()=>{
            
        }
        const tbody = tableElement.children[1];
        Array.from(tbody.children).forEach((row)=>{
            row.remove();
        })

        addRows(filterUsers);
}

    const clearRows = ()=>{
        
    }

}));

const addRows = (users)=>{

    const forEachCallBackFn = function(user){
        console.log(user);
        const rowElement = document.createElement('tr');
    
        rowElement.classList = 'row';
    
        const id = document.createElement ('td');
        const firstname = document.createElement ('td');
        const lastname = document.createElement ('td');
        const occupation = document.createElement ('td');
    
        id.textContent = user.id;
        firstname.textContent = user.firstname;
        lastname.textContent = user.lastname;
        occupation.textContent = user.occupation;
    
        rowElement.appendChild(id);
        rowElement.appendChild(firstname);
        rowElement.appendChild(lastname);
        rowElement.appendChild(occupation);
    
        // tableElement.appendChild(rowElement);
        tableElement.children[1].appendChild(rowElement);
    
    }
    
    users.forEach(forEachCallBackFn);
}

addRows(userData);


