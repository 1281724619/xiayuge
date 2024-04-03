var posts=["2024/03/31/D129/","2024/04/01/D131/","2024/04/01/D132/","2024/04/02/D133/","2024/03/31/D130/","2024/04/04/D134/","2024/04/02/入站必看/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };