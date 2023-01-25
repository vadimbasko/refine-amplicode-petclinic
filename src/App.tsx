import React from "react";

import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-antd";
import "@pankod/refine-antd/dist/reset.css";

import { GraphQLClient } from "@pankod/refine-graphql";
import routerProvider from "@pankod/refine-react-router-v6";
import { useTranslation } from "react-i18next";
import { RefineKbarProvider } from "@pankod/refine-kbar";
import { ColorModeContextProvider } from "contexts";
import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from "components/layout";
import { authProvider } from "./authProvider";
import {Login} from "./pages/Login";
import {OwnerList} from "./pages/OwnerList";
import graphqlDataProvider from "./providers/graphqlDataProvider";
import {OwnerCreate} from "./pages/OwnerCreate";
import {OwnerEdit} from "./pages/OwnerEdit";
import {PetEdit} from "./pages/PetEdit";
import {PetCreate} from "./pages/PetCreate";
import {PetList} from "./pages/PetList";
const API_URL = "http://localhost:3000/graphql";

const client = new GraphQLClient(API_URL);
const gqlDataProvider = graphqlDataProvider(client as any);

function App() {
  const { t, i18n } = useTranslation();

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <ColorModeContextProvider>
      <RefineKbarProvider>
        <Refine
          dataProvider={gqlDataProvider}
          notificationProvider={notificationProvider}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          Title={Title}
          Header={Header}
          Sider={Sider}
          Footer={Footer}
          Layout={Layout}
          OffLayoutArea={OffLayoutArea}
          routerProvider={routerProvider}
          authProvider={authProvider}
          LoginPage={Login}
          i18nProvider={i18nProvider}
          resources={[
            {
              name: "owners",
              list: OwnerList,
              create: OwnerCreate,
              edit: OwnerEdit,
              options: {
                route: "owners",
              },
            },
            {
              name: "pets",
              list: PetList,
              create: PetCreate,
              edit: PetEdit,
              options: {
                route: "pets",
              },
            },
          ]}
        />
      </RefineKbarProvider>
    </ColorModeContextProvider>
  );
}

export default App;
