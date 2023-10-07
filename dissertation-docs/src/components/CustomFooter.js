import React from 'react';

function CustomFooter() {
  return (
    <footer>
      <div>
        <a href="https://www.ua.pt">
          <img src="/img/ua-logo.png" alt="Meta Open Source Logo 1" />
        </a>
      </div>
      <div>
        <a href="https://www.example.com">
          <img src="/img/ua-logo.png" alt="Meta Open Source Logo 2" />
        </a>
      </div>
      <div>
        {/* Add more logos as needed */}
      </div>
      {/* Add your copyright notice */}
      <div>
        Copyright © {new Date().getFullYear()} Meta Platforms, Inc. Built with Docusaurus.
      </div>
    </footer>
  );
}

export default CustomFooter;
