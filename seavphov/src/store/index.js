import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const CONDITION = {
    AS_NEW: 'as new',
    GOOD: 'good',
    WELL_WORN: 'well-worn',
};

const AVAILABILITY = {
    TRUE: true,
    FALSE: false
}

const SAVEDBOOK = {
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

const store = createStore({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    state: {
        users: [
            {
                email: "virakvary@gmail.com",
                password: "12345678"
            },
            {
                email: "david@gmail.com",
                password: "12345678"
            },
            {
                email: "nyvath@gmail.com",
                password: "12345678"

            },
            {
                email: "theary@gmail.com",
                password: "12345678"
            }
        ],
        books: [
            {
                id: 1,
                title: "Angkor and the Khmer Civilization",
                autor: "Michael D. Coe",
                images: ["/img/Angkor and the Khmer Civilization.jpg"],
                descriptions: "A great deal is now known about the brilliant Khmer civilization that flourished among the monsoon forests and rice paddies of mainland Southeast Asia, thanks to the pioneering work of French scholars and the application of modern archaeological techniques such as remote sensing from the space shuttle.",
                condition: CONDITION.AS_NEW,
                issaved: SAVEDBOOK.FALSE,
                availability: AVAILABILITY.TRUE,
                categories: CATEGORIES.HISTORY,
                username: "Todd",
                comment: 'lol that is so funny'
            },
            {
                id: 2,
                title: "The Enchanted Forest Chronicles",
                author: "Patricia C. Wrede",
                images: ["/img/The Enchanted Forest Chronicles.webp"],
                descriptions: "Join Princess Cimorene in a delightful fantasy world filled with dragons, wizards, and magical adventures.",
                condition: CONDITION.AS_NEW,
                issaved: SAVEDBOOK.FALSE,
                availability: AVAILABILITY.TRUE,
                categories: CATEGORIES.NOVEL,
                username: "Todd"
            },
            {
                id: 3,
                title: "Quantum Paradox",
                author: "Ryan A. Greene",
                images: ["/img/Quantum Paradox.jpg"],
                descriptions: "Dive into the mind-bending world of quantum physics and explore the paradoxes that challenge our understanding of reality.",
                condition: CONDITION.GOOD,
                issaved: SAVEDBOOK.TRUE,
                availability: AVAILABILITY.TRUE,
                categories: CATEGORIES.TEXT_BOOK,
                username: "Todd"
            },
            {
                id: 4,
                title: "Exploring the Cosmos",
                author: "Dr. Neil Armstrong",
                images: ["/img/Exploring the Cosmos.webp"],
                descriptions: "Embark on a cosmic journey with Dr. Neil Armstrong as he explores the wonders of the universe.",
                condition: CONDITION.AS_NEW,
                issaved: SAVEDBOOK.FALSE,
                availability: AVAILABILITY.TRUE,
                categories: CATEGORIES.SCIENCE,
                username: "Todd",
            },
            {
                id: 5,
                title: "Mysteries of the Ancient World",
                author: "Elena P. Miller",
                images: ["/img/Mysteries of the Ancient World.webp"],
                descriptions: "Unravel the secrets of ancient civilizations and the mysteries that still captivate historians today.",
                condition: CONDITION.GOOD,
                issaved: SAVEDBOOK.TRUE,
                availability: AVAILABILITY.TRUE,
                categories: CATEGORIES.HISTORY,
                username: "Todd",
            },
            {
                id: 6,
                title: "Shadow of the Eclipse",
                author: "Jonathan K. Black",
                images: ["/img/Shadow of the Eclipse.jpg"],
                descriptions: "A thrilling tale of magic, prophecies, and a world on the brink of darkness during a rare celestial event.",
                condition: CONDITION.AS_NEW,
                issaved: SAVEDBOOK.FALSE,
                availability: AVAILABILITY.TRUE,
                categories: CATEGORIES.FICTION,
                username: "Todd",
            },
            {
                id: 7,
                title: "The Alchemist's Legacy",
                author: "Sophie R. Gardner",
                images: ["/img/The Alchemist's Legacy.jpg"],
                descriptions: "Follow the journey of an aspiring alchemist as they seek the legendary philosopher's stone and unlock the secrets of transmutation.",
                condition: CONDITION.WELL_WORN,
                issaved: SAVEDBOOK.TRUE,
                availability: AVAILABILITY.TRUE,
                categories: CATEGORIES.FICTION,
                username: "Todd",
            },
            {
                id: 8,
                title: "The Future Of Coding",
                author: "Alex Q. Developer",
                images: ["/img/The Future Of Coding.jpg"],
                descriptions: "Explore the fascinating world of programming and its impact on shaping the future of technology.",
                condition: CONDITION.GOOD,
                issaved: SAVEDBOOK.FALSE,
                availability: AVAILABILITY.TRUE,
                categories: CATEGORIES.TEXT_BOOK,
                username: "Todd",
            },
            {
                id: 9,
                title: "The Celestial Symphony",
                author: "Aria S. Harmon",
                images: ["/img/The Celestial Symphony.jpg"],
                descriptions: "Journey through the cosmos as celestial beings orchestrate the fate of the universe in a symphony of cosmic proportions.",
                condition: CONDITION.WELL_WORN,
                issaved: SAVEDBOOK.FALSE,
                availability: AVAILABILITY.FALSE,
                categories: CATEGORIES.FICTION,
                username: "Todd",
            },
            {
                id: 10,
                title: "Riddles of the Sphinx",
                author: "Samuel R. Enigma",
                images: ["/img/Riddles of the Sphinx.jpg"],
                descriptions: "Solve the ancient riddles guarded by the Sphinx and unveil the hidden truths that lie beneath the sands of time.",
                condition: CONDITION.AS_NEW,
                issaved: SAVEDBOOK.FALSE,
                availability: AVAILABILITY.TRUE,
                categories: CATEGORIES.MYSTERY,
                username: "Todd",
            },
            {
                id: 11,
                title: "Chronicles of the Shadow",
                author: "Astrid Nova",
                images: ["/img/Chronicles of the Shadow.jpg"],
                descriptions: "Embark on an epic space odyssey with Captain Nova as she navigates the uncharted territories of the cosmos.",
                condition: CONDITION.GOOD,
                issaved: SAVEDBOOK.FALSE,
                availability: AVAILABILITY.TRUE,
                categories: CATEGORIES.SCIENCE_FICTION,
                username: "Todd",
            },
            {
                id: 12,
                title: "The Legend of Zelda: Tears of the Kingdom",
                author: "Elysia E. Evergreen",
                images: ["/img/Tears of the Kingdom.jpg"],
                descriptions: "Immerse yourself in the enchanting world of Elaria, where magical crystals hold the key to the kingdom's destiny.",
                condition: CONDITION.WELL_WORN,
                issaved: SAVEDBOOK.FALSE,
                availability: AVAILABILITY.FALSE,
                categories: CATEGORIES.FANTASY,
                username: "Todd",
            }
        ],
        savedbooks: [3, 5, 7],
        mybooks: [2, 4, 9, 12],
    },

    getters: {
        allUsers(state) {
            return state.users;
        },
        allBooks(state) {
            return state.books;
        },
        book: (state) => (id) => {
            return state.books.filter(book => book.id == id);
        },
        savedBooks(state) {
            // take all the books and filter out only book that has id match what inside array savedbooks
            return state.books.filter(book => state.savedbooks.includes(book.id));
        },
        myBooks(state) {
            // take all the books and filter out only book that has id match what inside array mybooks
            return state.books.filter(book => state.mybooks.includes(book.id));
        }
    },
    mutations: {
        changeIsSavedToTrue(state, id) {
            state.books[id - 1].issaved = SAVEDBOOK.TRUE;
        },
        changeIsSavedToFalse(state, id) {
            state.books[id - 1].issaved = SAVEDBOOK.FALSE;
        },
        addTosavedbooks(state, id) {
            state.savedbooks.push(id);
            console.log(state.savedbooks);
        },
        removeFromsavedbooks(state, id) {
            state.savedbooks = state.savedbooks.filter(element => element !== id);
            console.log(state.savedbooks);
        }

    },
    actions: {
        changeIsSaved({ commit }, id) {
            id = parseInt(id);
            // if book is already saved. Change issaved to False and remove from array 
            if (this.state.books[id - 1].issaved) {
                commit('changeIsSavedToFalse', id);
                commit('removeFromsavedbooks', id);
            } else {
                // else book is already saved. Change issaved to True and push from array 
                commit('changeIsSavedToTrue', id);
                commit('addTosavedbooks', id);
            }
        },
        getSingleBook({ commit }, id) {

        }
    }
})

export default store