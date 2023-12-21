import { Storage, Drivers } from "@ionic/storage";

var storage = false;

export const createStorage = async (name = "__myStorage") => {
    storage = new Storage({
        name,
        driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
    });
    await storage.create();
}

export const getFromStorage = async (key) => {
    return await storage.get(key);
}

export const setToStorage = async (key, value) => {
    await storage.set(key, value);
}