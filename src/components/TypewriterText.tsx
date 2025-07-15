import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  startDelay?: number;
  showCursor?: boolean;
  cursorChar?: string;
  className?: string;
  onComplete?: () => void;
  startAnimation?: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 50,
  startDelay = 0,
  showCursor = true,
  cursorChar = '_',
  className = '',
  onComplete,
  startAnimation = true
}) => {
  const { displayText, isComplete } = useTypewriter({
    text: startAnimation ? text : '',
    speed,
    startDelay,
    showCursor,
    cursorChar,
    onComplete
  });

  return (
    <div className={`typewriter-text ${className}`} style={{
      fontFamily: "'Courier New', Courier, monospace",
      whiteSpace: 'pre-wrap',
      wordWrap: 'break-word',
      lineHeight: '1.7'
    }}>
      {startAnimation ? displayText : ''}
    </div>
  );
};

export default TypewriterText;
