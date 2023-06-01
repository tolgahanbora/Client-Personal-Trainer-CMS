/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Refine, useGetIdentity } from "@pankod/refine-core";
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
import { QueryClient, QueryClientProvider } from 'react-query';
import { MuiInferencer } from "@pankod/refine-inferencer/mui";
import routerProvider from "@pankod/refine-react-router-v6";
import { dataProvider, liveProvider } from "@pankod/refine-supabase";
import { Header, Layout, Sider, Title } from "components/layout";
import { useTranslation } from "react-i18next";
import { supabaseClient } from "utility";
import authProvider from "./authProvider";


import { FitnessCenterOutlined, CalendarMonth, ChatBubbleOutlineOutlined, InsertChartOutlinedTwoTone, AccountCircleOutlined, RestaurantOutlined, MedicationOutlined , FavoriteBorderRounded } from '@mui/icons-material';

import { Calendar, DietPlans, Home, MyGrowthChart, MyProfile, TrainPrograms, SupplementPlan,SexualActivity } from "pages";
import { UpdateProfile } from "pages/student";


function App() {

  const queryClient = new QueryClient();



  const { t, i18n } = useTranslation();



  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <QueryClientProvider client={queryClient}>
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
                    email: "",
                    password: ""
                  },
                }}
              />
            )}
            notificationProvider={notificationProvider}
            ReadyPage={ReadyPage}
            catchAll={<ErrorComponent />}
            resources={[
              {
                name: "Dashboard",
                list: Home,
                edit: MuiInferencer,
                show: MuiInferencer,
                create: MuiInferencer,
                canDelete: true,

              },
              {
                name: "DietPlan",
                options: { label: 'Diet Plan' },
                list: DietPlans,
                edit: MuiInferencer,
                show: MuiInferencer,
                create: MuiInferencer,
                icon: < RestaurantOutlined />,
                canDelete: true,

              },
              {
                name: "SupplementPlan",
                options: { label: 'Supplement' },
                list: SupplementPlan,
                edit: MuiInferencer,
                show: MuiInferencer,
                create: MuiInferencer,
                icon: < MedicationOutlined />,
                canDelete: true,

              },
              {
                name: "TrainProgram",
                options: { label: 'Train' },
                list: TrainPrograms,
                edit: MuiInferencer,
                show: MuiInferencer,
                create: MuiInferencer,
                icon: < FitnessCenterOutlined />,
                canDelete: true,

              },
              {
                name: "SexualActivity",
                options: { label: 'Sexual' },
                list: SexualActivity,
                edit: MuiInferencer,
                show: MuiInferencer,
                create: MuiInferencer,
                icon: < FavoriteBorderRounded />,
                canDelete: true,

              },
              {
                name: "Calendar",
                list: Calendar,
                edit: MuiInferencer,
                show: MuiInferencer,
                create: MuiInferencer,
                icon: <CalendarMonth />,
                canDelete: true,

              },
              {
                name: "Messages",
                list: Home,
                edit: MuiInferencer,
                show: MuiInferencer,
                create: MuiInferencer,
                icon: < ChatBubbleOutlineOutlined />,
                canDelete: true,

              },
              {
                name: "MyGrowthChart",
                options: { label: 'Growth Chart' },
                list: MyGrowthChart,
                edit: MuiInferencer,
                show: MuiInferencer,
                create: MuiInferencer,
                icon: <InsertChartOutlinedTwoTone />,
                canDelete: true,

              },
              {
                name: "my-profile",
                options: { label: 'My Profile' },
                list: MyProfile,
                edit: UpdateProfile,
                show: MuiInferencer,
                icon: < AccountCircleOutlined />,
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
    </QueryClientProvider>
  );
}

export default App;
