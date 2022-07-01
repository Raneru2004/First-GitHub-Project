// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
const userListEl = document.querySelector(".user-list")
async function main() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await users.json();
    console.log(usersData);
    userListEl.innerHTML= usersData.map((user) => userHTML(user)).join("");  //using .map and this html snippet you convert the data to html in given below form
        
};

main();

function showUserPosts(id) {
    localStorage.setItem("id", id) //use this to route to a website and store posts it's like permenant, the "id" name doesn't matter
    window.location.href = `${window.location.origin}/user.html` //routing to a new website

};

function userHTML(user) {
    return `<div class="user-card" onclick="showUserPosts(${user.id})">  
    <div class="user-card__container">
        <h3>${user.name}</h4>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Phone:</b> ${user.phone}</p>
        <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
    </div>
</div>`;
};