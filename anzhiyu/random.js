var posts=["2024/04/05/C001/","2024/01/21/C002/","2024/01/13/C003/","2024/04/06/C005/","2024/04/06/C004/","2024/04/06/C006/","2024/04/06/C008/","2024/03/31/D129/","2024/04/06/C007/","2024/03/31/D130/","2024/04/02/D133/","2024/04/01/D132/","2024/04/04/D134/","2024/04/04/D135/","2024/04/05/D136/","2024/04/06/D138/","2024/04/05/D137/","2024/04/06/D139/","2024/04/02/入站必看/","2024/04/01/D131/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };