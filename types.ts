import React from 'react';

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  isPremium?: boolean;
  color?: string;
}

export interface PortfolioItemProps {
  title: string;
  description: string;
  image: string;
  colorClass: string;
  url: string;
}