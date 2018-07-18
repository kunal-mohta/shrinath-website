let year = 1992;
let currentYear = new Date().getFullYear();

export const navItems = [
  // {
  //   title: 'Home',
  //   link: '/#home'
  // },
  {
    title: 'About Us',
    link: '/#about'
  },
  {
    title: 'Product',
    link: '/#product'
  },
  {
    title: 'Contact Us',
    link: '/#contact'
  }
];

export const aboutItems = [
  {
    text: 'Shrinath Silk Mills is the lead manufacturer of Exclusive Fancy Garment, established in Surat since ' + year,
    color: '#E9290F'
  },
  {
    text: 'With our ' + (currentYear - year) + ' years of experience in the Surat Texitle Market, we now stand as a renowned garment manufacturer',
    color: '#FF6006'
  },
  {
    text: 'We provide our customers with great quality product, not found elsewhere',
    color: '#00204A'
  },
  {
    text: 'We are known for our innovative ideas and our capability of meeting customer needs',
    color: '#FFE600'
  },
  {
    text: 'Honest and hard work has helped us to give customer satisfaction and has earned us their trust',
    color: '#E9290F'
  }
]

export let productItems = [
  {
    title: 'Super Rayon 14 Kg.',
    subtitle: 'D. No. 8'
  },
  {
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: 'D. No. 26'
  },
  {
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: 'D. No. 23'
  },
  {
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: 'D. No. 20'
  },
  {
    title: 'Super Rayon',
    subtitle: 'D. No. 12'
  },
  {
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: 'D. No. 22'
  },
  {
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: 'D. No. 24'
  },
  {
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: 'D. No. 25'
  },
  {
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: 'D. No. 27'
  },
  {
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: 'D. No. 3'
  },
  {
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: 'D. No. 24'
  },
  {
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: 'D. No. 18'
  },
  {
    title: 'Orgenza Silk',
    subtitle: ''
  },
  {
    title: 'Metro Silk',
    subtitle: ''
  },
  {
    title: 'Silk Satin',
    subtitle: ''
  },
  {
    title: 'Pattu Silk',
    subtitle: ''
  },
  {
    title: 'Sona Silk',
    subtitle: ''
  },
  {
    title: 'Pure Cotton Silk',
    subtitle: ''
  },
  {
    title: 'Yogi Silk',
    subtitle: ''
  },
  {
    title: 'Ninja Silk',
    subtitle: ''
  },
  {
    title: 'Bahubali Silk',
    subtitle: ''
  },
  {
    title: 'Jio Silk',
    subtitle: ''
  },
  {
    title: 'Silver Silk',
    subtitle: ''
  },
  {
    title: 'Simran Jorget',
    subtitle: ''
  },
  {
    title: 'Super Silk',
    subtitle: ''
  },
  {
    title: 'Royal Silk',
    subtitle: ''
  },
  {
    title: 'Special Silk',
    subtitle: ''
  },
  {
    title: 'Komal Silk',
    subtitle: ''
  },
  {
    title: 'Colour Silk',
    subtitle: ''
  },
  {
    title: 'Surbhi Silk',
    subtitle: ''
  },
  {
    title: 'Butter Silk',
    subtitle: ''
  },
  {
    title: 'Butter Silk',
    subtitle: ''
  },
  {
    title: 'Sentro Silk',
    subtitle: ''
  },
  {
    title: 'Golden Silk',
    subtitle: ''
  },
  {
    title: 'Pattu Silk',
    subtitle: ''
  },
  {
    title: 'Mango Silk',
    subtitle: ''
  },
  {
    title: 'Crazy Silk',
    subtitle: ''
  },
  {
    title: 'Crazy Silk',
    subtitle: ''
  },
  {
    title: 'Titan Silk',
    subtitle: ''
  },
  {
    title: 'Nyca Silk',
    subtitle: ''
  },
  {
    title: 'Kashmiri Silk',
    subtitle: ''
  },
  {
    title: 'Cottan Silk',
    subtitle: ''
  },
  {
    title: 'Cottan Silk',
    subtitle: ''
  },
  {
    title: 'Cherry SRTTIN-58\"',
    subtitle: ''
  },
  {
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: 'D. No. 44'
  },
  {
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: 'D. No. 47'
  },
  {
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: 'D. No. 48'
  },
  {
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: 'D. No. 50'
  },
  {
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: 'D. No. 51'
  },
  {
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: 'D. No. 36'
  },
  {
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: ''
  },
  {
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: 'D. No. 35'
  },
  {
    title: 'Premium Rayon 11 Kg.',
    subtitle: 'D. No. 505'
  },
  {
    title: 'Premium Rayon 11 Kg.',
    subtitle: 'D. No. 506'
  },
];

export const productCount = 54;
let i;
for (i = 0; i < productCount; i++) {
  // productItems[i] = {};
  productItems[i].img = require(`./resources/products/p${ i + 1 }.jpeg`);
}

productItems = productItems.reverse();

export const ownerDetails = {
  name: 'Rajesh Mohta',
  number: '9825121516',
  email: 'rm121516@gmail.com'
}

export const others = [
  {
    name: 'Nitesh',
    number: '9586545584'
  },
  {
    name: 'Vishal',
    number: '7600921214'
  },
  {
    name: 'Aashish',
    number: '9558445914'
  },
  {
    name: 'Manish',
    number: '9629458931'
  }
]

export const officeDetails = {
  email: 'shrinathsilkmills@gmail.com',
  number1: '0261-2310760',
  number2: '0261-6500760',
  address: '15008, Wing-108,\nUpper Ground,\nRadha Krishna Textile Market,\nRing Road,\nSurat (Gujarat)'
}

export const pageTransitionDuration = 200;