import { CategoryRepo } from '../../categoryRepo'
import { categoryProps } from '../../categoryTypes'

export class UpdateCategory {
    private categoryRepo: CategoryRepo

    constructor(categoryRepo: CategoryRepo){
        this.categoryRepo = categoryRepo
    }

    public async updateCategory (id: string, props: categoryProps) {
        return await this.categoryRepo.modifyCategory(id, props)
    }
}