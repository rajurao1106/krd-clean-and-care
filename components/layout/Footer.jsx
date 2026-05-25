"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Clock } from "lucide-react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import defaultLogo from "@/public/navbar/logo.png";

export default function Footer() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/admin/settings",
        );
        const data = await response.json();
        setSettings(data.settings);
      } catch (error) {
        console.error("Error fetching footer configurations:", error);
      }
    };

    fetchSettings();
  }, []);

  const portfolioLinks = [
    "Glass & Multisurface Cleaner",
    "Milky Herbal Floor Cleaner",
    "Toilet Cleaner",
    "Milky Perfumed Cleaner",
    "Dish Wash Gel",
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // सोशल मीडिया लिंक्स अब API से आ रहे हैं और हमेशा दिखाई देंगे
  const socials = [
    {
      Icon: FaFacebookF,
      href: settings?.facebook_url || "#",
      label: "Facebook",
    },
    { Icon: FaTwitter, href: settings?.twitter_url || "#", label: "Twitter" },
    { Icon: FaYoutube, href: settings?.youtube_url || "#", label: "Youtube" },
    {
      Icon: FaInstagram,
      href: settings?.instagram_url || "#",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 font-sans border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Logo & Socials */}
          <div className="flex flex-col items-start space-y-6">
            <div className="relative">
              <Image
                src={settings?.site_logo || defaultLogo}
                alt={`${settings?.site_name || "KRD Clean and Care"} Logo`}
                width={160}
                height={160}
                priority
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {settings?.site_tagline ||
                "Ensures 100% environment-friendly cleaning products across the nation."}
              {" Pure care for your home and the planet."}
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300 shadow-sm"
                >
                  <social.Icon
                    size={18}
                    className="text-black transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Our Products
            </h3>
            <ul className="space-y-4">
              {portfolioLinks.map((link) => (
                <li
                  key={link}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all cursor-pointer group"
                >
                  <span className="w-2 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Navigation
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li
                  key={link.name}
                  className="text-sm text-gray-400 hover:text-white transition-all group"
                >
                  <Link href={link.href} className="flex items-center gap-2">
                    <span className="w-2 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-6 text-gray-400">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Contact Info
            </h3>
            <u6l className="space-y-5">
              {settings?.site_email && (
                <li className="flex items-start gap-4 group">
                  <div className="bg-gray-900 p-2 rounded-lg group-hover:bg-blue-900/30 transition-colors">
                    <Mail className="text-blue-400" size={18} />
                  </div>
                  <a
                    href={`mailto:${settings.site_email}`}
                    className="text-sm hover:text-white transition-colors break-all"
                  >
                    {settings.site_email}
                  </a>
                </li>
              )}
              {settings?.site_address && (
                <li className="flex items-start gap-4 group">
                  <div className="bg-gray-900 p-2 rounded-lg group-hover:bg-blue-900/30 transition-colors">
                    <MapPin className="text-blue-400" size={18} />
                  </div>
                  <span className="text-sm leading-relaxed whitespace-pre-line">
                    {settings.site_address}
                  </span>
                </li>
              )}
              {settings?.working_hours && (
                <li className="flex items-start gap-4 group">
                  <div className="bg-gray-900 p-2 rounded-lg group-hover:bg-blue-900/30 transition-colors">
                    <Clock className="text-blue-400" size={18} />
                  </div>
                  <span className="text-sm whitespace-pre-line">
                    {settings.working_hours}
                  </span>
                </li>
              )}
            </u6l>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-[11px] uppercase tracking-widest text-gray-500 text-center gap-4">
          <p>
            Copyright © {new Date().getFullYear()}{" "}
            <span className="text-gray-300 font-bold">
              {settings?.site_name || "KRD Clean And Care"}
            </span>
            .
          </p>
          <p>
            Developed by{" "}
            <a
              href="#"
              className="text-white hover:text-blue-400 transition-colors font-semibold"
            >
              DigiKraft Social
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
