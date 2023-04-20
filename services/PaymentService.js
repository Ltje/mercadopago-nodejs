const axios = require('axios');

class paymentService {
  async createPayment() {
    // const url = 'https://api.mercadopago.com/v1/payments';
    const url = 'https://api.mercadopago.com/checkout/preferences';

    const body = {
      payer_email: 'test_user_148165916@testuser.com',
      items: [
        {
          title: 'Dummy Title',
          description: 'Dummy description',
          picture_url: 'http://www.myapp.com/myimage.jpg',
          category_id: 'car_electronics',
          quantity: 1,
          unit_price: 1,
        },
      ],
      back_urls: {
        success: 'success',
        failure: 'failure',
        pending: 'pending',
      },
      notification_url: 'notification',
    };
    // const body = {
    //   additional_info: {
    //     items: [
    //       {
    //         id: 'MLB2907679857',

    //         title: 'Point Mini',

    //         description:
    //           'Producto Point para cobros con tarjetas mediante bluetooth',

    //         category_id: 'electronics',

    //         quantity: 1,

    //         unit_price: 58.8,
    //       },
    //     ],

    //     payer: {
    //       first_name: 'Test',

    //       last_name: 'Test',

    //       address: {
    //         zip_code: '130001',

    //         street_name: 'Manga',

    //         street_number: 3003,
    //       },

    //       registration_date: '2023-04-15T19:22:41.001-03:00',
    //     },

    //     shipments: {
    //       receiver_address: {
    //         zip_code: '130001',

    //         state_name: 'Bolívar',

    //         city_name: 'Cartagena',

    //         street_name: 'Av das Nacoes Unidas',

    //         street_number: 3003,
    //       },
    //     },
    //   },

    //   description: 'Payment for product',

    //   external_reference: 'MP0001',

    //   installments: 1,

    //   payer: {
    //     entity_type: 'individual',

    //     type: 'customer',

    //     identification: {},

    //     email: 'ejemplo@gmail.com',
    //   },

    //   payment_method_id: 'visa',

    //   token: 'ff8080814c11e237014c1ff593b57b4d',

    //   transaction_amount: 58.8,
    // };

    const payment = await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.ACCESS_TOKEN_JUSTICE}`,
      },
    });
    return payment.data;
  }
}
module.exports = paymentService;
