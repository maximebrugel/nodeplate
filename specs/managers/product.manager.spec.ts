import { ProductManager } from "../../src/managers/product.manager";

const productManager: ProductManager = new ProductManager();

describe("Test de managerExemple", () => {
	test("Check if the function return OK", () => {
		expect(productManager.managerExemple()).toEqual("OK");
	});
});
