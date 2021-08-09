import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import { Provider as AuthProvider } from "next-auth/client";
// PROGRESS BAR
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
// PROGRESS BAR END

// PROGRESS BAR
const progress = new ProgressBar({
  size: 4,
  startColor: "#0077CC",
  endColor: "#23A1D1",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);
//PROGRESS BAR END

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
};

export default MyApp;
