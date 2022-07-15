document.getElementById('button1').addEventListener('click', getData);

document.getElementById('button2').addEventListener('click', getObject);

document.getElementById('button3').addEventListener('click', getExternalApi);



// * Using [fetch]
// ? Getting local texts.
// function getData() {
    // ? to use [fetch] call the fetch function
    // ! Note ===> [fetch] return promises, and when you get a response from a promise you have to use [.then]. 
    // fetch('data.txt')
    // .then(function(response) {
        // console.log(response);
//         return response.text();
//     })
//     .then(function(data){
        // * Grabing the function
//         console.log(data);
//         document.getElementById('output').innerHTML = data;
//     })
//     .catch(function (err){
//         console.log(err);
//     });
// }


// * using [Arrow function] with [fetch]
function getData() {
    // ? to use [fetch] call the fetch function
    // ! Note ===> [fetch] return promises, and when you get a response from a promise you have to use [.then]. 
    fetch('data.txt')
    .then(response => response.text())
    .then(data => {
        // * Grabing the function
        console.log(data);
        document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}
 

// ? Getting local [json] objects
function getObject() {
    // ? to use [fetch] call the fetch function
    // ! Note ===> [fetch] return promises, and when you get a response from a promise you have to use [.then]. 
    fetch('data.json')
    .then(response => response.json())
   
    .then(data => {
        // * Grabing the function
        console.log(data);
        // todo: loop through it because it is an array.
        let output = '';
        data.forEach(function(datas){
            output += `<h2>${datas.title} '::' -> ${datas.body}</h2>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}


// ? Getting local [json] objects
function getExternalApi() {
    // ? to use [fetch] call the fetch function
    // ! Note ===> [fetch] return promises, and when you get a response from a promise you have to use [.then]. 
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
        // * Grabing the function
        console.log(data);
        // todo: loop through it because it is an array.
        let output = '';
        data.forEach(function(user){
            output += `<h2>${user.login}</h2>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err))
}