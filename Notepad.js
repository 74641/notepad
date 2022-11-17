//import * as quilljs from 'quill.js';
/* https://quilljs.com/playground/ 

    https://www.scaler.com/topics/javascript/import-js-file-in-js/

*/


class User {
    constructor(username, password, dateCreated) {
        this._username = username;
        this._password = sha256(password);
        this.dateCreated = dateCreated;
    }
    get passWordHash() {
        return(this._password);
    }
}

class Note {
    constructor(noteID, noteName, dateCreated) {
        this._noteID = noteID;
        this._noteName = noteName;
        this._dateCreated = dateCreated;
    }
}

// https://www.geeksforgeeks.org/how-to-create-hash-from-string-in-javascript/
// https://stackoverflow.com/questions/59777670/how-can-i-hash-a-string-with-sha256-in-js
// https://www.codespeedy.com/how-to-add-elements-in-json-array-using-javascript/
function registration (username, password) {
    let usernameJS = username;
    let hashPassword = sha256(password);
    const addition = {
        un: usernameJS,
        pw: hashPassword
    };
}
function attemptLogin (username, password) {
    let hashUsername = sha256(username);
    let hashPassword = sha256(password);

    // https://www.tutorialspoint.com/remove-json-element-javascript
    let userPasswordDB = JSON.parse(userPasswordDB.json);
    // If password database contains the hash of the password, then authenticate and create new user object
    // search for password based on username
    // foreach
    // only run if password matches username
    new user = new User(hashUsername, hashPassword);
}
//Hash BOTH username and password?
async function sha256(input) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder('utf-8').encode(password);
  
    // hash the password
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  
    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));
  
    // convert bytes to hex string
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    console.log(hashHex);
    return hashHex;
}
