import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { Note } from "../../types/note";
import { Container, EmptyMsgBox } from "../../styles/styles";
import { MainWrapper } from "../../components";

const TagNotes = () => {
    const { name } = useParams() as { name: string };
    const { mainNotes } = useAppSelector((state) => state.notesList);

    const notes: Note[] = [];
    mainNotes.forEach((note) => {
        if (note.tags.find(({ tag }) => tag === name)) {
            notes.push(note);
        }
    })

    return (
        <Container>
      {notes.length === 0 ? (
        <EmptyMsgBox>No notes available</EmptyMsgBox>
      ) :
        (<MainWrapper notes={notes} type={name} />)}
    </Container>
    )
}

export default TagNotes;