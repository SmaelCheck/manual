import{Author} from '../Author/author';

export class Book {

    // Table Fields
    private _id?: string;
    private _title: string;
    private _author: Author;
    private _pub_date: string;

    // The Getters And Setters
    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get author(): Author {
        return this._author;
    }

    set author(value: Author) {
        this._author = value;
    }

    get pub_date(): string {
        return this._pub_date;
    }

    set pub_date(value: string) {
        this._pub_date = value;
    }

    /**
     * @param title
     */
    exist(title: string){

    }

    // The Features

    /**
     *
     * @param book
     * @returns {boolean}
     */

    remove(book: Book) : boolean{

        return false;
    }
    /**
     *
     * @param book
     * @returns {boolean}
     */

    add(book: Book): boolean{

        return false;
    }

    /**
     *
     * @param book
     * @returns {boolean}
     */

    update(book:Book): boolean{

        return false;
    }

}

