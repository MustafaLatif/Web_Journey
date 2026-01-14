import { createSlice } from "@reduxjs/toolkit";
import PageLoader from "next/dist/client/page-loader";

const initialState = {
  issues: [],
};

const issueSlice = createSlice({
  name: "issues",
  initialState,
  reducers: { 
    addIssue: (state, { payload }) => {
      const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
      const getTwoRandoms = (arr) => {
        const shuffled = [...arr].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 2);
      };

      const priorities = ["low", "medium", "high"];
      const labels = ["bug", "feature", "enhancement", "documentation"];
      const users = ["AB", "BC", "CD", "HG", "PS", "DC", "CC"];
      const colors = ["bg-green-600", "bg-yellow-600", "bg-red-700"];

      const newIssue = {
        id: Date.now(),
        title: payload.name,
        status: "backlog",
        color: getRandom(colors),
        labels: [getTwoRandoms(labels)],
        priority: getRandom(priorities),
        user: getRandom(users),
      };
      
      state.issues.push(newIssue);
    },

    moveIssue: (state, { payload }) => {
      const { id, to } = payload;
      const issue = state.issues.find((i) => i.id === id);
      if (issue) issue.status = to;
    },
  },
});

export const { addIssue, moveIssue } = issueSlice.actions;
export default issueSlice.reducer;
