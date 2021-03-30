import { IDrink } from '../interfaces/IDrink';
import { StorageService } from './StorageService';

export class MenuService {
  static getDrinks(): IDrink[] {
    console.log('Cant parse it', StorageService.getItem('drinks'));
    return JSON.parse(StorageService.getItem('drinks') || '') as IDrink[];
  }

  static saveDrinks(drinks: IDrink[]): void {
    StorageService.setItem('drinks', JSON.stringify(drinks));
  }

  static deleteDrink(id: number): void {
    const drinks = this.getDrinks().filter(drink => drink.id !== id);
    this.saveDrinks(drinks);
  }
  
  static saveDrink(drinkToSave: IDrink): void {
    const drinks = this.getDrinks();
    const index = drinks.findIndex(drink => drink.id === drinkToSave.id);
    drinks[index] = drinkToSave;
    this.saveDrinks(drinks);
  }
}