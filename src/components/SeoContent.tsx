
import React from 'react';

interface SeoContentProps {
  title: string;
  headings: {
    heading: string;
    content: string | React.ReactNode;
  }[];
}

const SeoContent = ({ title, headings }: SeoContentProps) => {
  return (
    <div className="hidden">
      <h1>{title}</h1>
      {headings.map((item, index) => (
        <div key={index}>
          <h2>{item.heading}</h2>
          {typeof item.content === 'string' ? <p>{item.content}</p> : item.content}
        </div>
      ))}
    </div>
  );
};

export default SeoContent;
