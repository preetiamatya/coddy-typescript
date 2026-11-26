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

    const clothingItem: InventoryItem<{ size: string; color: string }> = {
        id: 3,
        quantity: 10,
        details: { size: "M", color: "Blue" }
    };

    function addItem<T>(
        inventory: InventoryItem<T>[],
        newItem: InventoryItem<T>
    ): InventoryItem<T>[] {
        return [...inventory, newItem];
    }

    const bookInventory = [bookItem];
    const newBook: InventoryItem<{ title: string; author: string }> = {
        id: 4,
        quantity: 2,
        details: { title: "Advanced TypeScript", author: "Jane Smith" }
    };

    const updatedBookInventory = addItem(bookInventory, newBook);

    const electronicInventory = [electronicItem];

    const newElectronic: InventoryItem<{ brand: string; model: string }> = {
        id: 5,
        quantity: 1,
        details: { brand: "GadgetCorp", model: "Z500" }
    };

    const updatedElectronicInventory = addItem(electronicInventory, newElectronic);

    function findItemById<T>(
        inventory: InventoryItem<T>[],
        id: number,
    ): InventoryItem<T> | undefined {
        return inventory.find((item) => item.id === id);
    }

    const mixedBookInventory: InventoryItem<{ title: string; author: string }>[] = [{
        id: 10,
        quantity: 3,
        details: { title: "JavaScript Basics", author: "Alice Brown" }
    },
    {
        id: 11,
        quantity: 7,
        details: { title: "React Fundamentals", author: "Bob Wilson" }
    },
    {
        id: 12,
        quantity: 2,
        details: { title: "Node.js Guide", author: "Carol Davis" }
    }
    ]
    const mixedElectronicInventory: InventoryItem<{ brand: string; model: string }>[] = [{
        id: 20,
        quantity: 5,
        details: { brand: "Samsung", model: "Galaxy S23" }
    },
    {
        id: 21,
        quantity: 2,
        details: { brand: "Apple", model: "iPhone 15" }
    }
    ]


    console.log(findItemById(mixedBookInventory, 11)?.details.title);
    console.log(findItemById(mixedElectronicInventory, 20)?.details.brand);
    console.log(findItemById(mixedBookInventory, 99)?.details.title);
    console.log(findItemById(mixedBookInventory, 12)?.quantity);
    console.log(findItemById(mixedElectronicInventory, 21)?.details.model);
    console.log(findItemById(mixedBookInventory, 10)?.id);
    console.log(findItemById(mixedElectronicInventory, 50)?.id);


})();