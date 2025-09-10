import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function PageProviders(props: Props) {
  const { children } = props;

  return (
    <>
      {children}
    </>
  );
}
export default PageProviders;
