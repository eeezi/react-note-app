import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { toast } from "react-toastify";

const initialState = {
    tagsList: [
        {tag: "coding", id: v4()},
        {tag: "exercise", id: v4()},
        {tag: "quotes", id: v4()},
    ]
}

const tagsSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {
        addTags: (state, { payload }) => {
            if (state.tagsList.find(({ tag }) => tag === payload.tag)) {
                toast.warning("Tag already exists");
            } else {
                state.tagsList.push(payload);
                toast.info("New tag added successfully")
            }
        },
        deleteTags: (state, { payload }) => {
            state.tagsList = state.tagsList.filter(({ id }) => id !== payload)
            toast.info("Tag deleted successfully")
        }
    }
})

export const { addTags, deleteTags } = tagsSlice.actions;
export default tagsSlice.reducer;