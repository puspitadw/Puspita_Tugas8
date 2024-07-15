const kategori = localStorage.getItem('kategori');

fetch(BASE_URL + kategori).then((res) => res.json()).then((res) => {
    const posts = res.data.posts.slice(0, 30); 
    posts.forEach(post => {
      showPost(post);
    });
});

