import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/client';

export default function Index() {
  const [session /*loading*/] = useSession();

  return (
    <h1>
      <span>Olá Mundo{session && JSON.stringify(session)} </span>
    </h1>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
