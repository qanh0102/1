const MainNews = require('../models/MainNews');
const SecondaryNews = require('../models/SecondaryNews');

class NewsController {
    
    async index(req, res, next) {
        try {
             // Truy vấn dữ liệu từ cả hai collection
             const mainNews = await MainNews.find({});
             const secondaryNews = await SecondaryNews.find({});
 
             const allNews = { mainNews, secondaryNews };
 
            res.json(allNews);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new NewsController;
