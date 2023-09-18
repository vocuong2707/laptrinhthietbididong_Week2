// Ajax


// GET
// const urlAjax = "https://jsonplaceholder.typicode.com/todos/1";


// let getData = function() {
//     $.ajax({
//         method: 'GET',
//         url: urlAjax,
//         dataTye: 'json'
//     }).done(function(data) {
//         console.log(data);
//     }).fail(function() {
//         console.log("ERROR");
//     })
// }

// getData();

// // POST

// var user1 = {}
// user1.title = "Hello World";
// const urlAjaxPost = "https://jsonplaceholder.typicode.com/todos/1";

// let postData = function() {
//     $.ajax({
//         method: 'POST',
//         url: urlAjaxPost,

//     })
// }



// ==================================
// XHTTP
// GET
// const urlXHTTP = "https://jsonplaceholder.typicode.com/todos/1";
// var xhttp = new XMLHttpRequest();

// xhttp.open('GET', urlString, true);
// xhttp.onload = function() {
//     var userString = JSON.parse(xhttp.responseText);


//     if (xhttp.readyState == 4 && xhttp.status == "200") {
//         console.log(userString);


//     } else {
//         console.log("Error");
//     }
// }

// xhttp.send();


// POST
// var user = {};

// user.firstName = "Vo";
// user.lastName = "Cuong";
// var json = JSON.stringify(user);

// const url = 'https://jsonplaceholder.typicode.com/todos';
// var xhttpPOST = new XMLHttpRequest();
// xhttpPOST.open('POST', url, true);
// xhttpPOST.setRequestHeader('Content-type', 'application/json;chareset = utf-8');
// xhttpPOST.onload = function() {
//     var users = JSON.parse(xhttpPOST.responseText);
//     if (xhttpPOST.readyState == 4 && xhttpPOST.status == "201") {
//         console.log(users);
//     } else {
//         console.log(error);
//     }
// }
// xhttpPOST.send(json);


// // ==================================================================================================
// //FETCH
// let urlFetch = "https://jsonplaceholder.typicode.com/todos";


// fetch(urlFetch).then(function(data) {
//     return data.json();
// }).then(function(data) {
//     console.log(data);
// })