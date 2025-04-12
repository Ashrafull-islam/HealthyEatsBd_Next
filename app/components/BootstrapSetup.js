"use client";
import { useEffect } from "react";

export default function BootstrapSetup() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => {
        console.log("Bootstrap JS loaded");
      })
      .catch((err) => console.error("Bootstrap JS load error", err));
  }, []);

  return null;
}
