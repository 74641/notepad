// IGNORE this snippet
//import * as quilljs from 'quill.js';
/* https://quilljs.com/playground/ 

    https://www.scaler.com/topics/javascript/import-js-file-in-js/

*/




// TODO: Save note function (maybe have to put this function on the html itself)
    // - More checking of inputs to see if they are valid ie: null, empty etc.
    // - Password complexity requirements
    // - More attributes for the classes (-?)
//AJAX request
// Since whenever we save new note content to the server


function requestUserNotes() {
    let userNoteDictionary;
    // Send user ID to server

    return userNoteDictionary;
}

// TODO: Getters and setters
// username, password, notecollection
class User {
    constructor(username, password) {
        this._noteContents = //Get dictionary from server based on userID
        this._username = username;
        this._password = sha256(password);
    }
}
// TODO: Getters and setters
// noteID, noteTitle, noteContent
class Note {
    constructor(noteID, noteTitle, noteDictionary) {
        this._noteID = noteID;
        this._noteTitle = noteTitle;
        this._noteDictionary = noteDictionary;
    }
    set noteDictionary(userID) {
        this._noteDictionary = requestUserNotes(userID);
    }
}


// https://www.codespeedy.com/how-to-add-elements-in-json-array-using-javascript/
// When the user clicks the registration button
// TODO: storing of data in local json-? 
function registration (username, password) {
    let usernameJS = username;
    let hashPassword = sha256(password);
    const addition = {
        un: usernameJS,
        pw: hashPassword
    };
}
// When the user clicks the login button
// TODO: check if input is null
function attemptLogin (username, password) {
    let hashUsername = sha256(username);
    let hashPassword = sha256(password);
    
    // https://www.tutorialspoint.com/remove-json-element-javascript
    // This is the optimal(-?) way to store the usernames and passwords
        // - but we could do something simpler if we wanted
    let userPasswordDB = JSON.parse(userPasswordDB.json);
    // If password database contains the hash of the password, then authenticate and create new user object
        // -search for password based on username

    // only run if password matches username
    user = new User(hashUsername, hashPassword);
}





// Function to hash (using the sha256 algorithm) whatever is input (for security)
// (Its good as is)
// Reference 1: https://www.geeksforgeeks.org/how-to-create-hash-from-string-in-javascript/
// Reference 2: https://stackoverflow.com/questions/59777670/how-can-i-hash-a-string-with-sha256-in-js
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
