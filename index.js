function collectData(data) {
    for (let i=0; i<data.length; i++){
        $('.show-result').append(`<li><h3><a href=${data[i].html_url} target="_blank">${data[i].name}</a></h3></li>`)
    }
}

function getData(username, sortSelect) {
    let url = `https://api.github.com/users/${username}/repos?sort=${sortSelect}`;
    fetch(url)
        .then(response => response.json())
        .then(data => collectData(data))
        .catch(err => console.log(err));
}

function displayData(){
    $("section.hidden").removeClass('hidden');
}

function getUsername() {
    let username = $('#username').val();
    let sortSelect = $('select').val();
    getData(username, sortSelect);
}

function clearPage(){
    $('.show-result').empty();
}

function render() {
    $('form').submit(e => {
        e.preventDefault();
        clearPage();
        getUsername();
        displayData();
    });
}


$(function () {
    render();
})