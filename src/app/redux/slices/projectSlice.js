const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    project: [],
}

const projectSlice = createSlice({
    name: "projects",
    initialState,
    reducers:{
        setProject:(state, {payload}) => {
            state.project.push({    
                name: payload.name,
                id: payload.id,
                createdAt: new Date().getTime(),
            })
        }
    }
})

export default projectSlice.reducer
export const { setProject } = projectSlice.actions