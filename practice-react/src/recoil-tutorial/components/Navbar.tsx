import { useRecoilValue, useRecoilState } from "recoil";
import {
  networkAtom,
  jobAtom,
  notitficationAtom,
  messagingAtom,
  totalNotificationAtom,
} from "../atoms/navbar";

export default function Navbar() {
  const [networkCount, setNetworkCount] = useRecoilState(networkAtom);
  const jobCount = useRecoilValue(jobAtom);
  const notificationCount = useRecoilValue(notitficationAtom);
  const messageCount = useRecoilValue(messagingAtom);
  const totalCount = useRecoilValue(totalNotificationAtom);

  return (
    <>
      <div>
        <button onClick={() => setNetworkCount((c) => c + 1)}>
          Network {networkCount >= 100 ? "+99" : networkCount}
        </button>
        <button>Job {jobCount >= 100 ? "+99" : jobCount}</button>
        <button>
          Notification {notificationCount >= 100 ? "+99" : notificationCount}
        </button>
        <button>Messaging {messageCount >= 100 ? "+99" : messageCount}</button>
        <button>Total {totalCount}</button>
      </div>
    </>
  );
}
