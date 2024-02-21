import { createSlice } from "@reduxjs/toolkit";

const postmanSlice = createSlice({
  name: "postman",
  initialState: {
    currentRequest: null,
    requests: [],
    loading: false,
    error: null,
  },
  reducers: {
    addRequest(state, { payload }) {
      state.requests.push(payload);
      state.currentRequest = payload.id;
    },
    setCurrentRequest(state, { payload }) {
      state.currentRequest = payload;
    },

    changeRequest(state, { payload }) {
      const findCurrent = state.requests.find(
        (re) => re.id === state.currentRequest
      );

      if (findCurrent) {
        for (const key in payload) {
          findCurrent[key] = payload[key];
        }
      }
    },

    // changeRequest(state, { payload }) {
    //   const findCurrent = state.requests.find(
    //     (re) => re.id === state.currentRequest
    //   );

    //   if (findCurrent) {
    //     for (const key in payload) {
    //       findCurrent[key] = payload[key];
    //     }
    //   }
    // },
  },
});

export const { addRequest, changeRequest, setCurrentRequest } =
  postmanSlice.actions;

export default postmanSlice.reducer;
