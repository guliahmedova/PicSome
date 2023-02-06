import { createContext, useState, useEffect } from "react";

const Context = createContext()

function ContextProvider({ children }) {

    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        fetch(url).then(resp => resp.json()).then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id) {
        const newArr = allPhotos.map(photo => {
            if (photo.id === id) {
                return { ...photo, isFavorite: !photo.isFavorite }
            }
            return photo
        })
        setAllPhotos(newArr)
    }

    function addCart(newImg) {
        setCartItems(prevCartItem => [...prevCartItem, newImg])
    }

    function removeFromCart(id) {
        const newElements = cartItems.filter(item => item.id !== id)
        setCartItems(prevItem => newElements)
    }

    function emptyCart(){
        setCartItems([])
    }

    return (
        <Context.Provider value={{ 
        allPhotos, 
        cartItems, 
        toggleFavorite, 
        addCart , 
        removeFromCart, 
        emptyCart}}
        >
            {children}
        </Context.Provider>
    )

}

export { ContextProvider, Context }