import { MainWrapper } from "../../components";
import { useAppSelector } from "../../hooks/redux";
import { Container, EmptyMsgBox } from "../../styles/styles";

const ArchiveNotes = () => {
    const { archiveNotes } = useAppSelector((state) => state.notesList);

    return(
        <Container>
            {archiveNotes.length === 0 ? 
                <EmptyMsgBox>No notes available</EmptyMsgBox>
                :
                <MainWrapper notes={archiveNotes} type="archive" />
            }
        </Container>
    )
}

export default ArchiveNotes;