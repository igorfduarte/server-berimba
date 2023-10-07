const db = {
    users : [
        {
            id: "0",
            name: "berimba",
            email: "berimba@gmail.com",
            password: "1234",
            role: "admin"
        },
        {
            id: "1",
            name: "igor",
            email: "igor@gmail.com",
            password: "1234",
            role: "user"
        },
    ],
    produtos:[
        {
            name: "salada de atum",
            price: "20",
            type: "entrada",
            tags: "atum"
        },
        {
            name: "peito de frango",
            price: "50",
            type: "refeiçao",
            tags: "frango"
        },
    ]

}

module.exports = db