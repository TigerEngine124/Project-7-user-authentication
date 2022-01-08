import { GetServerSideProps } from 'next';

export default function Index() {
  return (
    <h1>
      <span>OI</span>
    </h1>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
