data = [ 
    ["imgPost1", "imgAuthor", "nameAuthor", "text"], 
    ["imgPost2", "imgAuthor2", "nameAuthor", "text"], 
    ["imgPost3", "imgAuthor2", "nameAuthor", "text"], 
    ["imgPost4", "imgAuthor", "nameAuthor", "text"], 
]

class Post{
    constructor(photoLink, avatarLink, authorName, description){
        this.photoLink = photoLink;
        this.avatarLink = avatarLink;
        this.authorName = authorName;
        this.description = description;
    }
    fillPost(x){
        var origPost = document.getElementById("origPost")
        var clonePost = origPost.cloneNode(true)
        var cardBox = document.getElementById("cardBox")
        cardBox.appendChild(clonePost)
        var authorName = clonePost.getElementById("authorName")
        authorName.innerHTML = authorName
        var newComment = clonePost.getElementById("comment")
        newComment.innerHTML = description
    
    }
}

myObjects = []
for(var i = 0; i < data.length; i++){
    let myPost = new Post(data[i][0] , data[i][1], data[i][2] , data[i][3])
    myPost.fillPost
    myObjects.push(myPost)
}
console.log(myObjects)

for(var i = 0; i < data.length; i++){
    myObjects[i].fillPost
}