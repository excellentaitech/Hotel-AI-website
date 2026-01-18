"use client";

import { useEffect } from "react";
import "vanilla-cookieconsent/dist/cookieconsent.css";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function CookieConsent() {
  useEffect(() => {
    const initCookieConsent = async () => {
      const module = await import("vanilla-cookieconsent");
      const CookieConsent = module.default || module;

      if (!CookieConsent || typeof CookieConsent.run !== "function") {
        console.warn("CookieConsent not loaded properly");
        return;
      }

      CookieConsent.run({
        guiOptions: {
          consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false,
          },
          preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false,
          },
        },

        categories: {
          necessary: {
            enabled: true,
            readOnly: true,
          },
          analytics: {
            enabled: false,
            readOnly: false,
            autoClear: {
              cookies: [
                { name: /^_ga/ },
                { name: "_gid" },
              ],
            },
          },
        },

        language: {
          default: "en",
          translations: {
            en: {
              consentModal: {
                title: "We use cookies",
                description:
                  "We use cookies to analyze site usage and improve your experience. You can accept all cookies or manage your preferences.",
                acceptAllBtn: "Accept all",
                acceptNecessaryBtn: "Reject all",
                showPreferencesBtn: "Manage preferences",
              },
              preferencesModal: {
                title: "Cookie Preferences",
                acceptAllBtn: "Accept all",
                acceptNecessaryBtn: "Reject all",
                savePreferencesBtn: "Save preferences",
                closeIconLabel: "Close",
                sections: [
                  {
                    title: "Cookie Usage",
                    description:
                      "We use cookies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from.",
                  },
                  {
                    title: "Essential Cookies",
                    description:
                      "These cookies are required for the website to function and cannot be disabled.",
                    linkedCategory: "necessary",
                  },
                  {
                    title: "Analytics Cookies",
                    description:
                      "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
                    linkedCategory: "analytics",
                  },
                ],
              },
            },
          },
        },

        onFirstConsent: ({ cookie }) => {
          // Update GA4 consent when user first makes a choice
          if (cookie.categories.includes("analytics")) {
            updateGtagConsent("granted");
          }
        },

        onConsent: ({ cookie }) => {
          // Update GA4 consent on any consent change
          if (cookie.categories.includes("analytics")) {
            updateGtagConsent("granted");
          } else {
            updateGtagConsent("denied");
          }
        },

        onChange: ({ cookie }) => {
          // Update GA4 consent when preferences change
          if (cookie.categories.includes("analytics")) {
            updateGtagConsent("granted");
          } else {
            updateGtagConsent("denied");
          }
        },
      });

      // Hook up the cookie settings button in footer
      const cookieSettingsBtn = document.getElementById("cookie-settings-btn");
      if (cookieSettingsBtn) {
        cookieSettingsBtn.addEventListener("click", () => {
          CookieConsent.showPreferences();
        });
      }
    };

    const updateGtagConsent = (consent: "granted" | "denied") => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: consent,
        });
      }
    };

    initCookieConsent();
  }, []);

  return null;
}
