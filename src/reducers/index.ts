import { combineReducers } from 'redux'
// import Search from './SearchSlice'
// import SuperHero from './SuperHeroSlice'

const rootReducer = combineReducers({
    // Search,
    // SuperHero,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
