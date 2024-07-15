fetch(BASE_URL + 'market').then(resp => resp.json()).then((resp) =>{
    const posts = resp.data.posts.slice(0, 30);
    posts.forEach(post => {
      showPost(post);
    });
})