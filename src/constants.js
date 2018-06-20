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
    text: 'We are know for our innovative ideas and our capability of meeting customer needs',
    color: '#FFE600'
  },
  {
    text: 'Honest and hard work has helped us to give customer satisfaction and has earned us their trust',
    color: '#E9290F'
  }
]

const dir = './resources/products';

export let productItems = [
  {
    title: '',
    subtitle: ''
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
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: 'D. No. 3'
  },
  {
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: 'D. No. 20'
  },
  {
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: 'D. No. 22'
  },
  {
    title: 'Super Rayon',
    subtitle: ''
  },
  {
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: 'D. No. 23'
  },
  {
    title: 'Super Rayon',
    subtitle: 'D. No. 12'
  },
  {
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: 'D. No. 24'
  },
  {
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: 'D. No. 24'
  },
  {
    title: 'Deluxe Rayon 14 Kg.',
    subtitle: 'D. No. 26'
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
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  },
  {
    title: '',
    subtitle: ''
  }
];

const productCount = 40;
let i;
for (i = 0; i < productCount; i++) {
  // productItems[i] = {};
  productItems[i].img = require(`./resources/products/product${ i + 1}`);
}

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
  }
]

export const officeDetails = {
  email: 'shrinathsilkmills@gmail.com',
  number1: '0261-2310760',
  number2: '0261-6500760',
  address: '15008, Wing-108,\nUpper Ground,\nRadha Krishna Textile Market,\nRing Road,\nSurat (Gujarat)'
}

export const pageTransitionDuration = 200;