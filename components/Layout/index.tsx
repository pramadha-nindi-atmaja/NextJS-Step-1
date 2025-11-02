import Head from "next/head";
import React from "react";
import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
  metaDescription?: string;
}

export default function Layout({ 
  children, 
  pageTitle, 
  metaDescription = "Nine Dragon Labs - Building innovative web solutions"
}: LayoutProps) {
  const fullTitle = `${pageTitle} | Nine Dragon Labs`;

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className={styles.main}>
        <div className={styles.container}>
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
