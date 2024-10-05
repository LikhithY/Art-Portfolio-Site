import { createSlice } from "@reduxjs/toolkit";
import { personalProjectsGallery, professionalProjectsGallery } from "../../backend/mockdb";

const initialState = {
  personalProjects: personalProjectsGallery,
  professionalProjects: professionalProjectsGallery,
};

export const projectSlice = createSlice({
  name: "projects",
  initialState: initialState,
  reducers: {

  setPersonalProjects: (state, action) => {
    state.personalProjects = [...action.payload];
  },

  setProfessionalProjects: (state, action) => {
    state.professionalProjects = [...action.payload];
  },

  },
});


export const projectActions = projectSlice.actions;