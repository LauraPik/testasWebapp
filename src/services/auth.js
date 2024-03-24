////////////////////////////////////////////////////Login////////////////////////////////////////////////
export const login = async (
  formData,
  dispatch,
  signInStart,
  signInSuccess,
  signInFailure,
  navigate
) => {
  if (!formData.email || !formData.password) {
    return dispatch(signInFailure("Please fill all the fields"));
  }
  try {
    dispatch(signInStart());
    const res = await fetch("http://localhost:8888/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success === false) {
      dispatch(signInFailure(data.message));
    }

    if (res.ok) {
      dispatch(signInSuccess(data));
      navigate("/dashboard");
    }
  } catch (error) {
    dispatch(signInFailure(error.message));
  }
};
////////////////////////////////////////////////////Logout///////////////////////////////////////////////
export const logout = async (token, dispatch, signoutSuccess) => {
  try {
    const res = await fetch("http://localhost:8888/api/v1/auth/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
    });
    const data = await res.json();
    if (!res.ok) {
      console.log(data.message);
    } else {
      dispatch(signoutSuccess());
    }
  } catch (err) {
    console.log(err.message);
  }
};
