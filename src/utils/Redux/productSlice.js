import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        filteredProduct: [],
        selectedSize: "",
        tableCell: 0,
        selectedColor: "",
        modalOpen: false,
        userModal: false,
    },
    reducers: {
        addProducts: (state, action) => {
            state.items = action.payload
        },
        addFilteredData: (state, action) => {
            state.filteredProduct = action.payload
        },
        getCurrentSelectedSize: (state, action) => {
            state.selectedSize = action.payload
        },
        getCurrentColor: (state, action) => {
            state.selectedColor = action.payload
        },
        changeTableCell: (state, action) => {
            state.tableCell = action.payload
        },
        toggleModal: (state) => {
            state.modalOpen = !state.modalOpen
        },
        toggleUserModal: (state) => {
            state.userModal = !state.userModal
        }
    }
})

export const {addProducts, addFilteredData, getCurrentSelectedSize, changeTableCell, getCurrentColor, toggleModal, toggleUserModal} = productSlice.actions
export default productSlice.reducer