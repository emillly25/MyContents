import { Helmet, HelmetProvider } from "react-helmet-async";

function HelmetComponent() {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300&family=Oleo+Script+Swash+Caps&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    </HelmetProvider>
  );
}

export default HelmetComponent;
