let userPostDescription = document.querySelector("#userPostDescription");
let userPostUrl = document.querySelector("#userPostUrl");
let postBtn = document.querySelector(".postBtn");
let updateBtn = document.querySelector(".updateBtn");

let postsData = JSON.parse(localStorage.getItem("userPosts")) || [];

function browserUi() {
  document.querySelector(".posts").innerHTML = "";
  let postsUI = postsData.map((postData, idx) => {
    let post = `<div class="post">
                <div class="postdescriptionOptions">
                  <p class="postdescription">${postData.postDescription}</p> 
                  <i onclick="options(this)" class="fa-solid fa-ellipsis"></i>
                  <p class="postOptions">
                  <i onclick="postOptClose(this)" id="postOptClose" class="fa-regular fa-circle-xmark"></i>
                  <button onclick="editHandler(${idx})">Edit Post</button>
                    <button onclick="deleteHandler(${idx})">Delete Post</button>
                    </p>
                    </div>
                    <div class="postImage">
                    <img id="postImg" src="${postData.postUrl}">
                    </div>
                    </div>`;
    return post;
  });

  document.querySelector(".posts").innerHTML += postsUI.join("");
}
browserUi();

function deleteHandler(postIdx) {
  postsData.splice(postIdx, 1);
  localStorage.setItem("userPosts", JSON.stringify(postsData));
  browserUi();
}
function editHandler(postIdx) {
  
  userPostDescription.value = postsData[postIdx].postDescription;
  userPostUrl.value = postsData[postIdx].postUrl;
  
  postBtn.classList.toggle('nonActive');
  updateBtn.classList.toggle('nonActive');
  updateBtn.setAttribute("onclick", `updateHandler(${postIdx})`)
}

postBtn.addEventListener("click", function () {
  let postDetails = {
    postDescription: userPostDescription.value,
    postUrl: userPostUrl.value,
  };

  postsData.unshift(postDetails);

  localStorage.setItem("userPosts", JSON.stringify(postsData));
  browserUi();

  userPostDescription.value = ``;
  userPostUrl.value = ``;
});

function updateHandler(idx) {
  let postDetails = {
    postDescription: userPostDescription.value,
    postUrl: userPostUrl.value,
  };
  postsData.splice(idx, 1, postDetails);
  localStorage.setItem("userPosts", JSON.stringify(postsData));
  browserUi();
  postBtn.classList.toggle('nonActive');
  updateBtn.classList.toggle('nonActive');
}

function options(e) {
  e.nextElementSibling.style.display = "flex";
}

function postOptClose(e) {
  e.parentElement.style.display = "none";
}
