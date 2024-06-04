// localStorage.setItem("id","0");
// localStorage.setItem("name","shah");
// localStorage.setItem("token","abc");

// localStorage.removeItem("id");

// console.log(localStorage.key(0));

// localStorage.clear();

// document.write(localStorage.getItem("id"));
// document.write(localStorage.getItem("name"));




// const obj = {
//     id :0,
//     name:"debu",
// };

// localStorage.setItem("id","0");

// localStorage.getItem("data",JSON.stringify(obj)); //obj view
// console.log(JSON.parse(localStorage.getItem("data")));//converting to object 


const input = document.querySelector("input");
const loginBtn = document.querySelector("#login");
const logoutBtn= document.querySelector("#logout");
const h1 =document.querySelector("h1");


loginBtn.onclick =()=>{
    if (input.value) {
      localStorage.setItem("token",input.value);
      h1.innerText ="welcome user";
    }
};

logoutBtn.onclick =()=>{
    localStorage.clear();
    location.reload(); //back to  UI
}

if(localStorage.getItem("token")){
    h1.innerText = "welcome user"
}