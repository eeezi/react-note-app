import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Container, StyledNav } from "./Navbar.styles";
import { FiMenu } from "react-icons/fi";
import { toggleMenu } from "../../store/menu/menuSlice";
import getStandardName from "../../utils/getStandardName";
import { ButtonFill } from "../../styles/styles";
import { toggleCreateNoteModal } from "../../store/modal/modalSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const { pathname, state} = useLocation();

    if (pathname === "/404") { return null; }

    return (
        <StyledNav>
            <div className="nav__menu">
                <FiMenu onClick={() => dispatch(toggleMenu(true))} />
            </div>
            <Container>
                <div className="nav__page-title">{getStandardName(state)}</div>
                {state !== "Trash" && state !== "Archive" && (
                    <ButtonFill
                        onClick={() => dispatch(toggleCreateNoteModal(true))}
                        className="nav__btn">
                        <span>+</span>
                    </ButtonFill>
                )}
            </Container>
        </StyledNav>
    )
}
export default Navbar;