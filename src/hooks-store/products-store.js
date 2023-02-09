import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (currentState, productId) => {
      const currentProductIndex = currentState.products.findIndex(
        (item) => item.id === productId
      );
      const newFavStatus =
        !currentState.products[currentProductIndex].isFavorite;
      const updatedProductsList = [...currentState.products];
      updatedProductsList[currentProductIndex] = {
        ...currentState.products[currentProductIndex],
        isFavorite: newFavStatus,
      };

      return { products: updatedProductsList };
    },
  };

  initStore(actions, {
    products: [
      {
        id: "p1",
        title: "Red Scarf",
        description: "A pretty red scarf.",
        isFavorite: false,
      },
      {
        id: "p2",
        title: "Blue T-Shirt",
        description: "A pretty blue t-shirt.",
        isFavorite: false,
      },
      {
        id: "p3",
        title: "Green Trousers",
        description: "A pair of lightly green trousers.",
        isFavorite: false,
      },
      {
        id: "p4",
        title: "Orange Hat",
        description: "Street style! An orange hat.",
        isFavorite: false,
      },
    ],
  });
};

export default configureStore;
