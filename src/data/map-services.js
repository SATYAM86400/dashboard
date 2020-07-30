const accessToken = process.env.GATSBY_MAPBOX_KEY;

export const mapServices = [
  {
    name: 'OpenStreetMap',
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  },
  {
    name: 'Mapbox',
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    url: `https://api.mapbox.com/styles/v1/satyam86400/ckd85ft6x0elw1ipie93vkhjn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2F0eWFtODY0MDAiLCJhIjoiY2tkODcyaTZ0MHI5bDJ3c2NiczUzbmdobSJ9.s2SGU0KS5jptPWlTikBB9A`
  }
];