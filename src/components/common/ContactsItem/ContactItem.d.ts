declare namespace NContactItem {
    import { SendedMessage } from 'lib/types';

    interface IProps {
        id: string;
        name: string;
        avatar_src?: string;
        last_message?: string;
        last_message_date?: string;
        unread_message_count?: number;
        sended_message_status?: SendedMessage;
    }
}