"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt) return;

    setLoading(true);

    try {
      const response = await fetch("/api/imagegenerator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await response.json();

      if (data.image) {
        setImage(data.image);
      }
    } catch (error) {
      console.error(error);
      alert("Errore durante la generazione");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        maxWidth: 800,
        margin: "40px auto",
        padding: 20,
      }}
    >
      <div>SITO IN MANUTENZIONE</div>
      <h1>Image Drop AI</h1>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Descrivi l'immagine..."
        rows={5}
        style={{
          width: "100%",
          padding: 12,
        }}
      />

      <button
        onClick={generateImage}
        disabled={loading}
        style={{
          marginTop: 12,
          padding: "10px 20px",
        }}
      >
        {loading ? "Generazione..." : "Genera immagine"}
      </button>

      {image && (
        <div style={{ marginTop: 24 }}>
          <img
            src={image}
            alt="Generated"
            style={{
              width: "100%",
              borderRadius: 10,
            }}
          />
        </div>
      )}
    </main>
  );
}
