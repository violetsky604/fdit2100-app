import { type RouteObject } from "react-router";
import App from '@/App';
import LatestPosts from "@/components/latestPosts/LatestPosts";
import Members from "@/screens/members/Members";
import Messages from "@/screens/messages/Messages";
import Notifications from "@/screens/notifications/Notifications";

const routes: RouteObject[] = [
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                Component: LatestPosts
            },
            {
                path: '/members',
                Component: Members
            },
            {
                path: '/messages',
                Component: Messages
            },
            {
                path: '/notifications',
                Component: Notifications
            }
        ]
    }
];
export default routes;