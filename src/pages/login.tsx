import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FormLogin } from '../components/FormLogin';
import { Wrapper } from '../components/Wrapper';

export default function LoginPage() {
  const [error, setError] = useState('');

  const handleLogin = async (email: string, password: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const response = await signIn('credential', {
      email,
      password,
      redirect: false,
    });

    if (!response.ok) {
      setError('Usuário ou senha inválidos');
      return;
    }

    const redirect = router.query?.redirect || '/';
    router.push(redirect as string);
  };

  return (
    <Wrapper>
      <FormLogin onLogin={handleLogin} errorMessage={error} />
    </Wrapper>
  );
}
