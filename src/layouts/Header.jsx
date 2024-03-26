import { Link } from "react-router-dom"
const Header = () => {
  return (
    <>
        <Link to="/">
            <button>
                Main
            </button>

        </Link>
        <Link to="/About">
            <button>
                About
            </button>

        </Link>
        <Link to="/Titans">
            <button>
                Titans
            </button>

        </Link>
        <Link to="/Characters">
            <button>
                Characters
            </button>

        </Link>
        <Link to="/Localizations">
            <button>
                Localizations
            </button>

        </Link>
        

    </>
  )
}

export default Header

