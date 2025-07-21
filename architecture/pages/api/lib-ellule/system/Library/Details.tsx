import type React from "react";
import { useState, useEffect } from "react";
import styles from "./Library.module.css";

interface DetailsProps {
  selectedItem: string | null;
  installedVersion: string;
  lastVersion: string;
}

const Details: React.FC<DetailsProps> = ({ selectedItem, installedVersion, lastVersion }) => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const [updateAvailable, setUpdateAvailable] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [isComponentsDownloading, setIsComponentsDownloading] = useState<boolean>(false);
  const [warningMessage, setWarningMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [newComponents, setNewComponents] = useState<string[]>([]);
  const [updatedComponents, setUpdatedComponents] = useState<string[]>([]);

  // Appel la route pour générer le Zip
  const handleAddToLibrary = async () => {
    setMessage("Envoi des composants pour compression...");
    setError(null);

    try {
      const response = await fetch("/api/lib-ellule/zip-to-vps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ components: [...newComponents, ...updatedComponents] }),
      });

      if (!response.ok) throw new Error("Erreur lors de l'envoi des fichiers");

      const data = await response.json();
      setMessage(`Fichier ZIP généré et envoyé : ${data.message}`);
    } catch (err: any) {
      setError(`Erreur : ${err.message}`);
    }
  };

  // Fonction pour charger la liste des composants depuis l'API
  const loadComponentsList = async () => {
    setLoading(true);
    setMessage("Chargement de la liste des composants...");
    setError(null);

    try {
      const response = await fetch("/api/lib-ellule/components-list");

      if (!response.ok) throw new Error("Erreur lors de la récupération de la liste des composants");

      const data = await response.json();

      // Filtrer les composants selon leur statut
      const newComps = data.newComponents || [];
      const updatedComps = data.updatedComponents || [];

      setNewComponents(newComps);
      setUpdatedComponents(updatedComps);

      setMessage('Liste des composants chargée avec succès !');
    } catch (err: any) {
      setError("Erreur lors du chargement des composants");
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour gérer la mise à jour
  const handleUpdate = async () => {
    setIsUpdating(true);
    setMessage("Mise à jour en cours...");
    setError(null);
  
    try {
      // Envoi de la requête POST pour lancer la mise à jour
      const response = await fetch("/api/lib-ellule/update", {
        method: "POST",
      });
  
      if (!response.ok) {
        throw new Error(`Erreur HTTP ${response.status}: ${response.statusText}`);
      }
  
      const data = await response.json();
      setMessage(data.message);
  
    } catch (err: any) {
      setError(`Erreur de mise à jour : ${err.message}`);
    } finally {
      setIsUpdating(false);
    }
  };

const handleComponentsDownload = async () => {
  setIsComponentsDownloading(true);
  setError(null);
  setMessage(null);

  try {
    const response = await fetch('/api/lib-ellule/download-and-extract?dossier=components', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status}`);
    }

    const data = await response.json();
    setMessage(data.message);
  } catch (err: any) {
    setError(err.message || 'Erreur inconnue');
  } finally {
    setIsComponentsDownloading(false);
  }
};

  // Vérification de la disponibilité de la mise à jour
  useEffect(() => {
    if (installedVersion !== lastVersion) {
      setUpdateAvailable(true);
      setMessage(`Une nouvelle version est disponible : ${lastVersion}`);
    } else {
      setMessage(`Version ${lastVersion} à jour`);
    }
    setLoading(false);
  }, [installedVersion, lastVersion]);

  // Vérifiez si l'action est "Partager" avant de charger les composants
  useEffect(() => {
    if (selectedItem === "Partager") {
      loadComponentsList();
    }
  }, [selectedItem]);

  useEffect(() => {
    if (selectedItem === "Composants") {
      setMessage("Le dossier contenant tous les composants mis  à jour va être téléchargé dans le dossier composants, à la racine de votre projet !");
      setWarningMessage("Attention, cette action va écraser \n le contenu de votre dossier composants ! \n S'il existe, bien sûr...");
      setError(null);
    } else {
      setWarningMessage(null);
    }
  }, [selectedItem]);

  useEffect(() => {
    if (selectedItem === "Système") {
      if (installedVersion !== lastVersion) {
      setUpdateAvailable(true);
      setMessage(`Une nouvelle version est disponible : ${lastVersion}`);
    } else {
      setMessage(`Version ${lastVersion} à jour`);
    }
      setError(null);
    }
  }, [selectedItem]);

  useEffect(() => {
    if (selectedItem === "Réinitialiser") {
      setMessage(`Remet votre projet comme au 1er jour ! \n A venir... prochainement`);
      setError(null);
    }
  }, [selectedItem]);

  return (
    <>
      <h3 className={styles.detailsHeader}>
        {selectedItem ? `Détails de l'action : ${selectedItem}` : "Sélectionnez une action pour afficher les détails"}
      </h3>

      <div className={styles.statusMessage}>
        {loading ? <p>🔹 Vérification en cours...</p> : <p>{message}</p>}
      </div>

      {warningMessage && (
        <div className={styles.warningMessage}>
          <p>⚠️ {warningMessage}</p>
        </div>
      )}

      {/* Affichage des informations de mise à jour uniquement si l'action est "Partager" */}
      {selectedItem === "Partager" && (
        <div>
          {/* Liste des nouveaux composants */}
          {newComponents.length > 0 && (
            <div className={styles.componentList}>
              <h4>Nouveaux composants</h4>
              <ul>
                {newComponents.map((comp, index) => (
                  <li key={comp}>{comp}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Liste des composants mis à jour */}
          {updatedComponents.length > 0 && (
            <div className={styles.componentList}>
              <h4>Composants mis à jour</h4>
              <ul>
                {updatedComponents.map((comp, index) => (
                  <li key={comp}>{comp}</li>
                ))}
              </ul>
            </div>
          )}
          <div className={styles.componentButtons}>
          <button type="button" onClick={handleAddToLibrary} className={styles.updateButton}>
              Ajouter à la librarie
            </button>
            {/* Bouton pour mettre à jour la liste des composants */}
            <button type="button" onClick={loadComponentsList} className={styles.updateButton}>
              Mettre à jour la liste des composants
            </button>
          </div>
        </div>
      )}

      {/* Affichage de la mise à jour de la version si sélectionné */}
      {selectedItem === "update" && (
        <div className={styles.versionInfo}>
          <p><strong>Version installée :</strong> {installedVersion}</p>
          <p><strong>Dernière version :</strong> {lastVersion}</p>

          {updateAvailable && !isUpdating && (
            <button onClick={handleUpdate} className={styles.updateButton} type="button">
              Mettre à jour
            </button>
          )}

          {isUpdating && <p>🔄 Mise à jour en cours...</p>}
          {error && <p className={styles.errorMessage}>{error}</p>}
        </div>
      )}

      {selectedItem === "Composants" && (
        <div className={styles.versionInfo}>

          {!isComponentsDownloading && (
            <button onClick={handleComponentsDownload} className={styles.updateButton} type="button">
              Télécharger
            </button>
          )}

          {isComponentsDownloading && <p>🔄 Téléchargement en cours...</p>}
          {error && <p className={styles.errorMessage}>{error}</p>}
        </div>
      )}
    </>
  );
};

export default Details;
