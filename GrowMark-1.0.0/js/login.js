



async function findAccount(){

    let accountNumber = document.getElementById("account-number").value;

    let local = "http://localhost:8080/api/v1/auth/one"
    let url = "/api/v1/auth/one"
    let config = {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
            credential: "includes",
        },
        body: JSON.stringify(accountNumber)
    }
    await fetch(local,{
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
            credential: "includes",
        },
        body: JSON.stringify(accountNumber)
    })
    .then((response) => response.json())
    .then((data) => console.log(data));


    
}

document.getElementById("find-account-btn").addEventListener("click",findAccount);