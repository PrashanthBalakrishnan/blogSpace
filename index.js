
let postsArray = [];



function renderPosts(post) {
    let postItems = ""
    for (post of postsArray) {
        postItems += `
            <h4>${post.title}</h4>
            <p>${post.body}</p>
            <hr> 
        `}
    document.getElementById("blog-list").innerHTML = postItems;
}


fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(post => {
        postsArray = post.slice(0, 5);
        renderPosts()
    })

document.getElementById("new-post"), addEventListener("submit", (event) => {
    event.preventDefault()
    const postTitle = document.getElementById("post-title").value
    const postBody = document.getElementById("post-body").value
    const data = {
        title: postTitle,
        body: postBody
    }

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(post => {

            postsArray.unshift(post)
            renderPosts()
        })
    document.getElementById("new-post").reset();

})
