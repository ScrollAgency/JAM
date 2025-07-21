import React, { useState } from "react";
import { getComponents } from "../lib/libellule/getComponents";
import { getComponentInfo } from "../lib/libellule/getComponentInfo";
import { presets } from "@/styles/presets";

interface ComponentInfo {
  group: string;
  name: string;
  importPath: string;
  dirName?: string;
  info?: {
    description?: string;
    infos?: string;
    notes?: string;
  };
}

interface LibellulePageProps {
  components: ComponentInfo[];
}

const LibellulePage: React.FC<LibellulePageProps> = ({ components }) => {
  const [selectedComponent, setSelectedComponent] = useState<ComponentInfo | null>(null);
  const [description, setDescription] = useState("");
  const [infos, setInfos] = useState("");
  const [notes, setNotes] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [isComponentsGenerating, setIsComponentsGenerating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const closeModal = () => setSelectedComponent(null);

  const groups = components.reduce<Record<string, ComponentInfo[]>>((acc, comp) => {
    if (!acc[comp.group]) acc[comp.group] = [];
    acc[comp.group].push(comp);
    return acc;
  }, {});

  const sortedGroupNames = Object.keys(groups).sort((a, b) => {
    if (a.toLowerCase() === "others") return 1;
    if (b.toLowerCase() === "others") return -1;
    return a.localeCompare(b);
  });

  const handleMajComponents = async () => {
    setIsComponentsGenerating(true);
    setError(null);
    setMessage(null);

    try {
      const response = await fetch('/api/lib-ellule/generate-components', {
        method: 'post',
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP ${response.status}`);
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (err: any) {
      setError(err.message || 'Erreur inconnue');
    } finally {
      setIsComponentsGenerating(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 1300,
        padding: 24,
        backgroundColor: "#f6f3ef",
        minHeight: "100vh",
        margin: "0 auto",
      }}
    >
      <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: "125px", }}>
        <div style={{ cursor: "pointer", width:100, }}>
          <a href="plasmic-library"><img src="signout.svg" width="45px"/></a>
        </div>
        <div style={{ width: "100%", justifyContent: "left", flexDirection:"column"}}>
          <h1 style={presets.heading1}>Lib' & 'lulle</h1>
        </div>
        <div style={{ display: "flex", flexDirection: "row", cursor: "pointer", width:100, height: "125px", alignItems: "center", }}>
           {!isComponentsGenerating && (
            <button onClick={handleMajComponents} type="button">
              <img src="reload.png"/>
            </button>
          )}
          {isComponentsGenerating && <p>Génération en cours...</p>}
          {error && <p>{error}</p>}

        </div>
      </div>
  
      <hr />

      {components.length === 0 && <p>Aucun composant trouvé.</p>}

      {sortedGroupNames.map((groupName) => {
        const comps = groups[groupName];
        return (
          <section key={groupName} style={{ marginBottom: 48 }}>
            <h2 style={presets.heading4}>{groupName}</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                columnGap: "8px",
                rowGap: "8px",
                overflowX: "auto",
                paddingBottom: 8,
              }}
            >
              {comps.map((comp) => {
                const imgSrc = comp.group === "others" ? "/library/undefined.png" : `/library/${comp.name}.png`;

                return (
                  <div
                    key={`${comp.group}-${comp.name}`}
                    onClick={async () => {
                      setSelectedComponent(comp);
                      setEditMode(false);

                      const res = await fetch(`/api/lib-ellule/get-infos?group=${comp.group}&dirName=${comp.dirName}`);
                      if (res.ok) {
                        const json = await res.json();
                        setDescription(json.description || "");
                        setInfos(json.infos || "");
                        setNotes(json.notes || "");
                      } else {
                        setDescription("");
                        setInfos("");
                        setNotes("");
                      }
                    }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: 140,
                      backgroundColor: "#fff",
                      borderRadius: 6,
                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                      padding: 8,
                      cursor: "pointer",
                    }}
                    title={comp.name}
                  >
                    <img
                      src={imgSrc}
                      alt={`${comp.name} thumbnail`}
                      style={{
                        width: 120,
                        height: 90,
                        objectFit: "contain",
                        marginBottom: 8,
                        borderRadius: 4,
                        backgroundColor: "#eee",
                      }}
                    />
                    <div
                      style={{
                        fontSize: 14,
                        textAlign: "center",
                        fontWeight: "bold",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: 100,
                      }}
                    >
                      {comp.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}

      {selectedComponent && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: 8,
              padding: 24,
              width: 500,
              maxWidth: "90%",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <img
                  src={
                    selectedComponent.group === "others"
                      ? "/library/undefined.png"
                      : `/library/${selectedComponent.name}.png`
                  }
                  alt={`${selectedComponent.name} preview`}
                  style={{ width: 80, height: 60, objectFit: "contain", borderRadius: 4, backgroundColor: "#eee" }}
                />
                <button
                  onClick={() => setEditMode(true)}
                  style={{
                    position: "absolute",
                    bottom: -4,
                    right: -4,
                    fontSize: 16,
                    background: "rgba(255,255,255,0.8)",
                    border: "none",
                    borderRadius: "16px 4px 4px 4px",
                    cursor: "pointer",
                    padding: "2px",
                  }}
                >
                  ✏️
                </button>
              </div>

              <div style={{ width: "100%", justifyContent: "left", flexDirection:"column"}}>
                <div style={{ marginLeft: 16, fontSize: 18, fontWeight: "bold", height: "100%" }}>
                  {selectedComponent.name}
                </div>
                <div style={{ display: "flex", width: "100%", height: "25px", justifyContent: "flex-end", flexDirection:"row", columnGap: 4}}>
                  <div style={{ cursor: "pointer"}} title="Activer">
                    <img src="toggle-on.png" width="20px" />
                  </div>
                  <div style={{ cursor: "pointer"}} title="Désactiver">
                    <img src="toggle-off.png" width="20px" />
                  </div>
                  <div style={{ cursor: "pointer"}} title="Désinstaller">
                    <img src="uninstall.png" width="20px" />
                  </div>
                  <div style={{ cursor: "pointer"}} title="installer">
                    <img src="install.png" width="20px" />
                  </div>
                  <div style={{ cursor: "pointer"}} title="Mettre à jour">
                    <img src="update.png" width="20px" />
                  </div>
                </div>
              </div>

            </div>

            <div style={{ minHeight: 100 }}>
              {!editMode && (
                <div>
                  {description && (
                    <p>
                      <strong>Description :</strong> {description}
                    </p>
                  )}
                  {infos && (
                    <p>
                      <strong>Infos :</strong> {infos}
                    </p>
                  )}
                  {notes && (
                    <p>
                      <strong>Notes :</strong> {notes}
                    </p>
                  )}
                </div>
              )}

              {editMode && (
                <form
  onSubmit={async (e) => {
    e.preventDefault();
    const res = await fetch("api/lib-ellule/save-infos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        group: selectedComponent.group,
        name: selectedComponent.name,
        data: { description, infos, notes },
      }),
    });
    if (res.ok) {
      setEditMode(false);
      setSelectedComponent((prev) =>
        prev ? { ...prev, info: { description, infos, notes } } : null
      );
    }
  }}
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  }}
>
  {[
    { label: "Description", key: "description" },
    { label: "Infos", key: "infos" },
    { label: "Notes", key: "notes" },
  ].map(({ label, key }) => {
    const value =
      key === "description" ? description : key === "infos" ? infos : notes;
    const setter =
      key === "description"
        ? setDescription
        : key === "infos"
        ? setInfos
        : setNotes;

    return (
      <label
        key={key}
        style={{
          display: "flex",
          flexDirection: "column",
          fontWeight: "600",
          fontSize: "14px",
          color: "#333",
        }}
      >
        {label}:
        <textarea
          rows={3}
          value={value}
          onChange={(e) => setter(e.target.value)}
          style={{
            marginTop: "6px",
            padding: "8px",
            fontSize: "14px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            resize: "vertical",
            fontFamily: "inherit",
            boxShadow: "inset 0 1px 3px rgb(0 0 0 / 0.1)",
            transition: "border-color 0.3s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#0070f3")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />
      </label>
    );
  })}

  <button
    type="submit"
    style={{
      alignSelf: "flex-end",
      padding: "10px 18px",
      backgroundColor: "#0070f3",
      color: "white",
      border: "none",
      borderRadius: "6px",
      fontWeight: "600",
      fontSize: "14px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.backgroundColor = "#005bb5")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.backgroundColor = "#0070f3")
    }
  >
    Enregistrer
  </button>
</form>


              )}
            </div>

            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                background: "transparent",
                border: "none",
                fontSize: 24,
                cursor: "pointer",
              }}
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export async function getStaticProps() {
  const baseComponents = getComponents();

  const components = baseComponents.map((comp) => ({
    ...comp,
    info: getComponentInfo(comp.group, comp.name) || null,
  }));

  return {
    props: {
      components,
    },
  };
}

export default LibellulePage;
