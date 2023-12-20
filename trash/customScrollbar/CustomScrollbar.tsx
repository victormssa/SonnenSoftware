import { ReactNode } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
type CustomScrollbarProps = {
    children: ReactNode;
  };
  
  const CustomScrollbar = ({ children }: CustomScrollbarProps) => {
    return (
      <Scrollbars
        autoHide
        renderThumbVertical={({ style, ...props }) => (
          <div
            {...props}
            className="bg-gray-300 dark:bg-red-700 rounded"
            style={{ ...style, width: '6px' }}
          />
        )}
      >
        {children}
      </Scrollbars>
    );
  };
  
  export default CustomScrollbar;