module.exports = {
    extend: "apostrophe-custom-pages",
    name: "home",
    addFields: [{
        name: "_best_product",
        withType: "product",
        type: "joinByOne",
        filters: {
            and: { score: { $gte: 5 } },
            projection: {
                title: 1,
                slug: 1,
                type: 1,
                tags: 1
            }
        }
    }]
};