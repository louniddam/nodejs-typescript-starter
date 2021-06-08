import { CategoryRepo } from '../../categoryRepo'

export class DeleteCategory {
    private categoryRepo: CategoryRepo

    constructor(categoryRepo: CategoryRepo){
        this.categoryRepo = categoryRepo
    }

    public async deleteCategory(id: any) {
        return await this.categoryRepo.deleteCategory(id)
    }
}