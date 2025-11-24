let userPostDescription = document.querySelector("#userPostDescription");
let userPostUrl = document.querySelector("#userPostUrl");

function frontUI() {
  let postsData = JSON.parse(localStorage.getItem("userPosts")) || [];

  let postsUI = postsData.map((postData) => {
    let post = `<div class="post">
                <div class="postdescriptionOptions">
                  <p class="postdescription">${postData.postDescription}</p> 
                  <i onclick="options(this)" class="fa-solid fa-ellipsis"></i>
                  <p class="postOptions">
                    <i onclick="postOptClose(this)" id="postOptClose" class="fa-regular fa-circle-xmark"></i>
                    <button>Edit Post</button>
                    <button onclick="deletePost()">Delete Post</button>
                  </p> 
                </div>
                  <div class="postImage">
                    <img src="${postData.postUrl}">
                  </div>
              </div>`;
    return post;
  });

  document.querySelector(".posts").innerHTML += postsUI.join("");
}
frontUI();

document.querySelector("#postBtn").addEventListener("click", function () {

  let postsData = JSON.parse(localStorage.getItem("userPosts")) || [];

  let postDetails = {
    postDescription: userPostDescription.value,
    postUrl: userPostUrl.value,
  };

  postsData.unshift(postDetails);

  localStorage.setItem("userPosts", JSON.stringify(postsData));
});

function options(e) {
  e.nextElementSibling.style.display = "flex";
}

function postOptClose(e) {
  e.parentElement.style.display = "none";
}






function deletePost() {
  console.log('delete btn is clicked!')
}


// First Challenge -->> New Post is showing after page refreshing even post btn is clicked
// Second Challenge -->> Post options are not showing when I click on 3 dots.