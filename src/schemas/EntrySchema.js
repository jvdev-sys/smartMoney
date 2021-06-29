const EntrySchema = {
  name: 'Entry',
  primaryKey: 'id',
  properties: {
    id: 'string',
    amount: 'double',
    description: 'string?',
    entryAt: 'date',
    latitude: 'float?',
    longitude: 'float?',
    adress: 'string?',
    photo: 'string?',
    isInit: 'bool',
    category: 'Category?',
  },
};

export default EntrySchema;
