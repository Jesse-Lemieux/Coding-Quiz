//Main elements and Global variables
var bodyEl = document.getElementById('body')
var containerEl = document.querySelector('.high-scores')
var listEl = document.querySelector('#list')

//Fetch for local storage to retrieve scores and names
for (var i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log({key, value})
    var list = document.createElement('li')
    list.innerText = '//name: ' + key + ' //score: ' + value
    listEl.appendChild(list)

}