import { useState, useEffect, useRef } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  startDelay?: number;
  showCursor?: boolean;
  cursorChar?: string;
  onComplete?: () => void;
}

export const useTypewriter = ({
  text,
  speed = 50,
  startDelay = 0,
  showCursor = true,
  cursorChar = '_',
  onComplete
}: UseTypewriterOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursorState, setShowCursorState] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const cursorTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Reset state when text changes
    setDisplayText('');
    setCurrentIndex(0);
    setIsComplete(false);
    setShowCursorState(true);

    // Clear any existing timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (cursorTimeoutRef.current) {
      clearTimeout(cursorTimeoutRef.current);
    }

    if (text) {
      // Start cursor blinking immediately
      if (showCursor) {
        startCursorBlink();
      }

      // Start typing after delay
      timeoutRef.current = setTimeout(() => {
        startTyping();
      }, startDelay);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (cursorTimeoutRef.current) {
        clearTimeout(cursorTimeoutRef.current);
      }
    };
  }, [text, speed, startDelay]);

  const startTyping = () => {
    let index = 0;

    const typeNextChar = () => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        setCurrentIndex(index + 1);
        index++;
        timeoutRef.current = setTimeout(typeNextChar, speed);
      } else {
        setIsComplete(true);
        if (onComplete) {
          onComplete();
        }
      }
    };

    typeNextChar();
  };

  const startCursorBlink = () => {
    const blink = () => {
      setShowCursorState(prev => !prev);
      cursorTimeoutRef.current = setTimeout(blink, 500);
    };
    blink();
  };

  const displayTextWithCursor = showCursor && showCursorState
    ? displayText + cursorChar
    : displayText;

  return {
    displayText: displayTextWithCursor,
    isComplete,
    currentIndex
  };
};
