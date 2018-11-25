const createProject = (project) => {
    return (dispatch, getState) => {
        // make async call to DB

        // Then dispatch (continue wwit dispatch)
        dispatch({
            type: 'CREATE_PROJECT',
            project: project
        });
    }
}

export default createProject;