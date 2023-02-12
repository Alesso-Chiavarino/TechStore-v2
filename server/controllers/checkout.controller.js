import mercadopago from 'mercadopago';
import { config } from 'dotenv'

config();

mercadopago.configure({
    access_token: process.env.MERCADOPAGO_ACCESS_TOKEN
})


export const checkout = async (req, res) => {

    const products = req.body;

    var preference = {
        items: products,
        back_urls: {
            success: 'https://tttechstore.vercel.app',
            failure: '',
            pending: '',
        },
        auto_return: 'approved',
        binary_mode: true,
    };



    mercadopago.preferences.create(preference)
        .then((response) => {
            console.log(response.body.init_point)
            res.send(response.body.init_point);
        })
        .catch(error => console.log(error))
}