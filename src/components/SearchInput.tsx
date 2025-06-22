// src/components/SearchInput.tsx

import React, { useState, useEffect, useRef } from "react";
import { GitHubUser, GitHubApiResponse } from "../types/github";
import "../styles/SearchInput.css";

type Props = { onResults: (users: GitHubUser[]) => void };

const SearchInput: React.FC<Props> = ({ onResults }) => {
  const [input, setInput] = useState("");
  const controllerRef = useRef<AbortController | null>(null);

  const token = process.env.REACT_APP_GITHUB_TOKEN;

  useEffect(() => {
    if (input.length < 2) {
      controllerRef.current?.abort();
      return;
    }

    controllerRef.current?.abort();

    const controller = new AbortController();
    controllerRef.current = controller;

    const timeoutId = setTimeout(() => {
      const opts: RequestInit = {
        signal: controller.signal,
        ...(token ? { headers: { Authorization: `token ${token}` } } : {}),
      };

      fetch(
        `https://api.github.com/search/users?q=${encodeURIComponent(input)}&per_page=100`,
        opts
      )
        .then(async (res) => {
          if (res.status === 403) {
            console.warn("GitHub rate limit reached");
            return null;
          }
          if (!res.ok) throw new Error(res.statusText);
          return res.json() as Promise<GitHubApiResponse>;
        })
        .then((data) => {
          if (data) onResults(data.items);
        })
        .catch((err) => {
          if (err.name !== "AbortError") console.error(err);
        });
    }, 300);

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [input, token, onResults]); 

  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search input"
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
      }}
    />
  );
};

export default SearchInput;
