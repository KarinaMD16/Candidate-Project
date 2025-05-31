import { useNavigate, useRouter } from "@tanstack/react-router";
import { signOut } from "../utils/auth";
import { PiUser } from "react-icons/pi";
import { TbReportSearch } from "react-icons/tb";
import { CgLogOut } from "react-icons/cg";

const Header = () => {
  const navigate = useNavigate();
  const router = useRouter();

  const currentPath = router.state.location.pathname;

  const isPerfil = currentPath === "/Perfil";
  const isOfertas = currentPath === "/Ofertas";

  const handleSignOut = () => {
    signOut();
    navigate({ to: "/Login" });
  };

  return (
    <header className="main-header">
      <nav className="main-nav">
        <div className="nav-left">
          <button
            className={isPerfil ? "nav-btn active" : "nav-btn inactive"}
            onClick={() => navigate({ to: "/Perfil" })}
          >
            <PiUser />
            Perfil
          </button>
          <button
            className={isOfertas ? "nav-btn active" : "nav-btn inactive"}
            onClick={() => navigate({ to: "/Ofertas" })}
          >
            <TbReportSearch />
            Ofertas
          </button>
        </div>
        <button className="nav-btn logout" onClick={handleSignOut}>
          <CgLogOut />
          Cerrar sesión
        </button>
      </nav>
    </header>
  );
};

export default Header;
