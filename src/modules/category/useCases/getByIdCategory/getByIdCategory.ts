import { CategoryRepo } from "../../categoryRepo"

export class GetByIdCategory {
    private categoryRepo: CategoryRepo

    constructor(categoryRepo: CategoryRepo) {
        this.categoryRepo = categoryRepo
    }

    public async getByIdCategory(id: string) {
        return await this.categoryRepo.getByIdCategory(id);
    }
}