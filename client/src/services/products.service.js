import { collection, getDocs, query, queryEqual, where } from 'firebase/firestore'
import { db } from './firebaseConfig';

const collectionProd = collection(db, 'products');

export class ProductsService {
    async getProducts(ref) {
        try {
            const querySnapshot = await getDocs(collectionProd);
            const products = querySnapshot.docs.map(prod => {
                return {
                    id: prod.id,
                    ...prod.data(),
                }
            });
            return products
        } catch (err) {
            console.log(err)
        }
    }
    async getProductByCategoryName(categoryName) {
        const ref = categoryName ? query(collectionProd, where('category', '==', categoryName)) : collectionProd;

        try {
            const querySnapshot = await getDocs(ref);
            const products = querySnapshot.docs.map(prod => {
                return {
                    id: prod.id,
                    ...prod.data(),
                }
            });
            return products
        } catch (err) {
            console.log(err)
        }
    }

    async getProductsByOrder(beg, fin) {
        try {
            const ref = query(collectionProd, where('order', '>=', beg), where('order', '<=', fin))
            const querySnapshot = await getDocs(ref);
            const products = querySnapshot?.docs?.map(prod => {
                return {
                    id: prod.id,
                    ...prod.data()
                }
            })
            return products
        } catch (err) {
            throw new Error('Error getting products', err)
        }

    }
}