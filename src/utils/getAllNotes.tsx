import { NoteCard } from '../components';
import { NotesContainer } from '../styles/styles';
import { Note } from '../types/note';

const filteredNotes = (notes: Note[], filter: string) => {
    const lowPriority = notes.filter(({ priority }) => priority === "low");
    const highPriority = notes.filter(({ priority }) => priority === "high");

    if (filter === "low") {
        return [...lowPriority, ...highPriority];
    } else if (filter === "high") {
        return [...highPriority, ...lowPriority];
    } else if (filter === "latest") {
        return notes.sort((a, b) => b.createdAt - a.createdAt);
    }  else if (filter === "created") {
        return notes.sort((a, b) => a.createdAt - b.createdAt);
    } else if (filter === "edited") {
        const editedNotes = notes.filter(({ editedAt }) => editedAt)
        const normalNotes = notes.filter(({ editedAt }) => !editedAt)
        const sortedEdited = editedNotes.sort((a, b) => ((b.editedAt as number) - (a.editedAt as number)))
        return [...sortedEdited, ...normalNotes];
    } else {
        return notes;
    }
}

const getAllNotes = (mainNotes: Note[], filter: string) => {
    const pinned = mainNotes.filter(({ isPinned }) => isPinned);
    const normal = mainNotes.filter(({ isPinned }) => !isPinned);

    // normal notes
    if (normal.length !== 0 && pinned.length === 0) {
        return (
            <>
                <div className='allNotes__notes-type'>
                    All Notes<span>({ normal.length })</span>
                </div>
                <NotesContainer>
                    {filteredNotes(normal, filter).map((note) => (
                        <NoteCard key={note.id} note={note} type="notes"/>
                    ))}
                </NotesContainer>
            </>
        )
    }

    // pinned notes
    if (pinned.length !== 0 && normal.length === 0) {
        return (
            <>
                <div className='allNotes__notes-type'>
                    Pinned Notes<span>({ pinned.length })</span>
                </div>
                <NotesContainer>
                    {filteredNotes(pinned, filter).map((note) => (
                        <NoteCard key={note.id} note={note} type="notes"/>
                    ))}
                </NotesContainer>
            </>
        )
    }

    // all notes (pinned and normal)
    if (pinned.length !== 0 && normal.length !== 0) {
        return (
            <>
                <div>
                    <div className='allNotes__notes-type'>
                        Pinned Notes<span>({ pinned.length })</span>
                    </div>
                    <NotesContainer>
                        {filteredNotes(pinned, filter).map((note) => (
                            <NoteCard key={note.id} note={note} type="notes"/>
                        ))}
                    </NotesContainer>
                </div>
                <div>
                    <div className='allNotes__notes-type'>
                        All Notes<span>({ normal.length })</span>
                    </div>
                    <NotesContainer>
                        {filteredNotes(normal, filter).map((note) => (
                            <NoteCard key={note.id} note={note} type="notes"/>
                        ))}
                    </NotesContainer>
                </div>
            </>
        )
    }
}

export default getAllNotes;