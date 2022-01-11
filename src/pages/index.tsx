import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/client';
import { Wrapper } from '../components/Wrapper';

export default function Index() {
  const [session /*loading*/] = useSession();

  return (
    <Wrapper>
      <h1>Olá{session?.user?.name || 'Ninguém'}</h1>
    </Wrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
