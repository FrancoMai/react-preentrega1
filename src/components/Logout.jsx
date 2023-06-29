import { useAuth } from "../context/AuthContext";

export function Logout1() {
  const { logout, user, setUser, loading } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
      setUser;
    } catch (error) {
      console.error(error.message);
    }
  };

  if (loading) return <h1>Loading</h1>

  return (
    <div className="w-full max-w-xs m-auto text-black">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <button
          className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
          onClick={handleLogout}
        >
          Logout
        </button>
        
      </div>
    </div>
  );
}