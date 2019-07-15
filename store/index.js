export const state = () => ({
    counter: 0
})

export const mutations = {
    add(state) {
        state.counter++
    },
    reduce(state) {
        state.counter--
    },
}