import { auth0 } from "@/lib/auth0";
import { Twinkle_Star, Unkempt } from "next/font/google";
const firstFont = Unkempt({
  subsets: ["latin"],
  weight: ["400"],
});
const secondFont = Twinkle_Star({
  subsets: ["latin"],
  weight: ["400"],
});
const Navbar = async () => {
  const session = await auth0.getSession();
  return (
    <div className="bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
      <div className="navbar  shadow-sm">
        <div className="flex-1">
          <a
            href="/"
            className={`text-white btn btn-ghost md:text-3xl ${firstFont.className} border-2 border-gray-300 rounded-lg bg-linear-to-r from-blue-500 from-10% via-sky-500 via-30% to-yellow-500 to-90% ...`}
          >
            Image Drop AI
          </a>
        </div>
        <div className="flex flex-row md:mr-13">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                href="/profile"
                className={`${secondFont.className} text-3xl text-white my-auto bg-linear-to-r from-yellow-500 from-10% via-sky-500 via-30% to-orange-500 to-90% ...`}
              >
                Profile
              </a>
            </li>
            <li>
              <details>
                <summary>
                  <img
                    alt=""
                    className="w-8 h-8 rounded-full my-auto"
                    src={session?.user.picture}
                  />
                </summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  {!session ? (
                    <li>
                      <a
                        className={`${secondFont.className} md:text-3xl text-white my-auto bg-linear-to-r from-yellow-500 from-10% via-sky-500 via-30% to-orange-500 to-90% ...`}
                        href="/auth/login"
                      >
                        Login
                      </a>
                    </li>
                  ) : (
                    <li>
                      <a
                        className={`${secondFont.className} md:text-3xl text-white my-auto bg-linear-to-r from-yellow-500 from-10% via-sky-500 via-30% to-orange-500 to-90% ...`}
                        href="/auth/logout"
                      >
                        Logout
                      </a>
                    </li>
                  )}
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
