App.Album = DS.Model.extend({
    title               : DS.attr('string'),
    scriptwriter        : DS.attr('string'),
    illustrator         : DS.attr('string'),
    publisher           : DS.attr('string'),
    publicationDate     : DS.attr('date'),
    number              : DS.attr('number'),
    coverUrl            : DS.attr('string'),
    summary             : DS.attr('string'),
    series              : DS.belongsTo('seriesItem')
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