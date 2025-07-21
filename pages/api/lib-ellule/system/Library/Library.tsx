import type * as React from "react";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@heroui/react";
import styles from "./Library.module.css";
import clsx from "clsx";
import Parameters from './Parameters';
import Details from './Details';
import versionData from './version.json';
import componentsList from './componentsList.json';

export interface LibraryProps {
  title?: string;
  imageUrl?: string;
  buttonText?: string;
  className?: string;
  showHeader?: boolean;
  headerTitle?: string;
  headerSubtitle?: string;
  headerDescription?: string;
  apiUrl?: string;
}

const Library_: React.FC<LibraryProps> = ({
  title = "Available soon.",
  buttonText = "Paramètres",
  className,
  showHeader = true,
  headerTitle = "Librairie plasmic",
  headerSubtitle = "Manager",
  apiUrl = "https://plasmic-api.agence-scroll.com/api"
}) => {
  const [version, setVersion] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showParameters, setShowParameters] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [lastVersion, setLastVersion] = useState<string>("N/A");
  const [installedVersion, setInstalledVersion] = useState<string>("N/A");
  const [updateAvailable, setUpdateAvailable] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState(false);
  const [componentCount, setComponentCount] = useState<number>(Object.keys(componentsList).length);


  // Charger la version installée et la version distante depuis version.json
  useEffect(() => {
    setInstalledVersion(versionData.installedVersion || "N/A");
    setLastVersion(versionData.lastVersion?.replace(/^v/, "") || "N/A");
  }, []);

  // Fonction pour récupérer la version distante
  const fetchRemoteVersion = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/version`);
      if (!response.ok) {
        throw new Error("Impossible de récupérer la version.");
      }
      const data = await response.json();
      const remoteVersion = data.version.replace(/^v/, "");

      if (remoteVersion !== versionData.lastVersion) {
        setLastVersion(remoteVersion);
        await updateVersionJson(remoteVersion);
      }

      if (installedVersion !== lastVersion) {
        setVersion(`📍 Nouvelle version disponible : ${lastVersion}`);
        setUpdateAvailable(true);
      } else {
        setVersion(`✔️ Version à jour : ${lastVersion}`);
        setUpdateAvailable(false);
      }

    } catch (err) {
      setError("Erreur lors de la récupération des versions.");
      setLastVersion("N/A");
    }
    setLoading(false);
  };

  const updateVersionJson = async (lastVer: string) => {
    try {
      const installedVer = versionData.installedVersion || "N/A";
  
      const fileContent = {
        contenu: {
          installedVersion: installedVer,
          lastVersion: lastVer,
        },
      };
  
      console.log('Tentative de mise à jour de version.json avec le contenu:', fileContent);
  
      const response = await fetch("/api/lib-ellule/files?action=write&fichier=version.json", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fileContent),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Réponse de l\'API après l\'écriture :', result);
      } else {
        const error = await response.json();
        console.error('Erreur lors de la mise à jour de version.json:', error);
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour de version.json via l'API :", error);
    }
  };

  useEffect(() => {
    fetchRemoteVersion();
  }, [installedVersion, lastVersion]);

  const handleToggleParameters = () => {
    setShowParameters(!showParameters);
    setShowDetails(false);
  };

  const handleItemClick = (item: string, installedVer: string, lastVer: string) => {
    if (item === "close") {
      setShowDetails(false);
      setSelectedItem(null);
    } else {
      setShowDetails(true);
      setSelectedItem(item);
      setInstalledVersion(installedVer);
      setLastVersion(lastVer);
      setUpdateAvailable(installedVer !== lastVer);
    }
  };

  useEffect(() => {
  const generateAndFetch = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/lib-ellule/generate-components-list', { method: 'POST' });
      const list = await res.json();

      setComponentCount(Object.keys(list).length);
    } catch (err) {
      console.error(err);
      setComponentCount(0);
    }
    setLoading(false);
  };

  generateAndFetch();
}, []);


  return (
    <div className={styles.library}>
      <Card isFooterBlurred className={clsx("border-none", className, styles.cardDefaultWidth)} radius="lg">
        {showHeader && (
          <CardHeader className={styles.cardHeader}>
            <h4 className={styles.cardTitle}>{headerTitle}</h4>
            <p className={styles.cardSubtitle}>{headerSubtitle}</p>
            <small className={styles.cardDescription}>
              {loading ? "Chargement..." : `${componentCount} Composants`}
            </small>
          </CardHeader>
        )}
        <CardBody className="p-0">
          <Image alt={title} className={styles.heroImage} src="https://plasmic-api.agence-scroll.com/library.webp" />
        </CardBody>
        <CardFooter className={styles.cardFooter}>
          <div>
            <p className={styles.cardFooterText}><strong>{loading ? "Chargement..." : version || error}</strong></p>
          </div>
          <Button
            className={styles.cardButton}
            color="default"
            radius="lg"
            size="sm"
            variant="flat"
            disabled={loading}
            onPress={handleToggleParameters}
          >
            {loading ? "Mise à jour..." : buttonText}
          </Button>
        </CardFooter>

        {showParameters && (
          <div className={styles.overlay} style={{ display: showParameters ? 'block' : 'none' }}>
            <div className={styles.overlayInner}>
              <Parameters
                onClose={handleToggleParameters}
                onItemClick={handleItemClick}
              />
            </div>
          </div>
        )}
      </Card>

      {showDetails && selectedItem && (
        <div className={styles.detailsWrapper}>
          <Details
            selectedItem={selectedItem}
            installedVersion={installedVersion}
            lastVersion={lastVersion}
          />
        </div>
      )}
    </div>
  );
};

export default Library_;
