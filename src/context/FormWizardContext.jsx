import { createContext, useContext, useReducer } from "react";

const WizardContext = createContext(null);
const initialState = {
    data: { datos: null, direccion: null },
    completedSteps: [],
};

function wizardReducer(state, action) {
    switch (action.type) {
        case "UPDATE_STEP":
            return {
                data: { ...state.data, [action.step]: action.payload },
                completedSteps: [...new Set([...state.completedSteps, action.step])],
            };
        case "RESET":
            return initialState;
        default:
            return state;
    }
}

export function WizardProvider({ children }) {
    const [state, dispatch] = useReducer(wizardReducer, initialState);
    return (
        <WizardContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WizardContext.Provider>
    );
}

export function useWizard() {
    return useContext(WizardContext);
}