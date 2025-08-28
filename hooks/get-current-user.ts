import { useStore } from "@/app/store/store";
import { fetcher } from "@/lib/fetcher";
import { useEffect, useState } from "react";

export function useCurrentUser() {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { setIsLoggedIn, isLoggedIn } = useStore((state) => state);

  useEffect(() => {
    if (isLoggedIn) {
      setLoading(false);
      return;
    }
    async function fetchUser() {
      setLoading(true);
      setError(null);
      try {
        // Replace with your actual API endpoint
        const response = await fetcher("/api/user/me");
        if (!response.ok) throw new Error("Failed to fetch user");
        const data: any = await response.json();
        setUser(data.dbUser[0]);
        setIsLoggedIn(true);
      } catch (err) {
        setError(err as Error);
        setUser(null);
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [isLoggedIn, setIsLoggedIn]);

  return { user, loading, error, isLoggedIn };
}
