import { GoogleLogin } from "@react-oauth/google";
import { useLocation } from "wouter";
import { useStore } from "@/context/StoreContext";

export default function AdminLogin() {
  const { login } = useStore();
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-md text-center space-y-4">
        <h2 className="text-2xl font-bold">Admin Login</h2>

        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            const res = await fetch("/api/auth/google", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                token: credentialResponse.credential,
              }),
            });

            if (res.ok) {
              login();
              setLocation("/admin/dashboard");
            } else {
              alert("Access denied");
            }
          }}
          onError={() => {
            alert("Google Login Failed");
          }}
        />
      </div>
    </div>
  );
}
