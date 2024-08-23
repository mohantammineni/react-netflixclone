import { createSlice } from "@reduxjs/toolkit";

const tvSeriesSlice = createSlice({
  name: "movies",
  initialState: {
    popularTvSeries: null,
    topRatedTvSeries: null,
  },
  reducers: {
    addPopularTvSeries: (state, action) => {
      state.popularTvSeries = action.payload;
    },
    addTopRatedTvSeries: (state, action) => {
      state.topRatedTvSeries = action.payload;
    },
  },
});

export const { addPopularTvSeries, addTopRatedTvSeries } =
  tvSeriesSlice.actions;
export default tvSeriesSlice.reducer;
