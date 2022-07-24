const elList = document.querySelector(".js-list");
const elListPosts = document.querySelector(".js-listposts");
const elListComment = document.querySelector(".js-listcomment");
const elItem = document.querySelector(".js-item");
const elItemPosts = document.querySelector(".js-postsitem");
const elItemComment = document.querySelector(".js-commentsitem");
const elTemplate = document.querySelector(".js-template").content;
const elTemplatePosts = document.querySelector(".js-templateposts").content;
const elTemplateComment = document.querySelector(".js-templatecomment").content;




const renderUsers = (array, node) => {
  array.forEach(element  => {
    const newTemplate = elTemplate.cloneNode(true);
   
    newTemplate.querySelector(".js-item").dataset.id=element.id;
    newTemplate.querySelector(".js-id").textContent=element.id;
    newTemplate.querySelector(".js-name").textContent =element.name;
    newTemplate.querySelector(".js-username").textContent = `surnema:${element.username}`;
    newTemplate.querySelector(".js-email").href = `mailto:${element.email}`;
    newTemplate.querySelector(".js-email").textContent = element.email;
    newTemplate.querySelector(".js-street").textContent = element.address.street;
    newTemplate.querySelector(".js-suite").textContent = element.address.suite;
    newTemplate.querySelector(".js-city").textContent = element.address.city;
    newTemplate.querySelector(".js-zipcode").textContent = element.address.zipcode;
    newTemplate.querySelector(".js-geo").textContent = " adress geo";

    newTemplate.querySelector(".js-geo").href = `https://www.google.com/maps/place/${element.address.geo.lat},${element.address.geo.lng}`
    newTemplate.querySelector(".js-phone").href = `tel:${element.phone}`;
    newTemplate.querySelector(".js-phone").textContent =  element.phone;
    newTemplate.querySelector(".js-website").textContent =  element.website;
    newTemplate.querySelector(".js-website").href =  element.website;
    newTemplate.querySelector(".company-name").textContent =  element.company.name;
    newTemplate.querySelector(".company-catchphrase").textContent =  element.company.catchPhrase;
    newTemplate.querySelector(".company-bs").textContent =  element.company.bs;
    node.appendChild(newTemplate);
  });
}

async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json()
     renderUsers(data, elList);
  } catch (error) {
    console.log(error);
  }
}
getUsers()




elList.addEventListener("click", function (evt) {
  if(evt.target.matches(".js-item")){
    let listdataset = evt.target.dataset.id
    elListPosts.innerHTML = " "
    elListComment.innerHTML = " "
    const renderposts = (arr, node) => {
      arr.forEach(element  => {
 if(element.userId== listdataset ){
   const newTemplatePosts = elTemplatePosts.cloneNode(true);
   newTemplatePosts.querySelector(".js-postsitem").dataset.id=element.id;
   newTemplatePosts.querySelector(".js-idposts").textContent=element.id;
   newTemplatePosts.querySelector(".js-h3posts").textContent=element.title;
   newTemplatePosts.querySelector(".js-textposts").textContent=element.body;
   node.appendChild(newTemplatePosts);
 }

      });
    }

    async function getPosts() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json()
         renderposts(data, elListPosts);
      } catch (error) {
        console.log(error);
      }
    }

    getPosts()
  }

})



elListPosts.addEventListener("click", function (evt) {
  if(evt.target.matches(".js-postsitem")){
    let listposts = evt.target.dataset.id
    elListComment.innerHTML = " "
    const rendercomments = (arr, node) => {
      arr.forEach(element  => {
 if(element.postId== listposts ){
   const newTemplateComment = elTemplateComment.cloneNode(true);
   newTemplateComment.querySelector(".js-idcomment").textContent=element.id;
   newTemplateComment.querySelector(".js-h3comment").textContent=element.name;
   newTemplateComment.querySelector(".js-linkcomment").href=`mailto:${element.email}`;
   newTemplateComment.querySelector(".js-linkcomment").textContent=element.email;
   newTemplateComment.querySelector(".js-textcomment").textContent=element.body;
   node.appendChild(newTemplateComment);
 }

      });
    }

    async function getComment() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const data = await response.json()
         rendercomments(data, elListComment);
      } catch (error) {
        console.log(error);
      }
    }
 
    getComment()
  }

})