const BASE_URL = 'https://api-berita-indonesia.vercel.app/cnbc/'

const select = document.querySelector('#select');
select.addEventListener('change', () => {
  localStorage.setItem('kategori', select.value);
  window.location.href = 'kategori.html';
})

function showPost(post) {
  const main = document.querySelector('main');
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  img.setAttribute('src', post.thumbnail);
  const a = document.createElement('a');
  a.setAttribute('href', post.link)
  const figcaption = document.createElement('figcaption');
  const h1 = document.createElement('h1');
  h1.innerText = post.title;
  const p = document.createElement('p');
  p.innerText = post.description;
  const h3 = document.createElement('h3');
  h3.innerText = post.pubDate;

  figcaption.appendChild(h1);
  figcaption.appendChild(h3);
  figcaption.appendChild(p);
  a.appendChild(img);
  figure.appendChild(a);
  figure.appendChild(figcaption);
  main.appendChild(figure);
}

function createFooter() {
  let content = document.querySelector('.footer');
  let footerContent = document.createElement('section');
  footerContent.id = 'footer-content';

  let aboutUs = document.createElement('div');
  aboutUs.className = 'about-us';
  let aboutUsTitle = document.createElement('h3');
  aboutUsTitle.textContent = 'About Us';
  let aboutUsText = document.createElement('p');
  aboutUsText.textContent = 'Express Update is your reliable source for the latest news and insights across various domains including news, markets, and entrepreneurship. We strive to deliver timely and accurate information to our readers, empowering them with knowledge that matters. Our dedicated team of journalists and analysts work tirelessly to bring you comprehensive coverage and deep dives into trending topics. ';
  aboutUs.appendChild(aboutUsTitle);
  aboutUs.appendChild(aboutUsText);

  let contactInfo = document.createElement('div');
  let contactTitle = document.createElement('h3');
  contactTitle.textContent = 'Contact';
  let address = document.createElement('p');
  address.textContent = 'Alamat: Jl. Bissmillah No. 123, Bandung, Indonesia';

  let email = document.createElement('p');
  let emailLink = document.createElement('a');
  emailLink.href = '#';
  emailLink.textContent = 'info@ExpressUpdate.com';
  email.textContent = 'Email: ';
  email.appendChild(emailLink);

  let phone = document.createElement('p');
  phone.textContent = 'Telepon: +62 21 1234567';

  contactInfo.appendChild(contactTitle);
  contactInfo.appendChild(address);
  contactInfo.appendChild(email);
  contactInfo.appendChild(phone);

  let socialMedia = document.querySelector('.social-media');

  let legal = document.createElement('div');
  legal.className = 'legal';
  let privacyPolicy = document.createElement('a');
  privacyPolicy.textContent = 'Kebijakan Privasi';
  let separator = document.createElement('span');
  separator.textContent = ' | ';
  let termsConditions = document.createElement('a');
  termsConditions.textContent = 'Syarat dan Ketentuan';
  let copyright = document.createElement('p');
  copyright.textContent = 'Hak Cipta © 2024 ExpressUpdate.com. Semua Hak Dilindungi.';

  legal.appendChild(privacyPolicy);
  legal.appendChild(separator);
  legal.appendChild(termsConditions);
  legal.appendChild(copyright);
  footerContent.appendChild(aboutUs);
  footerContent.appendChild(contactInfo);
  footerContent.appendChild(socialMedia);
  footerContent.appendChild(legal);
  content.appendChild(footerContent);
}

fetch(BASE_URL + 'terbaru').then(resp => resp.json()).then((resp) => {
  const posts = resp.data.posts.slice(0, 30);
  posts.forEach(post => {
    showPost(post);
  });
})

document.addEventListener('DOMContentLoaded', function () {
  createFooter();
});
