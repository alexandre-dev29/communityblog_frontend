import { AccessControlProvider, CanParams } from "@refinedev/core";
import nookies from "nookies";

export const accessControlProvider: AccessControlProvider = {
  can: async ({ resource, action, params }: CanParams) => {
    const auth = nookies.get()["auth"];
    if (auth) {
      const parsedUser = JSON.parse(auth);

      if (resource == "categories" && parsedUser.role == "Editor") {
        console.log(resource);
        return Promise.resolve({ can: false, reason: "Unauthorized" });
      }
      return Promise.resolve({ can: true });
    } else {
      return Promise.resolve({ can: false, reason: "Unauthorized" });
    }
  },
};
