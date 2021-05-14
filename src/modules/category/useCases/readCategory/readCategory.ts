import { CategoryRepo } from '../../categoryRepo'
// import { categoryProps } from '../categoryTypes'

export class ReadCategory {

    private categoryRepo: CategoryRepo

    constructor(categoryRepo: CategoryRepo) {
        this.categoryRepo = categoryRepo
    }

        public async getCategories() {
        return await this.categoryRepo.getCategories();
    }
}