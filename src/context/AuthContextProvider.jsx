import { createContext, useState, useEffect } from "react";
import { supabase } from "../supabase/client";

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const [session, setSession] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setData = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) throw error;
      setSession(session);
      setUser(session?.user);
      setLoading(false);
    };

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUser(session?.user);
        setLoading(false);
      }
    );

    setData();

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const signout = async () => {
    let { error } = await supabase.auth.signOut();
  };

  const value = {
    loading,
    user,
    session,
    signout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
