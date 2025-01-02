import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          © 2024 Lohith Reddy Poreddy
        </div>

        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/lohith-poreddy-4298081b9/" target="_blank" className="hover:text-blue-500 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.2.79 24 1.77 24h20.45c.98 0 1.78-.8 1.78-1.77V1.73C24 .77 23.2 0 22.23 0zM7.12 20.5H3.56v-10h3.56v10zm-1.79-11.47c-1.14 0-2.06-.93-2.06-2.08s.92-2.07 2.06-2.07c1.15 0 2.07.93 2.07 2.07 0 1.15-.92 2.08-2.07 2.08zm15.16 11.47h-3.56v-5.6c0-1.33-.03-3.03-1.84-3.03-1.85 0-2.13 1.44-2.13 2.93v5.7h-3.56v-10h3.42v1.37h.05c.47-.89 1.63-1.84 3.36-1.84 3.6 0 4.27 2.37 4.27 5.46v5.01z"/>
            </svg>
          </a>

          <a href="https://github.com/LohithReddyPoreddy/2048_game.git" target="_blank" className="hover:text-gray-400 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.336-5.466-5.931 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.398 3.006-.404 1.02.006 2.05.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.607-2.805 5.625-5.475 5.921.43.372.813 1.103.813 2.222 0 1.606-.015 2.903-.015 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;