const { v4: uuid } = require('uuid');

const CONDITION = {
    AS_NEW: 'as new',
    GOOD: 'good',
    WELL_WORN: 'well-worn',
};

const AVAILABILITY = {
    TRUE: true,
    FALSE: false
}

const CATEGORIES = {
    FICTION: 'Fiction',
    NOVEL: 'Novel',
    TEXT_BOOK: 'Text-Book',
    HISTORY: 'History',
    SCIENCE: 'Science'
}

var Books = [
    {
        id: uuid(),
        title: "Angkor and the Khmer Civilization",
        autor: "Michael D. Coe",
        images: ["https://m.media-amazon.com/images/I/61AAY5fIoxL._SY466_.jpg"],
        descriptions: "A great deal is now known about the brilliant Khmer civilization that flourished among the monsoon forests and rice paddies of mainland Southeast Asia, thanks to the pioneering work of French scholars and the application of modern archaeological techniques such as remote sensing from the space shuttle.",
        condition: CONDITION.AS_NEW,
        availability: AVAILABILITY.TRUE,
        categories: CATEGORIES.HISTORY,
        username: "Todd",
        comment: 'lol that is so funny'
    },
    {
        id: uuid(),
        title: "The Enchanted Forest Chronicles",
        author: "Patricia C. Wrede",
        images: ["https://images.pangobooks.com/images/b5785587-3024-4751-b808-8710f4a5ce75?width=800&quality=85&crop=1%3A1"],
        descriptions: "Join Princess Cimorene in a delightful fantasy world filled with dragons, wizards, and magical adventures.",
        condition: CONDITION.AS_NEW,
        availability: AVAILABILITY.TRUE,
        categories: CATEGORIES.NOVEL,
        username: "Todd"
    },
    {
        id: uuid(),
        title: "Quantum Paradox",
        author: "Ryan A. Greene",
        images: ["https://i.ebayimg.com/images/g/y4sAAOSwio1lFOqo/s-l500.jpg"],
        descriptions: "Dive into the mind-bending world of quantum physics and explore the paradoxes that challenge our understanding of reality.",
        condition: CONDITION.GOOD,
        availability: AVAILABILITY.TRUE,
        categories: CATEGORIES.TEXT_BOOK,
        username: "Todd"
    },
    {
        id: uuid(),
        title: "Exploring the Cosmos",
        author: "Dr. Neil Armstrong",
        images: ["https://i.ebayimg.com/thumbs/images/g/c10AAOSwKhBkCslH/s-l300.webp"],
        descriptions: "Embark on a cosmic journey with Dr. Neil Armstrong as he explores the wonders of the universe.",
        condition: CONDITION.AS_NEW,
        availability: AVAILABILITY.TRUE,
        categories: CATEGORIES.SCIENCE,
        username: "Todd",
    },
    {
        id: uuid(),
        title: "Mysteries of the Ancient World",
        author: "Elena P. Miller",
        images: ["https://kubikbooks.cdn.bibliopolis.com/pictures/202810.jpg?auto=webp&v=1654698846"],
        descriptions: "Unravel the secrets of ancient civilizations and the mysteries that still captivate historians today.",
        condition: CONDITION.GOOD,
        availability: AVAILABILITY.FALSE,
        categories: CATEGORIES.HISTORY,
        username: "Todd",
    },
    {
        id: uuid(),
        title: "Shadow of the Eclipse",
        author: "Jonathan K. Black",
        images: ["https://m.media-amazon.com/images/I/71-b7cPpPgL._AC_UF1000,1000_QL80_.jpg"],
        descriptions: "A thrilling tale of magic, prophecies, and a world on the brink of darkness during a rare celestial event.",
        condition: CONDITION.AS_NEW,
        availability: AVAILABILITY.TRUE,
        categories: CATEGORIES.FICTION,
        username: "Todd",
    },
    {
        id: uuid(),
        title: "The Alchemist's Legacy",
        author: "Sophie R. Gardner",
        images: ["https://i.ebayimg.com/images/g/iZkAAOSwq0JlNsrN/s-l500.jpg"],
        descriptions: "Follow the journey of an aspiring alchemist as they seek the legendary philosopher's stone and unlock the secrets of transmutation.",
        condition: CONDITION.WELL_WORN,
        availability: AVAILABILITY.TRUE,
        categories: CATEGORIES.FICTION,
        username: "Todd",
    },
    {
        id: uuid(),
        title: "Coding the Future",
        author: "Alex Q. Developer",
        images: ["https://i.ebayimg.com/images/g/mJUAAOSw9HJlXQQr/s-l300.jpg"],
        descriptions: "Explore the fascinating world of programming and its impact on shaping the future of technology.",
        condition: CONDITION.GOOD,
        availability: AVAILABILITY.TRUE,
        categories: CATEGORIES.TEXT_BOOK,
        username: "Todd",
    },
    {
        id: uuid(),
        title: "The Celestial Symphony",
        author: "Aria S. Harmon",
        images: ["https://m.media-amazon.com/images/I/61HwGVfo+oL._AC_UF1000,1000_QL80_.jpg"],
        descriptions: "Journey through the cosmos as celestial beings orchestrate the fate of the universe in a symphony of cosmic proportions.",
        condition: CONDITION.WELL_WORN,
        availability: AVAILABILITY.FALSE,
        categories: CATEGORIES.FICTION,
        username: "Todd",
    },
    {
        id: uuid(),
        title: "Riddles of the Sphinx",
        author: "Samuel R. Enigma",
        images: ["https://i.ebayimg.com/images/g/~zsAAOSweRhlHxEb/s-l1600.jpg"],
        descriptions: "Solve the ancient riddles guarded by the Sphinx and unveil the hidden truths that lie beneath the sands of time.",
        condition: CONDITION.AS_NEW,
        availability: AVAILABILITY.TRUE,
        categories: CATEGORIES.MYSTERY,
        username: "Todd",
    },
    {
        id: uuid(),
        title: "Chronicles of the Shadow",
        author: "Astrid Nova",
        images: ["https://i.ebayimg.com/images/g/x1wAAOSwfqJkvNQ-/s-l1600.jpg"],
        descriptions: "Embark on an epic space odyssey with Captain Nova as she navigates the uncharted territories of the cosmos.",
        condition: CONDITION.GOOD,
        availability: AVAILABILITY.TRUE,
        categories: CATEGORIES.SCIENCE_FICTION,
        username: "Todd",
    },
    {
        id: uuid(),
        title: "The Legend of Zelda: Tears of the Kingdom",
        author: "Elysia E. Evergreen",
        images: ["https://i.ebayimg.com/images/g/YmYAAOSwdKJlbqFS/s-l1600.jpg"],
        descriptions: "Immerse yourself in the enchanting world of Elaria, where magical crystals hold the key to the kingdom's destiny.",
        condition: CONDITION.WELL_WORN,
        availability: AVAILABILITY.FALSE,
        categories: CATEGORIES.FANTASY,
        username: "Todd",
    }
]

