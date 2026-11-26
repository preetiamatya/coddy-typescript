(() => {
    // Create the InventoryItem interface and the required objects
    interface InventoryItem<T> {
        id: number;
        quantity: number;
        details: T;
    }

    const bookItem: InventoryItem<{ title: string; author: string }> = {
        id: 1,
        quantity: 5,
        details: { title: "TypeScript Guide", author: "John Doe" }
    };

    const electronicItem: InventoryItem<{ brand: string; model: string }> = {
        id: 2,
        quantity: 3,
        details: { brand: "TechCorp", model: "X200" }
    };


    type Book = {
        title: string;
        author: string;
    };

    type Electronic = {
        brand: string;
        model: string;
    };

    type BookItem = InventoryItem<Book>;
    type ElectronicItem = InventoryItem<Electronic>;

    const specificBook: BookItem = {
        id: 100,
        quantity: 8,
        details: { title: "Clean Code", author: "Robert Martin" }
    };

    const specificElectronic: ElectronicItem = {
        id: 200,
        quantity: 4,
        details: { brand: "Sony", model: "WH-1000XM4" }
    };

    const bookStore: BookItem[] = [specificBook];
    const electronicStore: ElectronicItem[] = [specificElectronic];
    const anotherBook: BookItem = {
        id: 101,
        quantity: 3,
        details: { title: "Design Patterns", author: "Gang of Four" }
    };
    function addItem<T>(
        inventory: InventoryItem<T>[],
        newItem: InventoryItem<T>
    ): InventoryItem<T>[] {
        return [...inventory, newItem];
    }
    function findItemById<T>(
        inventory: InventoryItem<T>[],
        id: number,
    ): InventoryItem<T> | undefined {
        return inventory.find((item) => item.id === id);
    }

    const expandedBookStore = addItem(bookStore, anotherBook);

    console.log(specificBook.details.title);
    console.log(specificBook.details.author);
    console.log(specificElectronic.details.brand);
    console.log(specificElectronic.details.model);
    console.log(expandedBookStore.length);

    console.log(findItemById(expandedBookStore, 101)?.details.title);
    console.log(findItemById(electronicStore, 200)?.quantity);

    console.log(expandedBookStore[1].details.author);
})();