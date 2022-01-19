import {configureStore, combineReducers} from '@reduxjs/toolkit';
import redditReducer from './redditSlice';
import subRedditReducer from './subRedditsSlice';

export default configureStore({
    reducer: combineReducers({
        reddit: redditReducer,
        subreddits: subRedditReducer,
    }),
});
