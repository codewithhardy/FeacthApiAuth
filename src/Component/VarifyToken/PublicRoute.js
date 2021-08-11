// import React from "react";

// function PublicRoute({ component: Component, ...rest }) {
//   return (
//     <>
//       {/* <Route
//         {...rest}
//         render={(props) => {
//           return !getToken() ? (
//             <Component {...props} />
//           ) : (
//             <Redirect to={{ pathname: "/Challenge" }} />
//           );
//         }}
//       /> */}
//     </>
//   );
// }

// export default PublicRoute;

// // useEffect(() => {
// //   const token = getToken();
// //   if (!token) {
// //     return;
// //   }

// //   axios
// //     .get(
// //       `http://174.138.21.74:8000/admin/challenge/verifyToken?token${token}`
// //     )
// //     .then((response) => {
// //       setUserSession(response.data.token, response.data.user);
// //       setAuthLoading(false);
// //     })
// //     .catch((error) => {
// //       removeUserSession();
// //       setAuthLoading(false);
// //     });
// // }, []);

// // if (authLoading && getToken()) {
// //   return <div>Checking Authentication</div>;
// // }
