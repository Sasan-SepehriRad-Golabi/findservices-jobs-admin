import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state() {
        return {
            showlogin: false,
            uln: false,
            drawer: false,
            snd: false,
            snt: "",
            snbg: "",
            isMainPage: false
        }
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        changemaindrawer(context) {
            console.log("ttttt");
            context.state.maindrawer = !context.state.maindrawer;
            console.log(context.state.maindrawer)
        }
    }
})
export default store;