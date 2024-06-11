import { MainWrapper } from "../../components";
import { useAppSelector } from "../../hooks/redux";
import { Container, EmptyMsgBox } from "../../styles/styles";

const TrashNotes = () => {
    const { trashNotes } = useAppSelector((state) => state.notesList);

    return (
        <Container>
            {trashNotes.length === 0 ? (
                <EmptyMsgBox>No notes available</EmptyMsgBox>
            ) : (
                <MainWrapper notes={trashNotes} type="trash" />
            )}
        </Container>
    )
}

export default TrashNotes;