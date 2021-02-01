export const createProject = (project) => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  console.log(project);
  const firestore = getFirestore();
  const { firstName, lastName } = getState().firebase.profile;
  const authorId = getState().firebase.auth.uid;

  firestore
    .collection("projects")
    .add({
      ...project,
      authorFirstName: firstName,
      authorLastName: lastName,
      createdAt: new Date(),
      authorId,
    })
    .then(() => {
      dispatch({ type: "CREATE_PROJECT", project });
    })
    .catch((error) => {
      dispatch({ type: "CREATE_PROJECT_ERROR", error });
    });
};
