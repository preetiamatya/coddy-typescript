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


    function getItemDetails(item: InventoryItem<any>): void {
        if ("title" in item.details) {
            console.log(`Book: ${item.details.title} by ${item.details.author}`);
        }

        else if ("brand" in item.details) {
            console.log(`Electronic: ${item.details.brand} ${item.details.model}`);
        }
        else {
            console.log("Unknown item type");
        }


    }

    const testBook: InventoryItem<any> = {
        id: 300,
        quantity: 6,
        details: { title: "TypeScript Handbook", author: "Microsoft Team" }
    };

    const testElectronic: InventoryItem<any> = {
        id: 400,
        quantity: 2,
        details: { brand: "Dell", model: "XPS 13" }
    };

    const unknownItem: InventoryItem<any> = {
        id: 500,
        quantity: 1,
        details: { color: "Red", size: "Large" }
    };

    getItemDetails(testBook);
    getItemDetails(testElectronic);
    getItemDetails(unknownItem);

    const foundItem = findItemById(expandedBookStore, 100);

    if (foundItem) {
        getItemDetails(foundItem);
    }

    const foundElectronicItem = findItemById(electronicStore, 200);

    if (foundElectronicItem) {
        getItemDetails(foundElectronicItem);
    }
})();









