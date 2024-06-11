import { useNavigate } from "react-router-dom";
import { Container } from "./ErrorPage.styles";
import Images from "../../assets/errorImage.png";
import { ButtonFill } from "../../styles/styles";

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <div className="error__img">
                <img src={Images} alt="pageNotFound" />
            </div>
            <div className="error__text">
                <h1>404</h1>
                <div>An error occurred!</div>
                <ButtonFill onClick={() => navigate("/")}>
                    <span>Return to the main page</span>
                </ButtonFill>
            </div>
        </Container>
    )
};
export default ErrorPage;