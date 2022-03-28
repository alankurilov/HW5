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
        var origPost = document.getElementById("origCard")
        for(var i = 0; i < courses.length; i++){
            var cloneCard = origCard.cloneNode(true)
            var cardBox = document.getElementsByClassName("cardBox")[0]
            cardBox.appendChild(cloneCard)
            var mainText = cloneCard.getElementsByClassName("mainText")[0]
            mainText.innerHTML = courses[i]
        }        
    }
}

myObjects = []
for(var i = 0; i < data.length; i++){
    let myPost = new Post(data[i][0] , data[i][1], data[i][2] , data[i][3])
    myObjects.push(myPost)
}
console.log(myObjects)