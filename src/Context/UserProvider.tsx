import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { UserContext } from './LoggedUser';
import type { LoggedUserType } from './LoggedUser';
import { useGetLoggedUserQuery } from '../App/api/Auth/auth';

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const token = localStorage.getItem('token');

  // skip query if no token
  const { data, isError, isLoading, refetch, error } = useGetLoggedUserQuery(undefined, {
    skip: !token,
  });

  const [user, setUser] = useState<LoggedUserType | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string | null>(null);

  // Handle API response
  useEffect(() => {
    if (!token) {
      // no token → user not logged in
      setUser(null);
      setSuccess(false);
      setErrMsg('No token found, please login.');
      return;
    }

    if (data) {
      if (data.success) {
        setUser(data.data);
        setSuccess(true);
        setErrMsg(null);
      } else {
        setUser(null);
        setSuccess(false);
        setErrMsg(data.message || 'Failed to fetch user.');
      }
    } else if (isError) {
      setUser(null);
      setSuccess(false);

      // Try to get error message from RTK Query
      const message =
        'status' in error && error.status === 401
          ? 'Unauthorized. Please login again.'
          : 'Failed to fetch user.';
      setErrMsg(message);
    }
  }, [data, isError, error, token]);

  // Optional: refetch user if token changes
  useEffect(() => {
    if (token) {refetch();}
  }, [token, refetch]);

  return (
    <UserContext.Provider
      value={{
        user,
        loading: isLoading,
        error: errMsg,
        success,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
