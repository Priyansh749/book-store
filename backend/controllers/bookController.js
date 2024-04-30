const Book = require("../model/Book")

const getAllBooks = async (req, res, next) => {
    let books;
    try {
        books = await Book.find();
    }
    catch (err) {
        console.log(err);
    }

    if (!books) {
        return res.status(404).json({ messege: "No products found!!" })
    }
    return res.status(200).json({ books })
}

const addBook = async (req, res, next) => {
    const { name, author, description, price, available, image} = req.body

    let book;
    try {
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image
        });
        await book.save()
    }
    catch (error) {
        console.log(error);
    }

    if (!book) {
        return res.status(500).json({ messege: "Unable to Add" })
    }
    return res.status(201).json({ book })
}

const getBookById = async (req, res, next) => {
    const id = req.params.id
    let book;
    try {
        book = await Book.findById(id)
    }
    catch (error) {
        console.log(error);
    }
    if (!book) {
        res.status(404).json({ messege: "book not found" })
    }
    return res.status(200).json({ book })

}

const updateBookById = async (req, res, next) => {
    const id = req.params.id
    const { name, author, description, price, available, image } = req.body
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, { name, author, description, price, available })
        book = await book.save()
    }
    catch (error) {
        console.log(error);
    }
    if (!book) {
        return res.status(404).send("unable to update")
    }
    return res.status(201).json({ book })

}

const deleteBookById = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
    }
    if (!book) {
        return res.status(404).send('the book was not found')
    }
    return res.status(200).json({ book })
}

exports.addBook = addBook;
exports.getAllBooks = getAllBooks;
exports.getBookById = getBookById;
exports.updateBookById = updateBookById;
exports.deleteBookById = deleteBookById