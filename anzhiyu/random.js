var posts=["2024/03/31/D129/","2024/03/31/D130/","2024/04/01/D131/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };