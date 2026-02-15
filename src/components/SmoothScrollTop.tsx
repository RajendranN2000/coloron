import { useEffect } from 'react';

// Smooth scroll to top function
const smoothScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

interface SmoothScrollTopProps {
  children: React.ReactNode;
}

const SmoothScrollTop: React.FC<SmoothScrollTopProps> = ({ children }) => {
  useEffect(() => {
    // Smooth scroll to top when component mounts
    smoothScrollToTop();
  }, []);

  return <>{children}</>;
};

export default SmoothScrollTop;
