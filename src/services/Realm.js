import Realm from 'realm';

import CategorySchema from '../schemas/CategorySchema';
import EntrySchema from '../schemas/EntrySchema';
import {getAllCategories, getDefaultCategories} from './Categories';
import {cleanInitialized} from './Welcome';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntrySchema],
    schemaVersion: 6,
  });
  initDB(realm);
  //cleanInitialized();
  //dropDB(realm); 
  return realm;
};

export const initDB = realm => {
  const categoriesLength = realm.objects('Category').length;
  if (categoriesLength === 0) {
    const categories = getDefaultCategories();
    try {
      realm.write(() => {
        categories.forEach(category => {
          realm.create('Category', category, true);
        });
      });
    } catch (error) {}
  }else{
    
  }
};

export const dropDB = realm =>{
  console.log('dropDB :: dropping DB...');
  realm.write(() => {
    realm.deleteAll();
  });
}
