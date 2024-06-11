import { Dispatch } from "@reduxjs/toolkit";
import { Note } from "../types/note";
import { NotesIconBox } from "../styles/styles";
import { toggleCreateNoteModal } from "../store/modal/modalSlice";
import { restoreNote, setEditNote, setTrashNotes, unarchiveNote, deleteNote, setArchiveNotes } from "../store/notesList/noteListSlice";
import { RiInboxUnarchiveFill } from "react-icons/ri";
import { FaEdit, FaTrash, FaTrashRestore } from "react-icons/fa";

const getRelevantBtns = (type: string, note: Note, dispatch: Dispatch) => {
    const clickHandler = () => {
        dispatch(toggleCreateNoteModal(true));
        dispatch(setEditNote(note));
    }

    if (type === "archive") {
        return (
            <>
            <NotesIconBox
                onClick={() => dispatch(unarchiveNote(note))}
                data-info="Unarchive"
            >
                <RiInboxUnarchiveFill style={{ fontSize: "1rem"}} />
            </NotesIconBox>
            <NotesIconBox
                onClick={() => dispatch(setTrashNotes(note))}
                data-info="Delete"
            >
                <FaTrash />
            </NotesIconBox>
            </>
        )
    } else if (type === "trash") {
        return (
            <>
            <NotesIconBox
                onClick={() => dispatch(restoreNote(note))}
                data-info="Restore"
            >
                <FaTrashRestore style={{ fontSize: '1rem' }}/>
            </NotesIconBox>
            <NotesIconBox
                onClick={() => dispatch(deleteNote(note))}
                data-info="Delete"
            >
                <FaTrash />
            </NotesIconBox>
            </>
        )
    } else {
        return (
            <>
                <NotesIconBox
                    onClick={clickHandler}
                    data-info="Edit"
                >
                    <FaEdit style={{ fontSize: '1rem' }} />
                </NotesIconBox>
                <NotesIconBox
                    onClick={() => dispatch(setArchiveNotes(note))}
                    data-info="Archive"
                >
                    <FaTrashRestore style={{ fontSize: '1rem' }} />
                </NotesIconBox>
                <NotesIconBox
                    onClick={() => dispatch(setTrashNotes(note))}
                    data-info="Delete"
                >
                    <FaTrash />
                </NotesIconBox>
            </>
        )
    }
}

export default getRelevantBtns;