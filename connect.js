const name = document.getElementById("names");
const email = document.getElementById("mail");
const comment = document.getElementById("comments");

const send = document.getElementById("button");


const database=firebase.database();
const rootRef = database.ref('subscribers');

send.addEventListener('click',(e) => {
    e.preventDefault();
    database.ref('/subscribers/' + id.value).set({
     names : names.value,
     Email  : mail.value,
     comment : comments.value
    });
});