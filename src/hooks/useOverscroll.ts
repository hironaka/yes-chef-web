import { useEffect } from 'react';

const useOverscroll = () => {
  useEffect(() => {
    const originalStyle = document.body.style.overscrollBehavior;
    document.body.style.overscrollBehavior = 'none';

    return () => {
      document.body.style.overscrollBehavior = originalStyle;
    };
  }, []);
};

export default useOverscroll;