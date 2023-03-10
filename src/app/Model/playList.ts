export class PlayList {
  id!: number
  name!: string
  category!: string
  description!: string
  quantity!: string
  musician!: string
  created_at!: string
  updated_at!: string
  view!: number


  constructor(id: number, name: string, category: string, description: string, quantity: string, musician: string, created_at: string, updated_at: string, view: number) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.description = description;
    this.quantity = quantity;
    this.musician = musician;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.view = view;
  }
}
