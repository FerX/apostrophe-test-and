module.exports = {
    name: "product",
    extend: "apostrophe-pieces",
    label: "Product",
    pluralLabel: "Products",
    addFields: [{
            name: "description",
            label: "Description",
            type: "string"
        },
        {
            name: "score",
            label: "Score",
            type: "integer",
            required: true,
            def: 1
        }
    ]
};