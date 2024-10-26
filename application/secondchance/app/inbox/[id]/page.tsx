import ConversationDetail from "@/app/components/inbox/ConversationDetail";
import { UserType } from "@/app/inbox/page";
import { getAccessToken, getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";

export type MessageType = {
  id: string;
  name: string;
  body: string;
  conversationId: string;
  sent_to: UserType;
  created_by: UserType;
};

const ConversationPage = async ({ params }: { params: { id: string } }) => {
  const userId = await getUserId();
  const token = await getAccessToken();

  if (!userId || !token) {
    return (
      <main className="w-full mx-auto px-6 py-12">
        <p>You need to be authenticated...</p>
      </main>
    );
  }

  const conversation = await apiService.get(`/api/chat/${params.id}/`);

  return (
    <main className="w-full mx-auto px-6 pb-6">
      <ConversationDetail
        token={token}
        userId={userId}
        messages={conversation.messages}
        conversation={conversation.conversation}
      />
    </main>
  );
};

export default ConversationPage;
