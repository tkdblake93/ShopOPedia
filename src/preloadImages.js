function preloadImages(imageUrls) {
  for (let i = 0; i < imageUrls.length; i++) {
    const img = new Image();
    img.src = imageUrls[i];
  }
}

// Example usage:
const imagesToPreload = [
  'https://res.cloudinary.com/duhmxq4z3/image/upload/v1749162860/ss19q6go8q6unmlu9aa0.jpg',
  'https://res.cloudinary.com/duhmxq4z3/image/upload/v1749163554/e4ttwob3cunji0chqg8q.jpg',
  'https://res.cloudinary.com/duhmxq4z3/image/upload/v1749163733/ud3kembacinkzos6ubf8.jpg',
  'https://res.cloudinary.com/duhmxq4z3/image/upload/v1749161057/fatzppjhbh52hfocljva.jpg',
  'https://res.cloudinary.com/duhmxq4z3/image/upload/v1749162189/hqn7sjx6hhd6hfjtqf3l.jpg',
  'https://res.cloudinary.com/duhmxq4z3/image/upload/v1749162492/f7njgwjnj8sosbcsxodh.jpg',
  'https://res.cloudinary.com/duhmxq4z3/image/upload/v1749161530/iswu9bg2lnpgh7n71pke.jpg',
  'https://res.cloudinary.com/duhmxq4z3/image/upload/v1749163214/sxmsdq84kiycysnspocw.jpg',
];

preloadImages(imagesToPreload);