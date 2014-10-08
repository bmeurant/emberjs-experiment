import Ember from 'ember';
import DS from 'ember-data';

var SeriesItem = DS.Model.extend(Ember.Validations.Mixin, {
    title               : DS.attr('string', {defaultValue: 'New Series'}),
    scriptwriter        : DS.attr('string'),
    illustrator         : DS.attr('string'),
    publisher           : DS.attr('string'),
    coverName           : DS.attr('string', {defaultValue: 'default.jpg'}),
    summary             : DS.attr('string'),
    albums              : DS.hasMany('album', {async: true}),
    coverUrl: function() {
        return 'dist/static/images/series/covers/' + this.get('coverName');
    }.property('coverName')
});

SeriesItem.reopen({
    validations: {
        title: {
            presence: true,
            length: { minimum: 5 }
        },
        scriptwriter: {
            presence: true,
            length: { minimum: 5 }
        },
        illustrator: {
            presence: true,
            length: { minimum: 5 }
        },
        publisher: {
            presence: true,
            length: { minimum: 5 }
        }
    }
});

SeriesItem.reopenClass({
    FIXTURES: [{
    id: 1,
    title: 'BlackSad',
    scriptwriter: 'Juan Diaz Canales',
    illustrator: 'Juanjo Guarnido',
    publisher: 'Dargaud',
    coverName: 'blacksad.jpg',
    summary: 'Private investigator John Blacksad is up to his feline ears in mystery, digging into the backstories behind murders, child abductions, and nuclear secrets. Guarnido\'s sumptuously painted pages and rich cinematic style bring the world of 1950s America to vibrant life, with Canales weaving in fascinating tales of conspiracy, racial tension, and the "red scare" Communist witch hunts of the time. Guarnido reinvents anthropomorphism in these pages, and industry colleagues no less than Will Eisner, Jim Steranko, and Tim Sale are fans! Whether John Blacksad is falling for dangerous women or getting beaten to within an inch of his life, his stories are, simply put, unforgettable',
    albums: [1, 2, 3, 4, 5]
}, {
    id: 2,
    title: 'The Killer',
    scriptwriter: 'Luc Jacamon',
    illustrator: 'Matz',
    publisher: 'Casterman',
    coverName: 'the-killer.jpg',
    summary: 'A man solitary and cold, methodical and unencumbered by scruples or regrets, the killer waits in the shadows, watching for his next target. And yet the longer he waits, the more he thinks he\'s losing his mind, if not his cool. A brutal, bloody and stylish noir story of a professional assassin lost in a world without a moral compass, this is a case study of a man alone, armed to the teeth and slowly losing his mind.'
}, {
    id: 3,
    title: 'The Nikopol Trilogy',
    scriptwriter: 'Enki Bilal',
    illustrator: 'Enki Bilal',
    publisher: 'Les Humanoïdes Associés',
    coverName: 'nikopol.png',
    summary: 'The incredible journey of Alcide Nikopol in the company of Horus of Hierakonopolis, the vengeful god and Jill Bioskop, the mysterious women with blue hair, from Paris to Berlin, Cairo to equator City. A unique mix of science fiction, anxiety, humor and strangeness.'
}, {
    id: 4,
    title: 'Akira',
    scriptwriter: 'Katsuhiro Ôtomo',
    illustrator: 'Katsuhiro Ôtomo',
    publisher: 'Epic Comics',
    coverName: 'akira.jpg',
    summary: 'In the year 2038. A police state, scheming politicians, religions sects, revolutionaries and a secret scientific project all combine to produce an explosive mixture in Neo-Tokyo. The rival groups all have their eyes on one prize: control of Akira, a boy of such destructive psychic ability that he has been held in cryo-stasis for over 30 years. A coup is planned, but there is a wild card in play: the psychic Tetsuo, an impetuous young biker who releases Akira and so forces all of the groups to make their move.'
}, {
    id: 5,
    title: 'Calvin and Hobbes',
    scriptwriter: 'Bill Watterson',
    illustrator: 'Bill Watterson',
    publisher: 'Andrews McMeel Publishing',
    coverName: 'calvin-hobbes.png',
    summary: 'Calvin and Hobbes is unquestionably one of the most popular comic strips of all time. The imaginative world of a boy and his real-only-to-him tiger was first syndicated in 1985 and appeared in more than 2,400 newspapers when Bill Watterson retired on January 1, 1996. The entire body of Calvin and Hobbes cartoons published in a truly noteworthy tribute to this singular cartoon in The Complete Calvin and Hobbes. Composed of three hardcover, four-color volumes in a sturdy slipcase, this New York Times best-selling edition includes all Calvin and Hobbes cartoons that ever appeared in syndication. This is the treasure that all Calvin and Hobbes fans seek.'
}, {
    id: 6,
    title: 'From Hell',
    scriptwriter: 'Alan Moore',
    illustrator: 'Eddie Campbell',
    publisher: 'Eddie Campbell Comics',
    coverName: 'from-hell.jpg',
    summary: 'FROM HELL is the story of Jack the Ripper, perhaps the most infamous man in the annals of murder. Detailing the events leading up to the Whitechapel killings and the cover-up that followed, FROM HELL is a meditation on the mind of a madman whose savagery and violence gave birth to the 20th century. The serialized story, presented in its entirety in this volume, has garnered widespread attention from critics and scholars. Often regarded as one of the most significant graphic novels ever published, FROM HELL combines meticulous research with educated speculation, resulting in a masterpiece of historical fiction both compelling and terrifying. This new edition, which has been completely re-mastered, is certainly the finest edition of the book produced to date.'
}, {
    id: 7,
    title: 'Sin City',
    scriptwriter: 'Frank Miller',
    illustrator: 'Frank Miller',
    publisher: 'Dark Horse',
    coverName: 'sin-city.jpg',
    summary: 'Sin City is the place - tough as leather and dry as tinder. Love is the fuel, and the now-infamous character Marv has the match ... not to mention a "condition." He\'s gunning after Goldie\'s killer, so it\'s time to watch this town burn!'
}
]});

export default SeriesItem;
