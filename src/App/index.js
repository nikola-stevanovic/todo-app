import App from "cerebral";
import state from "./state";
import * as sequences from "./sequences";
import DevTools from "cerebral/devtools";

export default App(
    ({ app }) => {
        return {
            state,
            sequences
        };
    },
    {
        devtools: DevTools({
            host: "localhost:8585"
        })
    }
);