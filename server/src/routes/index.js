const adminRouter = require('./admin');
const productRouter = require('./products');
const newsRouter = require('./news');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/products', productRouter);
    app.use('/admin', adminRouter);
}

module.exports = route;
