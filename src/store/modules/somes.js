import axios  from "axios";

const state = {
    somes: [],
    categories: [
        'Discussion forum', 'Media Sharing Networks', 'Social Networks'
    ]
};
const getters = {
    allSomes: (state) => state.somes 
};

//get function, working as intended
const actions = {
    async getSomes({commit}) {
        try {
                const res = await axios.get("https://run.mocky.io/v3/ff6ac853-7db1-44a3-8e43-dec35e09f722");
            
                state.somes = res.data
            }
        catch(e) {
                console.log(e)
            }
        commit('setSomes', res.data)
        },

//post function - posting, but data isn't showing. 
async createSome({commit},  name, description, category, createdBy) {
    const res = await axios.post("https://run.mocky.io/v3/ff6ac853-7db1-44a3-8e43-dec35e09f722",  (name, description, category, createdBy))
    commit('addSome', res.data)
},

//edit function
async updateSome({commit},  name, description, category, createdBy) {
    const res = await axios.put("https://run.mocky.io/v3/ff6ac853-7db1-44a3-8e43-dec35e09f722", (name, description, category, createdBy))
    commit('editSome', res.data)
} 
};

const mutations = {
//mutation of get function
setSomes: (state, somes) => (state.somes = somes),
//mutation of post function
addSome: (state, some) => state.somes.push(some),
//put mutation 

//set categories
setCategories: (state, categories) => (state.categories = categories) 
};

export default {
    state, 
    getters,
    actions,
    mutations
}