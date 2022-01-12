import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import { StrapiPost } from '../components/FormPost';
import { PrivateComponent } from '../components/PrivateComponent';
import { UpdatePostTemplate } from '../components/templates/UpdatePost';
import { gqlClient } from '../graphql/client';
import { GQL_QUERY_GET_POST } from '../graphql/queries/post';
import { serverSideRedirect } from '../utils/server-side-redirect';

export type PostPageProps = {
  post: StrapiPost;
};

export default function PostPage({ post }: PostPageProps) {
  return (
    <PrivateComponent>
      <UpdatePostTemplate post={post} />
    </PrivateComponent>
  );
}
