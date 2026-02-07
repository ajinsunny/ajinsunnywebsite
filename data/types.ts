import React from "react";

export interface AboutInfo {
  title: React.ReactNode;
  stage?: string;
  icons?: React.ReactNode[];
}

export interface CredentialCard {
  title: string;
  organization: string;
  date: string;
  image: string;
  url?: string;
}

export interface AboutSection {
  title: string;
  info?: AboutInfo[];
  credentials?: CredentialCard[];
}
