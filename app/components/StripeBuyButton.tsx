'use client';

import { useEffect, useRef, useState } from 'react';

interface StripeBuyButtonProps {
  buyButtonId: string;
  publishableKey: string;
}

function isWebView(): boolean {
  if (typeof window === 'undefined') return false;
  const ua = navigator.userAgent;
  if (/LinkedInApp/i.test(ua)) return true;
  if (/FBAN|FBAV/i.test(ua)) return true;
  if (/Instagram/i.test(ua)) return true;
  if (/Twitter/i.test(ua)) return true;
  if (/wv\)|WebView/i.test(ua)) return true;
  const isIOS = /iPhone|iPad|iPod/.test(ua);
  const isSafari = /Safari/.test(ua);
  if (isIOS && !isSafari) return true;
  return false;
}

function getWebViewName(): string {
  if (typeof window === 'undefined') return 'this app';
  const ua = navigator.userAgent;
  if (/LinkedInApp/i.test(ua)) return 'LinkedIn';
  if (/FBAN|FBAV/i.test(ua)) return 'Facebook';
  if (/Instagram/i.test(ua)) return 'Instagram';
  if (/Twitter/i.test(ua)) return 'Twitter';
  return 'this app';
}

export default function StripeBuyButton({ buyButtonId, publishableKey }: StripeBuyButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inWebView, setInWebView] = useState(false);
  const [webViewName, setWebViewName] = useState('this app');
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  useEffect(() => {
    setInWebView(isWebView());
    setWebViewName(getWebViewName());
  }, []);

  useEffect(() => {
    if (containerRef.current && typeof window !== 'undefined' && !inWebView) {
      containerRef.current.innerHTML = '';
      const stripeBuyButton = document.createElement('stripe-buy-button');
      stripeBuyButton.setAttribute('buy-button-id', buyButtonId);
      stripeBuyButton.setAttribute('publishable-key', publishableKey);
      containerRef.current.appendChild(stripeBuyButton);

      const style = document.createElement('style');
      style.textContent = `
        stripe-buy-button {
          display: flex !important;
          justify-content: center !important;
          width: 100% !important;
        }
      `;
      containerRef.current.appendChild(style);
    }
  }, [buyButtonId, publishableKey, inWebView]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowCopySuccess(true);
      setTimeout(() => setShowCopySuccess(false), 2000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setShowCopySuccess(true);
      setTimeout(() => setShowCopySuccess(false), 2000);
    }
  };

  if (inWebView) {
    return (
      <div className="text-center space-y-4">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-amber-800 text-sm mb-3">
            For the best donation experience, please open this page in your browser (Safari, Chrome, etc.) instead of {webViewName}&apos;s built-in browser.
          </p>
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 bg-amber-100 hover:bg-amber-200 text-amber-900 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
          >
            {showCopySuccess ? (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Link Copied!
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                Copy Link to Open in Browser
              </>
            )}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full flex justify-center items-center"
    />
  );
}
