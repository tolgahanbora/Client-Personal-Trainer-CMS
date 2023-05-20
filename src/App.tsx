import { Refine } from "@pankod/refine-core";
import {
  AuthPage,
  CssBaseline,
  ErrorComponent,
  GlobalStyles,
  LightTheme,
  ReadyPage,
  RefineSnackbarProvider,
  ThemeProvider,
  notificationProvider,
} from "@pankod/refine-mui";

import { MuiInferencer } from "@pankod/refine-inferencer/mui";
import routerProvider from "@pankod/refine-react-router-v6";
import { dataProvider, liveProvider } from "@pankod/refine-supabase";
import { Header, Layout, Sider, Title } from "components/layout";
import { useTranslation } from "react-i18next";
import { supabaseClient } from "utility";
import authProvider from "./authProvider";

function App() {
  const { t, i18n } = useTranslation();

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          dataProvider={dataProvider(supabaseClient)}
          liveProvider={liveProvider(supabaseClient)}
          authProvider={authProvider}
          routerProvider={{
            ...routerProvider,
            routes: [
              {
                path: "/register",
                element: <AuthPage type="register" />,
              },
              {
                path: "/forgot-password",
                element: <AuthPage type="forgotPassword" />,
              },
              {
                path: "/update-password",
                element: <AuthPage type="updatePassword" />,
              },
            ],
          }}
          LoginPage={() => (
            <AuthPage
              type="login"
              providers={[
                {
                  name: "google",
                  label: "Sign in with Google",
                },
              ]}
              formProps={{
                defaultValues: {
                  email: "info@refine.dev",
                  password: "refine-supabase",
                },
              }}
            />
          )}
          notificationProvider={notificationProvider}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          resources={[
            {
              name: "posts",
              list: MuiInferencer,
              edit: MuiInferencer,
              show: MuiInferencer,
              create: MuiInferencer,
              canDelete: true,
            },
          ]}
          Title={Title}
          Sider={Sider}
          Layout={Layout}
          Header={Header}
          i18nProvider={i18nProvider}
        />
      </RefineSnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
