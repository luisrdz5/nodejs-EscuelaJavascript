const moviesMock = [
  {
    id: '5d7ad1372a7de104a15cba5e',
    title: 'Avictor',
    year: 2012,
    cover: 'http://dummyimage.com/130x235.png/5fa2dd/ffffff',
    description:
      'Mauris enim  sapien quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    duration: 202,
    contentRating: 'R',
    source:
      'http://seattletimes.com/dis/parturient/montes/nascetur.html?ut=varius&nulla=ut&sed=blandit&accumsan=non&felis=interdum&ut=in&at=ante&dolor=vestibulum&quis=ante&odio=ipsum&consequat=primis&varius=in&integer=faucibus&ac=orci&leo=luctus&pellentesque=et&ultrices=ultrices&mattis=posuere&odio=cubilia&donec=curae&vitae=duis&nisi=faucibus&nam=accumsan&ultrices=odio&libero=curabitur&non=convallis&mattis=duis&pulvinar=consequat&nulla=dui&pede=nec&ullamcorper=nisi&augue=volutpat&a=eleifend&suscipit=donec&nulla=ut&elit=dolor&ac=morbi&nulla=vel&sed=lectus&vel=in&enim=quam&sit=fringilla&amet=rhoncus&nunc=mauris',
    tags: ['Horror|Mystery|Thriller', 'Drama']
  },
  {
    id: 2,
    title: 'Raquela',
    year: 'Thomassin',
    cover: 'http://dummyimage.com/236x240.png/dddddd/000000',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    duration: 1948,
    contentRating: 'R',
    source:
      'http://globo.com/odio/porttitor/id/consequat/in.html?dapibus=ut&nulla=suscipit&suscipit=a&ligula=feugiat&in=et&lacus=eros&curabitur=vestibulum&at=ac&ipsum=est&ac=lacinia&tellus=nisi&semper=venenatis&interdum=tristique',
    tags: ['Drama|Romance', 'Comedy|Drama']
  },
  {
    id: 3,
    title: 'Cleon',
    year: 'Burger',
    cover: 'http://dummyimage.com/124x188.jpg/cc0000/ffffff',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    duration: 1958,
    contentRating: 'NC-17',
    source:
      'http://mit.edu/donec/ut/mauris/eget/massa/tempor/convallis.xml?ut=tristique&tellus=in&nulla=tempus&ut=sit&erat=amet&id=sem&mauris=fusce&vulputate=consequat&elementum=nulla&nullam=nisl&varius=nunc&nulla=nisl&facilisi=duis&cras=bibendum&non=felis&velit=sed&nec=interdum&nisi=venenatis&vulputate=turpis&nonummy=enim&maecenas=blandit&tincidunt=mi&lacus=in&at=porttitor&velit=pede&vivamus=justo&vel=eu&nulla=massa&eget=donec&eros=dapibus&elementum=duis&pellentesque=at&quisque=velit&porta=eu&volutpat=est&erat=congue&quisque=elementum&erat=in&eros=hac&viverra=habitasse&eget=platea&congue=dictumst&eget=morbi&semper=vestibulum&rutrum=velit&nulla=id&nunc=pretium&purus=iaculis&phasellus=diam&in=erat&felis=fermentum',
    tags: ['Comedy|Horror', 'Drama']
  },
  {
    id: 4,
    title: 'Lynelle',
    year: 'Pine',
    cover: 'http://dummyimage.com/176x229.jpg/5fa2dd/ffffff',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    duration: 1950,
    contentRating: 'G',
    source:
      'http://scribd.com/purus/aliquet/at.json?viverra=morbi&pede=non&ac=lectus&diam=aliquam&cras=sit&pellentesque=amet&volutpat=diam&dui=in&maecenas=magna&tristique=bibendum&est=imperdiet&et=nullam&tempus=orci&semper=pede&est=venenatis&quam=non&pharetra=sodales&magna=sed&ac=tincidunt&consequat=eu&metus=felis&sapien=fusce&ut=posuere&nunc=felis&vestibulum=sed&ante=lacus&ipsum=morbi&primis=sem&in=mauris&faucibus=laoreet&orci=ut&luctus=rhoncus&et=aliquet&ultrices=pulvinar&posuere=sed&cubilia=nisl&curae=nunc&mauris=rhoncus&viverra=dui&diam=vel&vitae=sem&quam=sed',
    tags: ['Comedy', 'Horror|Mystery|Thriller']
  },
  {
    id: 5,
    title: 'Stephanus',
    year: 'Eatock',
    cover: 'http://dummyimage.com/248x173.jpg/cc0000/ffffff',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    duration: 1892,
    contentRating: 'PG',
    source:
      'https://bing.com/maecenas/pulvinar/lobortis/est.png?at=eu&velit=felis&vivamus=fusce&vel=posuere&nulla=felis&eget=sed&eros=lacus&elementum=morbi&pellentesque=sem&quisque=mauris&porta=laoreet&volutpat=ut',
    tags: ['Comedy', 'Comedy|Romance', 'Documentary', 'Drama|Romance']
  },
  {
    id: 6,
    title: 'Ninnetta',
    year: 'Tamlett',
    cover: 'http://dummyimage.com/193x130.jpg/cc0000/ffffff',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    duration: 1983,
    contentRating: 'R',
    source:
      'https://geocities.com/imperdiet.json?purus=lectus&eu=aliquam&magna=sit&vulputate=amet&luctus=diam&cum=in&sociis=magna&natoque=bibendum&penatibus=imperdiet&et=nullam&magnis=orci&dis=pede&parturient=venenatis&montes=non&nascetur=sodales&ridiculus=sed&mus=tincidunt&vivamus=eu',
    tags: ['Drama']
  },
  {
    id: 7,
    title: 'Nicoline',
    year: 'Casol',
    cover: 'http://dummyimage.com/116x119.bmp/5fa2dd/ffffff',
    description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    duration: 2032,
    contentRating: 'NC-17',
    source:
      'https://prlog.org/mus/vivamus/vestibulum/sagittis/sapien/cum.xml?quis=at&libero=nulla&nullam=suspendisse&sit=potenti&amet=cras&turpis=in&elementum=purus&ligula=eu&vehicula=magna&consequat=vulputate&morbi=luctus&a=cum&ipsum=sociis&integer=natoque&a=penatibus&nibh=et&in=magnis&quis=dis&justo=parturient&maecenas=montes&rhoncus=nascetur&aliquam=ridiculus&lacus=mus&morbi=vivamus&quis=vestibulum&tortor=sagittis&id=sapien&nulla=cum&ultrices=sociis&aliquet=natoque&maecenas=penatibus&leo=et&odio=magnis&condimentum=dis&id=parturient&luctus=montes&nec=nascetur&molestie=ridiculus&sed=mus&justo=etiam&pellentesque=vel&viverra=augue&pede=vestibulum&ac=rutrum&diam=rutrum&cras=neque&pellentesque=aenean&volutpat=auctor&dui=gravida&maecenas=sem&tristique=praesent&est=id&et=massa&tempus=id&semper=nisl&est=venenatis',
    tags: ['Documentary', 'Comedy|Crime|Mystery|Romance', 'Action|Drama']
  },
  {
    id: 8,
    title: 'Mordecai',
    year: 'Gabbatt',
    cover: 'http://dummyimage.com/152x187.jpg/cc0000/ffffff',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 1930,
    contentRating: 'PG-13',
    source:
      'https://multiply.com/ac/lobortis/vel/dapibus/at/diam/nam.js?sit=sem&amet=sed&lobortis=sagittis&sapien=nam&sapien=congue&non=risus&mi=semper&integer=porta&ac=volutpat&neque=quam&duis=pede&bibendum=lobortis&morbi=ligula&non=sit&quam=amet&nec=eleifend&dui=pede&luctus=libero&rutrum=quis&nulla=orci&tellus=nullam&in=molestie&sagittis=nibh&dui=in&vel=lectus&nisl=pellentesque',
    tags: ['Comedy|Documentary']
  },
  {
    id: 9,
    title: 'Vaclav',
    year: 'Playle',
    cover: 'http://dummyimage.com/191x223.png/cc0000/ffffff',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    duration: 1970,
    contentRating: 'R',
    source:
      'http://psu.edu/consequat/metus/sapien/ut/nunc.jpg?sapien=orci&placerat=nullam&ante=molestie&nulla=nibh&justo=in&aliquam=lectus&quis=pellentesque&turpis=at&eget=nulla&elit=suspendisse&sodales=potenti&scelerisque=cras&mauris=in&sit=purus&amet=eu&eros=magna&suspendisse=vulputate&accumsan=luctus&tortor=cum&quis=sociis&turpis=natoque&sed=penatibus&ante=et&vivamus=magnis&tortor=dis&duis=parturient&mattis=montes&egestas=nascetur&metus=ridiculus&aenean=mus&fermentum=vivamus&donec=vestibulum&ut=sagittis&mauris=sapien&eget=cum&massa=sociis&tempor=natoque&convallis=penatibus&nulla=et&neque=magnis&libero=dis&convallis=parturient&eget=montes&eleifend=nascetur&luctus=ridiculus&ultricies=mus&eu=etiam&nibh=vel&quisque=augue&id=vestibulum&justo=rutrum&sit=rutrum&amet=neque&sapien=aenean&dignissim=auctor&vestibulum=gravida&vestibulum=sem&ante=praesent&ipsum=id&primis=massa&in=id&faucibus=nisl&orci=venenatis&luctus=lacinia&et=aenean&ultrices=sit&posuere=amet&cubilia=justo&curae=morbi&nulla=ut&dapibus=odio&dolor=cras',
    tags: ['Drama|Romance|War', 'Drama']
  },
  {
    id: 10,
    title: 'Graham',
    year: 'Innett',
    cover: 'http://dummyimage.com/177x236.bmp/ff4444/ffffff',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    duration: 1958,
    contentRating: 'NC-17',
    source:
      'http://angelfire.com/quam/sollicitudin/vitae/consectetuer/eget.jsp?mauris=a&lacinia=suscipit&sapien=nulla&quis=elit&libero=ac&nullam=nulla&sit=sed&amet=vel&turpis=enim&elementum=sit&ligula=amet&vehicula=nunc&consequat=viverra&morbi=dapibus&a=nulla&ipsum=suscipit&integer=ligula&a=in&nibh=lacus&in=curabitur&quis=at&justo=ipsum',
    tags: [
      'Drama',
      'Action|Adventure|Comedy|Crime|Fantasy',
      'Adventure|Drama|Sci-Fi',
      'Comedy|Romance'
    ]
  }
];

function filteredMoviesMock(tag) {
  return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }
  async createMovie() {
    return Promise.resolve(moviesMock[0].id);
  }
  async getMovie() {
    return Promise.resolve(moviesMock[0]);
  }
  async updateMovie() {
    return Promise.resolve(moviesMock[0].id);
  }
  async patchMovie() {
    return Promise.resolve(moviesMock[0].id);
  }
  async deleteMovie() {
    return Promise.resolve(moviesMock[0].id);
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMock,
  MoviesServiceMock
};
