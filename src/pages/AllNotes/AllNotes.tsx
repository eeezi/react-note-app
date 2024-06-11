import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ButtonOutline, Container, EmptyMsgBox } from "../../styles/styles";
import { Box, InputBox, TopBox } from "./AllNotes.styles";
import { toggleFiltersModal } from "../../store/modal/modalSlice";
import getAllNotes from "../../utils/getAllNotes";
import { FiltersModal } from "../../components";

const AllNotes = () => {
    const dispatch = useAppDispatch();
    const { mainNotes } = useAppSelector((state) => state.notesList);
    const { viewFiltersModal } = useAppSelector((state) => state.modal);
    const [filter, setFilter] = useState("");
    const[searchInput, setSearchInput] = useState("");

    const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    }

    const clearHandler = () => {
        setFilter("");
    }

    return (
        <Container>
            {/* filters modal */}
            {viewFiltersModal && (
                <FiltersModal
                    handleFilter={filterHandler}
                    handleClear={clearHandler}
                    filter={filter}
                />
            )}
            {/* notes */}
            {mainNotes.length === 0 ? (
                <EmptyMsgBox>No notes available</EmptyMsgBox>
                ) : (
                <>
                <TopBox>
                    <InputBox>
                        <input
                            type="text" value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            placeholder="Enter the note title .."
                        />
                    </InputBox>

                    <div className="notes__filter-btn">
                        <ButtonOutline
                            className="nav__btn"
                            onClick={() => dispatch(toggleFiltersModal(true))}
                        >
                            <span>Sort</span>
                        </ButtonOutline>
                    </div>
                </TopBox>

                <Box>
                    {/* Notes */}
                    {getAllNotes(mainNotes, filter)}
                </Box>
                </>
                )
            }
        </Container>
    )
}

export default AllNotes;