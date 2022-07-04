fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postArr = data.slice(0, 5);
        console.log(postArr)

        let postItems = ""
        for (post of postArr) {
            postItems += `
                <h4>${post.title}</h4>
                <p>${post.body}</p>
                <hr> 
            `
        }
        document.getElementById("blog-list").innerHTML = postItems;
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

            document.getElementById("blog-list").innerHTML = `
    <h4>${post.title}</h4>
    <p>${post.body}</p>
    <hr>
    ${document.getElementById("blog-list").innerHTML} 
      `
        })


})
