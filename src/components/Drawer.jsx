import React, { useEffect, useCallback } from 'react';

function Drawer({ isOpen = false, close, children }) {
  const handleEscape = useCallback(
    (evt) => {
      if (evt.key === 'Escape') {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [handleEscape]);

  if (!isOpen) return null;

  return (
    <div
      className="drawer"
      onKeyDown={(evt) => (evt.key === 'Escape' ? close() : null)}
    >
      <div className="drawer__overlay" onClick={() => close()}></div>
      <div className="drawer__box">{children}</div>
    </div>
  );
}

export default Drawer;
