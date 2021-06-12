import React from 'react';

const Footer = ({ support: { url, text } }) => {
  return (
    <div>
      <p><strong>URL</strong>: {url}</p>
      <p><strong>TEXT</strong>: {text}</p>
    </div>
  )
}

export default Footer
