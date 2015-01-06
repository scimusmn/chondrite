/**
 * Fixtures
 *
 * If you start up Meteor without any data, fixtures helps define dummy data.
 */

// Use dimsum to create dummy content in style of the zwordy wifpho nordool
dimsum.configure({ flavor: 'jabberwocky' });

if (Items.find().count() === 0) {

    var entries = 500;
    var i = 0;
    while (i < entries) {
        i += 1;
        Items.insert({
            order: i,
            link: i,
            title: dimsum.sentence(1),
            body: dimsum()
        });
    }

}

