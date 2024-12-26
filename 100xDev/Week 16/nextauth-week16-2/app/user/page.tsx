import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../lib/auth";

export default async function UserPage() {
  const session = await getServerSession(NEXT_AUTH);
  return (
    <div>
      <h1>User Page</h1>
      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
}