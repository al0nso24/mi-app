import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext(null);
const initialState = { user: null, role: null, isAuthenticated: false };

function authReducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                user: action.payload.user,
                role: action.payload.role,
                isAuthenticated: true,
            };
        case "LOGOUT":
            return { user: null, role: null, isAuthenticated: false };
        default:
            return state;
    }
}

export function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, initialState);
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}