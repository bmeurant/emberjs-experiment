App.ApplicationAdapter = DS.FixtureAdapter;

// fixes bug with hasMany
// http://discuss.emberjs.com/t/ember-data-fixture-adapter-saving-record-loses-has-many-relationships/2821
DS.JSONSerializer.reopen({
    serializeHasMany : function(record, json, relationship) {
        var key = relationship.key;

        var relationshipType = DS.RelationshipChange.determineRelationshipType(
            record.constructor, relationship);

        if (relationshipType === 'manyToNone'
            || relationshipType === 'manyToMany'
            || relationshipType === 'manyToOne') {
            json[key] = Ember.get(record, key).mapBy('id');
            // TODO support for polymorphic manyToNone and manyToMany
            // relationships
        }
    }
});

App.Album.FIXTURES = [{
    id: 1,
    title: 'Somewhere Within the Shadows',
    publicationDate: 'Nov 2000',
    number: 1,
    coverUrl: '/static/images/albums/covers/blacksad-1.jpg',
    summary: 'Natalia Wilford is a famous actress. To the world, she had everything anybody could want—beauty, fame, glamour, and lovers who would do anything for her. When she is found murdered in her home, it touches the man who had not seen her since their bitter breakup many years ago. private eye John Blacksad. He vows to find Natalia\'s murderer.',
    series: 1
}, {
    id: 2,
    title: 'Arctic-Nation',
    publicationDate: 'Mar 2003',
    number: 2,
    coverUrl: '/static/images/albums/covers/blacksad-2.jpg',
    summary: 'His name is John Blacksad. He\'s a private detective who\'s seen much evil in the past, but never in his long life has he encountered a case as bizarre, as twisted, or as deadly as the one he accepts now. In a town where white supremacists have moved in and are brutally seizing control, Blacksad is asked to find a kidnapped child and bring the kidnappers to justice. As he gets deeper into his investigation, Blacksad discovers a tale of sickening horror involving murder and worse that condemns some of the town\'s most powerful citizens.',
    series: 1
}, {
    id: 3,
    title: 'Red Soul',
    publicationDate: 'Nov 2005',
    number: 3,
    coverUrl: '/static/images/albums/covers/blacksad-3.jpg',
    summary: 'During the Red Scare, Blacksad is employed as a bodyguard for a rich old tortoise called Hewitt Mandeline, who goes on a gambling trip to Las Vegas. After returning home, Blacksad\'s last assignment is to accompany him to an art gallery, where he runs into Smirnov and his family. He finds a leaflet for a lecture given by his old school teacher, Otto Liebber, a nuclear physicist and Nobel Prize candidate. Also appearing is the wealthy, dynamic, yet idle communist Samuel Gotfield, who heads a scientific research foundation; Blacksad takes an instant dislike for Gotfield, who makes a mockery of Otto\'s lecture. He also meets Gotfield\'s fiancee, writer Alma Mayer.',
    series: 1
}, {
    id: 4,
    title: 'A Silent Hell',
    publicationDate: 'Sep 2010',
    number: 4,
    coverUrl: '/static/images/albums/covers/blacksad-4.jpg',
    summary: 'Blacksad and Weekly travel to New Orleans to meet Faust LaChapelle, a failed musician who found success signing more talented yet less fortunate musicians to record labels. They learn that LaChapelle has terminal cancer, and is being treated by Ms. Gibraltar, a vodou priestess. LaChapelle begs Blacksad to find Sebastian "Little Hand" Fletcher, who – despite having one arm smaller than the other – was the most successful musician he ever signed. Fletcher has gone missing, and LaChapelle is concerned that his addiction to heroin has something to do with it. Blacksad and Weekly accept the case.',
    series: 1
}, {
    id: 5,
    title: 'Amarillo',
    publicationDate: 'Nov 2013',
    number: 5,
    coverUrl: '/static/images/albums/covers/blacksad-5.jpg',
    summary: 'Chad, a writer, travels the road as a vagrant with his on-again off-again friend Abraham, a poet. Abe views his vocation more romantically than Chad, who sees writing as his career and a means to money, and Abe accuses Chad of not having a true passion like he does. Abe takes his collection of poems he was about to publish and burns them, and encourages the appalled Chad to do the same with his next novel\'s manuscript to give it a "proper ending." Blacksad is happy to be taking a well-earned vacation, staying behind in New Orleans for a while, while Weekly returns home to New York. He lands a side-job when a rich Texan asks him to drive his prized car to Tulsa, Oklahoma where he is flying. Blacksad accepts, enjoying the free roadtrip. At a pit-stop, two hitch-hikers (who we see are Chad and Abe) steal the prized car and Blacksad, with the help of a street gang, motorcycle after them, hoping to catch them on their way to Amarillo.',
    series: 1
}
];

