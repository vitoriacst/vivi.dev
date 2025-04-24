import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

type InitialSate = {
  page: string
}

const initialState: InitialSate = {
  page: ''
}

const visibilitySlice = createSlice({
  name: 'visibility',
  initialState,
  reducers: {
    changeVisibility: (state, { payload }) => { state.page = payload }
  }
})

export const { changeVisibility } = visibilitySlice.actions

export const store = configureStore({
  reducer: {
    visibility: visibilitySlice.reducer
  }
})


type RootState = ReturnType<typeof store.getState>

type Dispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<Dispatch>()

export const useAppSelector = useSelector.withTypes<RootState>()
