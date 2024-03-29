import { logger } from "@vendetta";
//import vendetta from "vendetta"
import Settings from "./Settings";

export default {
    onLoad: () => {
        logger.log("[Mikicrep export plugins]: loaded");
		logger.log("[Mikicrep export plugins]: " + vendetta.plugins.plugins.Plugin.id);
    },
    onUnload: () => {
        logger.log("[Mikicrep export plugins]: unloaded");
    },
    settings: Settings,
}
