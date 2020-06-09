import Dexie from 'dexie';

const db = new Dexie('CalculationDB');
db.version(1).stores(
    { calculation: '++id, datetime, onerepmax, goalreps, goalweight, calculatedreps, calculatedweight' }
);

export default db;