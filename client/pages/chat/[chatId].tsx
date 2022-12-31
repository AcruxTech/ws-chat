import { useRouter } from 'next/router';
import { Page } from '../../components/Page';

export default function Chat() {
  const router = useRouter();
  const { chatId } = router.query;

  return (
    <Page>
      <span>чат {chatId}</span>
    </Page>
  );
}
