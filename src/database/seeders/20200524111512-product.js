"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [];

    for (let i = 1; i <= 5; i++) {
      const newRecord = {
        title: "Test Product " + i,
        slug: "test-slug-" + i,
        image_one: "Product" + i + ".jpeg",
        price: 1000 * i,
        description: `
        A product description is the marketing copy that explains what a product is and why it’s worth purchasing. The purpose of a product description is to supply customers with important information about the features and benefits of the product so they’re compelled to buy.

        However, entrepreneurs and marketers alike are susceptible to a common mistake that comes up when writing product descriptions. Even professional copywriters make it sometimes: writing product descriptions that simply describe your products.

        Why is it wrong? Because great product descriptions need to augment your product pages by selling your products to real people, not just acting as back-of-the-box dispensers of information for search engines (though search engine optimization can't be an afterthought, of course).

        When you write a product description with a huge crowd of buyers in mind, your descriptions become wishy-washy and you end up addressing no one at all.

        The best product descriptions address your target audience directly and personally. You ask and answer questions as if you’re having a conversation with them. You choose the words your ideal buyer uses. You use the word you.

        
        When it comes to writing your own product descriptions, start by imagining your ideal buyer. What kind of humor does he or she appreciate (if any)? What words does he use? What words does he hate? Is he okay with words like sucky and crappy? What questions does he ask that you should answer?
        `,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      data.push(newRecord);
    }

    return queryInterface.bulkInsert("products", data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  },
};
