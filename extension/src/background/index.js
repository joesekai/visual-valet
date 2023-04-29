import { EVENTS } from "../constants";
import { fetchData } from "./utils";

const baseUrl = "http://localhost:3000";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  try {
    const { type } = request;

    switch (type) {
      case EVENTS.FETCH_ICONS: {
        const { payload } = request;
        const { searchTerm } = payload;

        const endpoint = `${baseUrl}/icons?search=${searchTerm}`;
        fetchData(type, endpoint, sendResponse);

        break;
      }
      default: {
        return true;
      }
    }
  } catch (err) {
    console.log(err);
  }

  return true;
});
