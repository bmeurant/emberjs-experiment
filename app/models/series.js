App.Series = DS.Model.extend({
    title               : DS.attr('string'),
    scriptwriter        : DS.attr('string'),
    illustrator         : DS.attr('string'),
    publisher           : DS.attr('string'),
    publicationDate     : DS.attr('date'),
    volumes             : DS.attr('number'),
    coverUrl            : DS.attr('string')
});

App.Series.FIXTURES = [{
    id: 1,
    title: 'BlackSad',
    scriptwriter: 'Juan Diaz Canales',
    illustrator: 'Juanjo Guarnido',
    publisher: 'Dargaud',
    publicationDate: 'Nov 2000',
    volumes: 5,
    coverUrl: '/static/images/covers/blacksad.jpg'
}, {
    id: 2,
    title: 'The Killer',
    scriptwriter: 'Luc Jacamon',
    illustrator: 'Matz',
    publisher: 'Casterman',
    publicationDate: 'Oct 1998',
    volumes: 12,
    coverUrl: '/static/images/covers/the-killer.jpg'
}, {
    id: 3,
    title: 'The Nikopol Trilogy',
    scriptwriter: 'Enki Bilal',
    illustrator: 'Enki Bilal',
    publisher: 'Les Humanoïdes Associés',
    publicationDate: 'Jui 1980',
    volumes: 3,
    coverUrl: '/static/images/covers/nikopol.png'
}, {
    id: 4,
    title: 'Akira',
    scriptwriter: 'Katsuhiro Ôtomo',
    illustrator: 'Katsuhiro Ôtomo',
    publisher: 'Glénat',
    publicationDate: '1982',
    volumes: 14,
    coverUrl: '/static/images/covers/akira.jpg'
}, {
    id: 5,
    title: 'Calvin and Hobbes',
    scriptwriter: 'Bill Watterson',
    illustrator: 'Bill Watterson',
    publisher: 'Andrews McMeel Publishing',
    publicationDate: 'Nov 1985',
    volumes: 5,
    coverUrl: '/static/images/covers/calvin-hobbes.png'
}, {
    id: 6,
    title: 'From Hell',
    scriptwriter: 'Alan Moore',
    illustrator: 'Eddie Campbell',
    publisher: 'Eddie Campbell Comics',
    publicationDate: '1999',
    volumes: 1,
    coverUrl: '/static/images/covers/from-hell.jpg'
}, {
    id: 7,
    title: 'Sin City',
    scriptwriter: 'Frank Miller',
    illustrator: 'Frank Miller',
    publisher: 'Rackham',
    publicationDate: 'Jan 1994',
    volumes: 7,
    coverUrl: '/static/images/covers/sin-city.jpg'
}
];