module.exports = (test) => {
    test(';', {
        type: "program",
        body: [{
            type: 'EmptyStatement'
        }]
    })
}