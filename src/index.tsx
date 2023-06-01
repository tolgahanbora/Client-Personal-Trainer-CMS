import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"
import App from "./App";
import "./i18n";

import { registerLicense } from '@syncfusion/ej2-base';


registerLicense("ORg4AjUWIQA/Gnt2VFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5Xd0diXn5ZcXdQRmRb");

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);


root.render(

    <React.Suspense fallback="loading">
      <App />
    </React.Suspense>
   
);


