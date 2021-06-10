import { categoryProps } from './categoryTypes'

export class CategoryRepo {
    private entities: any

    constructor(entities: any) {
        this.entities = entities   
    }

    public async getCategories() {
        const CategoryEntity = this.entities.Category
        return await CategoryEntity.find();
    }

    public async getByIdCategory(id: number) {
        const CategoryEntity = this.entities.Category
        return await CategoryEntity.findOne({ where: { id : id } } );
    }

    public async create(categoryProps: categoryProps) {
        const CategoryEntity = this.entities.Category
        return await CategoryEntity.create({ name: categoryProps.name, description: categoryProps.description }).save()
    }

    public async deleteCategory(id: number) {
        const CategoryEntity = this.entities.Category
        return await CategoryEntity.delete(id)
    }

    public async modifyCategory(id: number, props: categoryProps) {
        const CategoryEntity = this.entities.Category
        const updateCategory = await CategoryEntity.findOne({ where: { id: id } })

        return await CategoryEntity.save({id: updateCategory.id,  name: props.name, description: props.description})
    }
}