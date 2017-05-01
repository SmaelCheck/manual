export class Author {

    // The Author Fields
    private _id?: string;
    private _name:string;
    private _birthdate : string;

    // The Getters And Setters

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get birthdate(): string {
        return this._birthdate;
    }

    set birthdate(value: string) {
        this._birthdate = value;
    }


    // The Features

    private _exist(name: string):Boolean{
        // Author in
        if(true){
            return true;
        }
        // Not in database
        return false;
    }

    static getAuthor(name: string){
        // Author is into database
        if(this._exist(name)){

            // return an Author
            return;
        }
        // Default returns false
        return false;
    }
    /**
     *
     * @param author
     * @returns {boolean}
     */
    remove(author: Author) : boolean{

        return false;
    }

    /**
     *
     * @param author
     * @returns {boolean}
     */
    add(author: Author): boolean{

        return false;
    }

    /**
     *
     * @param author
     * @returns {boolean}
     */
    update(author:Author): boolean{

        return false;
    }
    save(){}
}
