import React from 'react';

interface CloudProps {
  className?: string;
  fill?: string;
  style?: React.CSSProperties;
}

// Original fluffy cloud
export const Cloud1: React.FC<CloudProps> = ({ className, fill, style }) => (
  <svg 
    className={className} 
    style={style} 
    viewBox="0 0 24 24" 
    fill={fill || "currentColor"}
  >
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);

// Puffy cloud with more bumps
export const Cloud2: React.FC<CloudProps> = ({ className, fill, style }) => (
  <svg 
    className={className} 
    style={style} 
    viewBox="0 0 24 24" 
    fill={fill || "currentColor"}
  >
    <path d="M18 19H6a6 6 0 0 1 5.5-8.5 4 4 0 0 1 7.5 1.5 3.5 3.5 0 0 1 2 6.5 2.5 2.5 0 0 1-3 0.5Z" />
  </svg>
);

// Stretched horizontal cloud
export const Cloud3: React.FC<CloudProps> = ({ className, fill, style }) => (
  <svg 
    className={className} 
    style={style} 
    viewBox="0 0 24 24" 
    fill={fill || "currentColor"}
  >
    <path d="M20 18H4a5 5 0 0 1 4-8 6 6 0 0 1 11 3 4 4 0 0 1 1 5Z" />
  </svg>
);

// Small puffy cloud
export const Cloud4: React.FC<CloudProps> = ({ className, fill, style }) => (
  <svg 
    className={className} 
    style={style} 
    viewBox="0 0 24 24" 
    fill={fill || "currentColor"}
  >
    <path d="M16 17H8a4 4 0 0 1 3-7 5 5 0 0 1 8 4 3 3 0 0 1-3 3Z" />
  </svg>
);

// Wispy cloud
export const Cloud5: React.FC<CloudProps> = ({ className, fill, style }) => (
  <svg 
    className={className} 
    style={style} 
    viewBox="0 0 24 24" 
    fill={fill || "currentColor"}
  >
    <path d="M19 16H7a5 5 0 0 1 4.5-7.5 4.5 4.5 0 0 1 8 3 3.5 3.5 0 0 1 2.5 4 2 2 0 0 1-3 0.5Z" />
  </svg>
);

// Round fluffy cloud
export const Cloud6: React.FC<CloudProps> = ({ className, fill, style }) => (
  <svg 
    className={className} 
    style={style} 
    viewBox="0 0 24 24" 
    fill={fill || "currentColor"}
  >
    <path d="M17 18H9a5.5 5.5 0 0 1 4.5-8.5 4 4 0 0 1 7 2.5 3 3 0 0 1 1.5 5.5 2.5 2.5 0 0 1-5 0.5Z" />
  </svg>
);

// Tall cloud
export const Cloud7: React.FC<CloudProps> = ({ className, fill, style }) => (
  <svg 
    className={className} 
    style={style} 
    viewBox="0 0 24 24" 
    fill={fill || "currentColor"}
  >
    <path d="M16 19H10a6 6 0 0 1 4-10 3.5 3.5 0 0 1 6 2 4 4 0 0 1 1 7 2 2 0 0 1-5 1Z" />
  </svg>
);

// Bumpy cloud
export const Cloud8: React.FC<CloudProps> = ({ className, fill, style }) => (
  <svg 
    className={className} 
    style={style} 
    viewBox="0 0 24 24" 
    fill={fill || "currentColor"}
  >
    <path d="M18.5 18H7.5a5 5 0 0 1 3.5-8 4.5 4.5 0 0 1 8.5 2 3.5 3.5 0 0 1 2 5.5 2.5 2.5 0 0 1-3 0.5Z" />
  </svg>
);