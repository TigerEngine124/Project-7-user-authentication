import { GetServerSideProps } from 'next';
import { getSession, useSession } from 'next-auth/client';
import Link from 'next/link';
import { Wrapper } from '../components/Wrapper';
import { gqlClient } from '../graphql/client';
import { GQL_QUERY_GET_POSTS } from '../graphql/queries/post';
import { serverSideRedirect } from '../utils/server-side-redirect';

export type StrapiPost = {
  id?: string;
  title: string;
  content: string;
};

export type PostsPageProps = {
  posts?: StrapiPost[];
};

export default function PostsPage({ posts = [] }: PostsPageProps) {
  const [session, loading] = useSession();

  if (!session && !loading) {
    return <p>Voce não esta Autenticado</p>;
  }

  if (typeof window !== 'undefined' && loading) return null;
  if (!session) {
    return <p>Voce não esta Autenticado</p>;
  }

  return (
    <Wrapper>
      <h1>Olá {session?.user?.name || 'Ninguém'}</h1>
      {posts.map((post) => (
        <p key={'Post-' + post.id}>
          <Link href={`/${post.id}`}>
            <a>{post.title}</a>
          </Link>{' '}
        </p>
      ))}
    </Wrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (!session) {
    return serverSideRedirect(ctx);
  }

  try {
    const { posts } = await gqlClient.request(GQL_QUERY_GET_POSTS, null, {
      Authorization: `Bearer ${session.accessToken}`,
    });

    return {
      props: {
        session,
        posts,
      },
    };
  } catch (error) {
    return serverSideRedirect(ctx);
  }
};
