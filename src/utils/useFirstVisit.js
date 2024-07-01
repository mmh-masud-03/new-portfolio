"use client";
import { useState, useEffect } from "react";
export const useFirstVisit = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  useEffect(() => {
    const isVisited = localStorage.getItem("visited");
    if (!isVisited) {
      setIsFirstVisit(true);
      localStorage.setItem("visited", "true");
    }
  }, []);
  return isFirstVisit;
};
