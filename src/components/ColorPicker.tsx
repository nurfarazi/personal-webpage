import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { colorOptions } from '../contexts/colorOptions';

const ColorPicker = () => {
  const { primaryColor, setPrimaryColor } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentColor = colorOptions.find(option => option.name === primaryColor);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleColorSelect = (colorName: typeof primaryColor) => {
    setPrimaryColor(colorName);
    setIsOpen(false);
  };

  return (
    <div className="color-picker" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="color-picker-trigger"
        aria-label="Select primary color"
        aria-expanded={isOpen}
      >
        <div 
          className="color-preview"
          style={{ backgroundColor: currentColor?.primary }}
        />
        <svg 
          width="12" 
          height="12" 
          viewBox="0 0 24 24" 
          fill="none" 
          className={`dropdown-arrow ${isOpen ? 'open' : ''}`}
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isOpen && (
        <div className="color-picker-dropdown">
          <div className="color-picker-title">Choose Color</div>
          <div className="color-options">
            {colorOptions.map((option) => (
              <button
                key={option.name}
                onClick={() => handleColorSelect(option.name)}
                className={`color-option ${option.name === primaryColor ? 'active' : ''}`}
                aria-label={`Select ${option.label} color`}
              >
                <div 
                  className="color-swatch"
                  style={{ backgroundColor: option.primary }}
                />
                <span className="color-label">{option.label}</span>
                {option.name === primaryColor && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="check-icon">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;