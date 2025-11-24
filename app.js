let userPostDescription = document.querySelector("#userPostDescription");
let userPostUrl = document.querySelector("#userPostUrl");

let postsData = JSON.parse(localStorage.getItem("userPosts")) || [];

let postsUI = postsData.map((postData) => {
  let post = `<div class="post">
                <div class="postdescriptionOptions">
                  <p class="postdescription">${postData.postDescription}</p> 
                  <i class="fa-solid fa-ellipsis"></i>
                  <p class="postOptions">
                    <button>Edit Post</button>
                    <button>Delete Post</button>
                  </p> 
                </div>
                  <div class="postImage">
                    <img src="${postData.postUrl}" >
                  </div>
              </div>`;
  return post;
});

document.querySelector(".posts").innerHTML += postsUI.join("");

document.querySelector("#postBtn").addEventListener("click", function () {
  let postsData = JSON.parse(localStorage.getItem("userPosts")) || [];

  let postDetails = {
    postDescription: userPostDescription.value,
    postUrl: userPostUrl.value,
  };

  postsData.push(postDetails);

  localStorage.setItem("userPosts", JSON.stringify(postsData));
});

function deletePost() {

}