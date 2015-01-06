/**
 * Router
 *
 * If this file becomes to big and complex, seperate the config and the routes
 * using a pattern something like this.
 *
 *   * router/config.js
 *   * router/mainRoutes.js
 *   * router/otherRoutes.js
 */

/**
 * Iron Router configuration
 */
Router.configure({

    /**
     * Primary layout template
     */
    layoutTemplate: 'layout',

    /**
     * Page not found template
     */
     notFoundTemplate: 'notFound',

    /**
     * Loading template
     *
     * Displays while waitOn calls are waiting
     */
    loadingTemplate: 'loading',

    /**
     * Wait for global subscriptions
     *
     * Put global waits in here for things like notifications, e.g.
     * waitOn: function() {
     *     return [Meteor.subscribe('notifications')]
     * }
     *
     * In our apps there aren't any global subscriptions right now.
     */

    /**
     * Use Google Analytics to track all page views
     */
    trackPageView: true

});


/**
 * Filters
 *
 * TODO: Implement filters to modify the routes based on logged in status
 */

/**
 * Map URLs to templates
 */
Router.map(function() {

    /**
     * Homepage
     *
     * This is identical to the all items page
     */
    this.route('homepage', {
        path: '/',
        waitOn: function () {
            return Meteor.subscribe('allItems');
        },
        data: function () {
            return {
                items: Items.find()
            };
        }
    });

    /**
     * All items
     */
    this.route('items', {
        waitOn: function () {
            return Meteor.subscribe('allItems');
        },
        data: function () {
            return {
                items: Items.find()
            };
        }
    });

    /**
     * Single item
     *
     * TODO: Look at the router documentation and spell out the purpose of
     * each of these waitOn, data distinctions.
     */
    this.route('item', {
        path: '/items/:_id',
        waitOn: function () {
            return Meteor.subscribe('singleItem', this.params._id);
        },
        data: function () {
            return {
                item: Items.findOne(this.params._id)
            };
        }
    });

});

/**
 * Animate content
 *
 * TODO: Add examples of animating content in on route change
 */
