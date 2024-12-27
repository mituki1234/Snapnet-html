// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNsIE0qB7Jxfh4HYVE3LNJN8OO3IOXwBM",
    authDomain: "snapnet-sns-80ac2.firebaseapp.com",
    databaseURL: "https://snapnet-sns-80ac2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "snapnet-sns-80ac2",
    storageBucket: "snapnet-sns-80ac2.firebasestorage.app",
    messagingSenderId: "849959849828",
    appId: "1:849959849828:web:0aff98770099f585193471",
    measurementId: "G-6JMY40LW26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

const idandpass = {
    id: document.querySelector('#id').value,
    password: document.querySelector('#password').value
}
const userinfo = db.ref('users');
document.querySelector('#login').onclick = function () {
    get(searchuserinfo).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(idandpass);
        } else {
            console.log("データが存在しません");
        }
    }).catch((error) => {
        console.error("エラーが発生しました:", error);
    });
}