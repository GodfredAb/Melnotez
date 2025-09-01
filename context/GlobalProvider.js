import { Platform } from "react";
import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Songs state moved here
  const [songs, setSongs] = useState([]);

  // Load persisted songs from storage
  useEffect(() => {
    const loadSongs = async () => {
      try {
        const stored = await AsyncStorage.getItem("songs");
        if (stored) setSongs(JSON.parse(stored));
      } catch (err) {
        console.log("Error loading songs:", err);
      }
    };
    loadSongs();
  }, []);

  // Save songs to storage whenever they change
  useEffect(() => {
    AsyncStorage.setItem("songs", JSON.stringify(songs)).catch((err) =>
      console.log("Error saving songs:", err)
    );
  }, [songs]);

  // Add a new song
  const addSong = (song) => {
    setSongs((prev) => [...prev, song]);
  };

  // Rename song
  const renameSong = (id, newName) => {
    setSongs((prev) =>
      prev.map((s) => (s.id === id ? { ...s, name: newName } : s))
    );
  };

  // Remove song
  const removeSong = (id) => {
    setSongs((prev) => prev.filter((s) => s.id !== id));
  };

  // Load user on startup
  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLogged(true);
          setUser(res);
        } else {
          setIsLogged(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.log("GlobalProvider user error:", error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        loading,

        songs,
        addSong,
        renameSong,
        removeSong,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
