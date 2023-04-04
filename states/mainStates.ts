import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// interface IAppErrorState {
//   messagesError: Array<string>;
//   isOpen: boolean;
//   setIsOpen: (isOpen: boolean) => any;
//   setMessagesError: (errorMessages: Array<string>) => any;
// }

interface ISelectedMenuState {
  menuSelected: string;
  setSelectedMenu: (selected: string) => void;
}

// export const appErrorSate = createStore<IAppErrorState, any>(
//   devtools(
//     persist(
//       (setState, getState) => ({
//         messagesError: [""],
//         isOpen: false,
//         setIsOpen: (opened: boolean) => {
//           setState(() => ({
//             isOpen: opened,
//           }));
//         },
//         setMessagesError: (errorMessages: Array<string>) => {
//           setState(() => ({
//             messagesError: errorMessages,
//           }));
//         },
//       }),
//       { name: "appErrorStoreStates" }
//     )
//   )
// );

export const useAppSelectedMenuState = create<ISelectedMenuState>()(
  devtools(
    persist(
      (setState, getState) => ({
        menuSelected: "Dashboard",
        setSelectedMenu: (selectedMenu: string) => {
          setState(() => ({
            menuSelected: selectedMenu,
          }));
        },
      }),
      { name: "appSelectedMenue" }
    )
  )
);
