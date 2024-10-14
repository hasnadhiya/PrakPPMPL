const Repository = require('./repository');

class Service {
 constructor() {
 this.repository = new Repository();
 this.primaryRepository = null;
 this.secondaryRepository = null;
 }

 getAllItems() {
 return this.repository.getAllItems();
 }

 getItemById(id) {
 let item = this.primaryRepository.getItemById(id);
 if (!item) {
         item = this.secondaryRepository.getItemById(id);
 }
 if (!item) {
         throw new Error('Item not found in both repositories'); }
 return item;
 }

 addItem(name) {
 const newItem = { id: this.repository.data.length + 1, name };
return this.repository.addItem(newItem);
 }
 
 // Fungsi yang ditambahkan untuk deleteItemById
deleteItemById(id) {
 const item = this.primaryRepository.getItemById(id);
 if (item) {
   this.primaryRepository.deleteItemById(id);
   return true;
 }
 return false;
 }
}

module.exports = Service;