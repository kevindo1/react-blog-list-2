import React from 'react';
import './BlogCard.css';

export default function BlogCard({ title, subtitle, text, image, authors: { name } }) {
  return (
    <div className="blog-card">
      <div className="details">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        <div className="text">{text}</div>
        <div className="name">{name}</div>
      </div>
      <div className="image">
        <img src={image} />
      </div>
    </div>
  );
}
