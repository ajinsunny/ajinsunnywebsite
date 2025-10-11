"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/90 border-t border-white/10 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let&apos;s work <span className="text-accent">together</span>
            </h3>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-accent text-white rounded-full font-medium text-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105">
                Get in Touch
              </button>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-8 text-white/70"
          >
            <Link
              href="/"
              className="hover:text-accent transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="hover:text-accent transition-colors text-sm font-medium"
            >
              Contact
            </Link>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-white/50 text-sm"
          >
            <p>© {currentYear} Ajin Sunny. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
