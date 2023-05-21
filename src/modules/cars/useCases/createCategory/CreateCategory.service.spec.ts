import { rejects } from "assert";
import AppError from "../../../../errors/appError";
import { ICategoryRepository } from "../../../../repositories/ICategoryRepository";
import CategoryRepositoryMock from "../../../../repositories/implementations/test/CategoryRepositoryMock";
import { CreateCategoryService } from "./CreateCategory.service";
import "reflect-metadata";

let categoryRepository: ICategoryRepository;
let createCategoryService: CreateCategoryService;

describe(CreateCategoryService.name, () => {
  beforeEach(() => {
    categoryRepository = new CategoryRepositoryMock();
    createCategoryService = new CreateCategoryService(categoryRepository);
  });
  it("it should create a new category", async () => {
    const name = "Test Category";
    const description = "Test Category";
    const res = await createCategoryService.execute({ name, description });
    expect(res.name).toBe(name);
    expect(res.id).toBeTruthy();
  });
  it("it should NOT create a new category when user or description is not provided", () => {
    const name = "";
    const description = "Test Category description";
    expect(async () => {
      await createCategoryService.execute({ name, description });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("it should NOT create a new category when category it's already created ", async () => {
    const name = "Test Category";
    const description = "Test Category description";
    await createCategoryService.execute({ name, description });

    expect(
      async () => await createCategoryService.execute({ name, description })
    ).rejects.toBeInstanceOf(AppError);
  });
});
