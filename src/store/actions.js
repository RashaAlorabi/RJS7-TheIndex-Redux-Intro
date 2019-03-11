const ADD_AUTHOR = "ADD_AUTHOR";
const DELETE_AUTHOR = "DELETE_AUTHOR";

export const addAuthor = () => {
  let newAuthor = {
    id: 1,
    first_name: "J.K.",
    last_name: "Rowling",
    imageUrl:
      "https://nation.com.pk/digital_images/large/2015-05-10/jk-rowling-believes-in-standing-up-to-bullies-1431261222-3596.jpeg",
    books: [
      {
        title: "Harry Potter and the Philosopher's Stone",
        color: "red"
      }
    ]
  };
  return {
    type: ADD_AUTHOR,
    payload: newAuthor
  };
};
export const deleteAuthor = author => {
  return {
    type: DELETE_AUTHOR,
    payload: author
  };
};
