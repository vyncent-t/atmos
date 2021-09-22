import { createSlice, configureStore } from "@reduxjs/toolkit"
// using toolkit in order to shortcut some template code to make overall code smaller and easier to manage

// setting the initail state object, this is the master state which will be an expanded object
const initialState = {
    musicButtonChoice: "no music",
    videoButtonChoice: "no video"
}

// the create slice method creates sections in which we can manipulate the state within the reducer
const contentSlice = createSlice({
    name: "contentManage",
    initialState,
    reducers: {
        updateMusicContent(state, action) {
            state.musicButtonChoice = action.payload
        },

        updateVideoContent(state, action) {
            state.videoButtonChoice = action.payload
        },

    }
})

// configure store combines multiple slices in order to execute their reducers
const store = configureStore({
    reducer: contentSlice.reducer
})

// using contentSlice .actions will match the reducers to their own generated key pairs, no longer need to write out {type: example}
// toolkit creates an "action creator"  which will create the actions object for us, using the methods we run in the reducers prop under contentSlice
export const contentActions = contentSlice.actions;
export default store;