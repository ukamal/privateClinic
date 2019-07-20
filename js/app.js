new Vue({
    el: '#app',
    
    methods:{
        addProductToCart:function(product){
            this.cart.items.push({
                product: product,
                quantity:1
            });
             product.inStock--;
        },
        checkOut:function(){
            if(confirm('Are You Sure To Buy This Product')){
               return this.cart.items=[];
            }
        },
        inCreaseCartQuantity:function(cartItem){
            cartItem.product.inStock--;
            cartItem.quantity++;
        },
        deCreaseCartQuantity:function(cartItem){
            cartItem.product.inStock++;
            cartItem.quantity--;
        },
        
    },
    computed:{
      cartTotal: function(){
          var total = 0;
          this.cart.items.forEach(function(item){
              total +=item.quantity * item.product.price;
          });
          return total;
      } ,
      taxAmount:function(){
          return ((this.cartTotal * 10) / 100);
      }
    },
    data: {
        isShowingCart:false,
        cart:{
          items:[]  
        },
        products: [
            {
                id: 1,
                name: 'Can you get an STD from sperm on skin?',
                description: 'Yes, it/s possible to get a sexually transmitted infection even if your partner doesn/t ejaculate inside your vagina. STDs can be transmitted through semen, but there are a lot of other ways they can be spread, including contact with vaginal fluid, pre-cum, open cuts or sores, and skin-to-skin contact.',
                price: 2999,
                inStock: 98
            },
            {
                id: 2,
                name: 'What are the first signs of an STD?',
                description: 'According to the American Social Health Organization, one out of four teens in the United States becomes infected with an STD each year. By the age of 25, half of all sexually active young adults will get an STD.',
                price: 299,
                inStock: 98
            },
            {
                id: 3,
                name: 'What are the first signs of an STD?',
                description: 'According to the American Social Health Organization, one out of four teens in the United States becomes infected with an STD each year. By the age of 25, half of all sexually active young adults will get an STD.',
                price: 149,
                inStock: 96
            },
            {
                id: 4,
                name: 'Sexual Health / STDs News',
                description: 'Sexuality is a big part of being human. Love, affection and sexual intimacy all play a role in healthy relationships. A number of disorders can affect the ability to have or enjoy sex in both men and women. Factors that can affect sexual health include fear of unplanned pregnancy, concerns about infertility, sexually transmitted diseases, chronic diseases such as cancer or heart disease and medicines that affect sexual desire or performance.',
                price: 49,
                inStock: 99
            },
            {
                id: 5,
                name: 'Sexual Health / STDs News',
                description: 'According to the American Social Health Organization, one out of four teens in the United States becomes infected with an STD each year. By the age of 25, half of all sexually active young adults will get an STD.',
                price: 599,
                inStock: 100
            },
            {
                id: 6,
                name: 'Sexual Health / STDs News',
                description: 'According to the American Social Health Organization, one out of four teens in the United States becomes infected with an STD each year. By the age of 25, half of all sexually active young adults will get an STD.',
                price: 19,
                inStock: 100
            }
        ]
    }
});