App.SeriesItem.FIXTURES = [{
    id: 1,
    title: 'BlackSad',
    scriptwriter: 'Juan Diaz Canales',
    illustrator: 'Juanjo Guarnido',
    publisher: 'Dargaud',
    coverUrl: '/static/images/series/covers/blacksad.jpg',
    summary: 'Private investigator John Blacksad is up to his feline ears in mystery, digging into the backstories behind murders, child abductions, and nuclear secrets. Guarnido\'s sumptuously painted pages and rich cinematic style bring the world of 1950s America to vibrant life, with Canales weaving in fascinating tales of conspiracy, racial tension, and the "red scare" Communist witch hunts of the time. Guarnido reinvents anthropomorphism in these pages, and industry colleagues no less than Will Eisner, Jim Steranko, and Tim Sale are fans! Whether John Blacksad is falling for dangerous women or getting beaten to within an inch of his life, his stories are, simply put, unforgettable',
    albums: [1, 2, 3, 4, 5]
}, {
    id: 2,
    title: 'The Killer',
    scriptwriter: 'Luc Jacamon',
    illustrator: 'Matz',
    publisher: 'Casterman',
    coverUrl: '/static/images/series/covers/the-killer.jpg',
    summary: 'A man solitary and cold, methodical and unencumbered by scruples or regrets, the killer waits in the shadows, watching for his next target. And yet the longer he waits, the more he thinks he\'s losing his mind, if not his cool. A brutal, bloody and stylish noir story of a professional assassin lost in a world without a moral compass, this is a case study of a man alone, armed to the teeth and slowly losing his mind.'
}, {
    id: 3,
    title: 'The Nikopol Trilogy',
    scriptwriter: 'Enki Bilal',
    illustrator: 'Enki Bilal',
    publisher: 'Les Humanoïdes Associés',
    coverUrl: '/static/images/series/covers/nikopol.png',
    summary: 'The incredible journey of Alcide Nikopol in the company of Horus of Hierakonopolis, the vengeful god and Jill Bioskop, the mysterious women with blue hair, from Paris to Berlin, Cairo to equator City. A unique mix of science fiction, anxiety, humor and strangeness.'
}, {
    id: 4,
    title: 'Akira',
    scriptwriter: 'Katsuhiro Ôtomo',
    illustrator: 'Katsuhiro Ôtomo',
    publisher: 'Epic Comics',
    coverUrl: '/static/images/series/covers/akira.jpg',
    summary: 'In the year 2038. A police state, scheming politicians, religions sects, revolutionaries and a secret scientific project all combine to produce an explosive mixture in Neo-Tokyo. The rival groups all have their eyes on one prize: control of Akira, a boy of such destructive psychic ability that he has been held in cryo-stasis for over 30 years. A coup is planned, but there is a wild card in play: the psychic Tetsuo, an impetuous young biker who releases Akira and so forces all of the groups to make their move.'
}, {
    id: 5,
    title: 'Calvin and Hobbes',
    scriptwriter: 'Bill Watterson',
    illustrator: 'Bill Watterson',
    publisher: 'Andrews McMeel Publishing',
    coverUrl: '/static/images/series/covers/calvin-hobbes.png',
    summary: 'Calvin and Hobbes is unquestionably one of the most popular comic strips of all time. The imaginative world of a boy and his real-only-to-him tiger was first syndicated in 1985 and appeared in more than 2,400 newspapers when Bill Watterson retired on January 1, 1996. The entire body of Calvin and Hobbes cartoons published in a truly noteworthy tribute to this singular cartoon in The Complete Calvin and Hobbes. Composed of three hardcover, four-color volumes in a sturdy slipcase, this New York Times best-selling edition includes all Calvin and Hobbes cartoons that ever appeared in syndication. This is the treasure that all Calvin and Hobbes fans seek.'
}, {
    id: 6,
    title: 'From Hell',
    scriptwriter: 'Alan Moore',
    illustrator: 'Eddie Campbell',
    publisher: 'Eddie Campbell Comics',
    coverUrl: '/static/images/series/covers/from-hell.jpg',
    summary: 'FROM HELL is the story of Jack the Ripper, perhaps the most infamous man in the annals of murder. Detailing the events leading up to the Whitechapel killings and the cover-up that followed, FROM HELL is a meditation on the mind of a madman whose savagery and violence gave birth to the 20th century. The serialized story, presented in its entirety in this volume, has garnered widespread attention from critics and scholars. Often regarded as one of the most significant graphic novels ever published, FROM HELL combines meticulous research with educated speculation, resulting in a masterpiece of historical fiction both compelling and terrifying. This new edition, which has been completely re-mastered, is certainly the finest edition of the book produced to date.'
}, {
    id: 7,
    title: 'Sin City',
    scriptwriter: 'Frank Miller',
    illustrator: 'Frank Miller',
    publisher: 'Dark Horse',
    coverUrl: '/static/images/series/covers/sin-city.jpg',
    summary: 'Sin City is the place - tough as leather and dry as tinder. Love is the fuel, and the now-infamous character Marv has the match ... not to mention a "condition." He\'s gunning after Goldie\'s killer, so it\'s time to watch this town burn!'
}
];