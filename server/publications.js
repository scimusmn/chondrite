/**
 * Publications
 *
 * Expose server-side database elements to the client.
 *
 * Publication names should be distinct from each other so that they're easy
 * to find and replace in the boilerplate.
 *
 * In other words, names like:
 *
 *      `allItems` and `singleItem`
 *
 * are more distinct and better than:
 *
 *      `items` and `item`
 */

/**
 * All items
 */
Meteor.publish('allItems', function() {
    var result = Items.find();
    return result;
});

/**
 * Single item
 *
 * TODO: document the argument
 */
Meteor.publish('singleItem', function(link) {
    var result = Items.find( { link: link } );
    return result;
});

/**
 * TODO: demo returning two collections.
 */
