const urlAjax1 = "https://jsonplaceholder.typicode.com/todos/1";
var promise = new Promise(
    function(reslove, reject) {
        $.ajax({
            method: 'GET',
            url: urlAjax1,
            dataTye: 'json'
        }).done(function(data) {
            reslove(data);
        }).fail(function() {
            reject();
        })
    });

promise.then(function(data) {
    return JSON.stringify(data);
}).then(function(data) {
    console.log(data);
}).catch(function() {
    alert("Error")
})