const initState = {
  projects: [
    { id: "1", title: "100 React Projects", content: "React" },
    { id: "2", title: "100 React-Redux Projects", content: "React-Redux" },
    {
      id: "3",
      title: "100 Vanilla Javascript Projects",
      content: "Vanilla Javascript",
    },
  ],
};

export const projectReducer = (state = initState, { type, project, error }) => {
  switch (type) {
    case "CREATE_PROJECT":
      // return {...state, };
      // console.log("created project", project);
      return state;
    case "CREATE_PROJECT_ERROR":
      // return { ...state };
      // console.log("create project error", error);
      return state;
    default:
      return state;
  }
};
