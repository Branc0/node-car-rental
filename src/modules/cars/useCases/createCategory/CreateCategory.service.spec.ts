import AppError from "../../../../errors/appError";
import { ICategoryRepository } from "../../../../repositories/ICategoryRepository";
import CategoryRepositoryMock from "../../../../repositories/implementations/test/CategoryRepositoryMock";
import { CreateCategoryService } from "./CreateCategory.service";
import "reflect-metadata";

let categoryRepository: ICategoryRepository;
let createCategoryService: CreateCategoryService;

describe("fas", () => {
  beforeEach(() => {
    categoryRepository = new CategoryRepositoryMock();
    createCategoryService = new CreateCategoryService(categoryRepository);
  });
  it("it should create a new category", async () => {
    const name = "Test Category";
    const description = "Test Category";
    const res = await createCategoryService.execute({ name, description });
    expect(res.name).toBe(name);
  });
});
