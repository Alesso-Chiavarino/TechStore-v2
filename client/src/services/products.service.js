import { collection, getDocs, getDoc, doc, query, where } from 'firebase/firestore'
import { db } from '../config/firebase.config';

const collectionProd = collection(db, 'products');

export class ProductsService {
    async getProducts() {
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

    async getProductById(id) {
        try {
            const ref = doc(collectionProd, id)
            const querySnapshot = await getDoc(ref)
            const filteredProduct = {
                id: querySnapshot.id, ...querySnapshot.data()
            }
            return filteredProduct
        } catch (err) {
            throw new Error('Error getting product', err)
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