var SavedBooks = [
    {
        id: uuid(),
        title: "Angkor and the Khmer Civilization",
        autor: "Michael D. Coe",
        images: ["https://m.media-amazon.com/images/I/61AAY5fIoxL._SY466_.jpg"],
        descriptions: "A great deal is now known about the brilliant Khmer civilization that flourished among the monsoon forests and rice paddies of mainland Southeast Asia, thanks to the pioneering work of French scholars and the application of modern archaeological techniques such as remote sensing from the space shuttle.",
        condition: CONDITION.AS_NEW,
        availability: AVAILABILITY.TRUE,
        categories: CATEGORIES.HISTORY,
        username: "Todd",
        comment: 'lol that is so funny'
    },
    {
        id: uuid(),
        title: "The Enchanted Forest Chronicles",
        author: "Patricia C. Wrede",
        images: ["https://images.pangobooks.com/images/b5785587-3024-4751-b808-8710f4a5ce75?width=800&quality=85&crop=1%3A1"],
        descriptions: "Join Princess Cimorene in a delightful fantasy world filled with dragons, wizards, and magical adventures.",
        condition: CONDITION.AS_NEW,
        availability: AVAILABILITY.TRUE,
        categories: CATEGORIES.NOVEL,
        username: "Todd"
    },
]

module.exports = { Books, SavedBooks }
