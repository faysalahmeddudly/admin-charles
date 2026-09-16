export const selectAuthState = (state) => state.auth;
export const selectToken = (state) => state.auth.token;
export const selectCurrentName = (state) => state.auth.name;
export const selectCurrentRole = (state) => state.auth.role;
export const selectCurrentAvatar = (state) => state.auth.avatar;
export const selectIsAuthenticated = (state) => Boolean(state.auth.token);
