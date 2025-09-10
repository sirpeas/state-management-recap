import type { ReactNode } from 'react';
import { Provider } from 'jotai';

type Props = {
  children: ReactNode;
};

function PageProviders(props: Props) {
  const { children } = props;

  return (
    <Provider>
      {children}
    </Provider>
  );
}
export default PageProviders;
