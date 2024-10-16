// import {
//   isRejectedWithValue,
//   Middleware,
//   MiddlewareAPI,
//   Dispatch,
//   AnyAction,
// } from "@reduxjs/toolkit";
// import { NextRouter } from "next/router";
// import { logOutUser } from "./features/user";

// let isRedirecting = false;

// const authInterceptor: Middleware =
//   (api: MiddlewareAPI) =>
//   (next: Dispatch<AnyAction>) =>
//   (action: AnyAction) => {
//     if (
//       isRejectedWithValue(action) &&
//       action.payload &&
//       typeof action.payload === "object" &&
//       "status" in action.payload &&
//       action.payload.status === 401 &&
//       !isRedirecting
//     ) {
//       console.log("401 error");
//       isRedirecting = true;
//       api.dispatch(logOutUser({}));

//       // We can't use useRouter() here because it's a React hook
//       // and this is outside of a React component.
//       // Instead, we'll use the Next.js Router directly.
//       import("next/router").then((module) => {
//         const Router: NextRouter = module.default;
//         Router.push("/auth/sign-in").then(() => {
//           isRedirecting = false;
//         });
//       });
//     }

//     return next(action);
//   };

// export default authInterceptor;
