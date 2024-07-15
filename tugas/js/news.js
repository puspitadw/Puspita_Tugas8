fetch(BASE_URL + 'news').then(resp => resp.json()).then((resp) =>{
    resp.data.posts.forEach(post => {
        showPost(post);
    });
})