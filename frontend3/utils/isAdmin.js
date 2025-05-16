import { useUser } from "@/context/UserContext";

export default function isAdmin() {
  const { user } = useUser();
  return user?.role == "admin";
}
