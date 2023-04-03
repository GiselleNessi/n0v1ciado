import { ConnectWallet, useAddress, Web3Button } from "@thirdweb-dev/react";
import { isFeatureEnabled } from "@thirdweb-dev/sdk";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { contractAddress } from "../const/yourDetails";
import styles from "../styles/Home.module.css";

export default function Login() {
  const address = useAddress(); // Get the user's address
  const router = useRouter();
  const missingNft = router.query.missingNft === "true";

  useEffect(() => {
    // Check if the wallet is connected and the required NFT is not missing
    if (address && !missingNft) {
      // Navigate to the Beta dApp automatically
      router.push("/");
    }
  }, [address, missingNft, router]);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Noviciado Protocol</h1>
      <p className={styles.explain}>Welcome to Noviciado 💨💨</p>

      <hr className={styles.divider} />

      {address ? (
        <p className="text-white mt-2">
          Bienvenidxs 🛸 , {address?.slice(0, 6)}...{address?.slice(-4)}
        </p>
      ) : (
        <p className="text-white mt-2">
          Por favor, conecte su wallet para continuar.
        </p>
      )}

      {missingNft && address && (
        <p style={{ color: "red" }}>
          No se encontró el NFT requerido. Por favor, asegúrese de tener el NFT
          en su billetera.
        </p>
      )}

      <ConnectWallet />
    </div>
  );
}
