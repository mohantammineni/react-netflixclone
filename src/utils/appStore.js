import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import tvSeriesReducer from "./tvSeriesSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    tvseries: tvSeriesReducer,
    config: configReducer,
  },
});

export default appStore;
