const posts=[
    {title:'Post One',body:'This is post one', createdAt:new Date().getTime()},
    {title:'Post Two',body:'This is post two', createdAt:new Date().getTime()}
];

function getPosts() {
    setTimeout(() => {
        let output='';
        posts.forEach((post,index) => {
            output+=`<li>${post.title} - ${post.body}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
 };

 function createPost(post){
    return new Promise((resolve,reject) =>{
     setTimeout(() => {
         posts.push(post);
         const error=false;
         if(!error){
             resolve();
         }
         else {
             reject('Error: Something went wrong');
         }
     },2000)
     });
 }
 
 function deletePost(){
     return new Promise((resolve,reject) =>{
      setTimeout(() => {
          posts.pop();
          const error=false;
          if(!error){
              resolve();
          }
          else {
              reject('Error: Something went wrong');
          }
      },4000)
      });
  }


async function init(){
    await createPost({title:'Post Three',body:'This is post three'});

    await deletePost();

    getPosts();
};

init();