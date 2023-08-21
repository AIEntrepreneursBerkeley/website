import { type FC, type ReactNode } from 'react';
import { cn } from '~/utils/cn';
import MainLayout from '~/components/layouts/MainLayout';

type SecondaryLayoutType = {
  color: 'orange' | 'green' | 'blue' | 'purple' | 'teal' | 'gray' | 'white';
  children: ReactNode;
};

const SecondaryLayout: FC<SecondaryLayoutType> = ({ color, children }) => (
  <MainLayout>
    <div className="-mt-[85px]">
      <div
        className={cn(
          'bg-bottom bg-no-repeat pt-[85px]',
          color === 'orange' && 'layout-gradient-orange',
          color === 'green' && 'layout-gradient-green',
          color === 'blue' && 'layout-gradient-blue',
          color === 'purple' && 'layout-gradient-purple',
          color === 'teal' && 'layout-gradient-teal',
          color === 'gray' && 'layout-gradient-gray',
          color === 'white' && 'layout-gradient-white'
        )}
      >
        {children}
      </div>
    </div>
  </MainLayout>
);

export default SecondaryLayout;
