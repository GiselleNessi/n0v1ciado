import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";
import { domainName } from "../const/yourDetails";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Polygon;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      activeChain={activeChainId}
      authConfig={{
        domain: domainName,
        authUrl: "/api/auth",
      }}
    >
      <Head>
        <title>Welcome to Noviciado Private Area</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn how to use the thirdweb Auth SDK to create an NFT Gated Website"
        />
      </Head>
      
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;

