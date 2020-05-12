fetch('people.json')
    .then(function (responce){
        return responce.json()
    })
    .then(function (data) {
        appendData(data)
    })
    .catch(function (err) {
        console.log('error1 :' +err)
    })

function appendData(data) {
    var mainContainer = document.getElementById("myData") ;
    console.log(" data leng "+data.length );
    for (var i=0; i<data.length; i++) {
        var div = document.createElement("div") ;
        div.innerHTML = "ID: "+data[i].id +" " + data[i].firstname + " " + data[i].lastname ;
        mainContainer.appendChild(div) ;
    }
}

const myService = "http://dummy.restapiexample.com/api/v1/employees" ;

fetch(myService)
    .then(function (responce){
        return responce.json()
    })
    .then(function (data) {
        appendService(data)
    })
    .catch(function (err) {
        console.log('error2 :' +err)
    })

function appendService(data) {
    var mainContainer = document.getElementById("myService") ;
    for (var i=0; i<data.data.length; i++) {
        var div = document.createElement("div") ;
        div.innerHTML = "ID: "+data.data[i].id +" " + data.data[i].employee_name + "  salary"
         + data.data[i].employee_salary + "  age" + data.data[i].employee_age ;
        mainContainer.appendChild(div) ;
    }
}